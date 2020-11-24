function humanizeDate (datetime) {
  const date = new Date(datetime)
  const yy = date.getFullYear()
  const mm = (date.getMonth() + 1) < 10 ? `0${(date.getMonth() + 1)}` : (date.getMonth() + 1)
  const dd = date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()

  return `${dd}.${mm}.${yy}`
}

export const state = () => {
  return {
    list: []
  }
}

export const getters = {
  getListPage: state => (pageCount, currentPage) => {
    const start = (currentPage - 1) * pageCount
    const end = (currentPage - 1) * pageCount + pageCount
    return state.list.slice(start, end)
  },
  getListLength: (state) => {
    return state.list.length
  },
  getListItem: state => (id) => {
    return state.list.find(item => item.id === id)
  }
}

export const mutations = {
  save: (state, payload) => {
    state.list = payload
  },
  removeItemById: (state, id) => {
    if (confirm('Remove this course?')) {
      state.list = state.list.filter((item) => {
        return item.id !== id
      })
    }
  },
  saveItem: (state, payload) => {
    if (payload.id) {
      state.list = state.list.map((item) => {
        if (item.id === payload.id) {
          item = payload
        }
        return item
      })
    } else {
      let maxID = 0
      state.list.forEach((item) => {
        maxID = Math.max(item.id, maxID)
      })
      payload.id = ++maxID
      payload.created_at = humanizeDate(new Date().getTime())
      state.list.push(payload)
    }
  },
  sortBy: (state, { field, direction }) => {
    if (!field) {
      field = 'id'
    }
    state.list.sort(function (a, b) {
      let dir = 1
      if (direction === 'DESC') { dir = -1 }
      if (a[field] > b[field]) {
        return dir
      }
      if (a[field] < b[field]) {
        return -dir
      }
      return 0
    })
  }
}

export const actions = {
  load: ({ state, commit }) => {
    if (state.list.length) { return }
    const data = require('~/data/data.json')
    commit('save', data)
  }
}
