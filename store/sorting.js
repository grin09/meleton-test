export const state = () => {
  return {
    sort_direction: 'ASC',
    sort_field: ''
  }
}

export const getters = {
  sort_direction: (state) => {
    return state.sort_direction
  },
  sort_field: (state) => {
    return state.sort_field
  }
}

export const mutations = {
  setSortDirection: (state, payload) => {
    state.sort_direction = payload
  },
  setSortField: (state, payload) => {
    state.sort_field = payload
  }
}
