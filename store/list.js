export const state = () => {
  return {
    list: [],
  };
};

export const getters = {
  getListPage: (state) => (pageCount, currentPage) => {
    let start = (currentPage - 1) * pageCount;
    let end = (currentPage - 1) * pageCount + pageCount;
    return state.list.slice(start, end);
  },
  getListLength: (state) => {
    return state.list.length;
  },
  getListItem: (state) => (id) => {
    return state.list.find((item) => item.id == id);
  },
};

export const mutations = {
  save: (state, payload) => {
    state.list = payload;
  },
  removeItemById: (state, id) => {
    state.list = state.list.filter((item) => {
      return item.id != id;
    });
  },
  saveItem: (state, payload) => {
    if (payload.id) {
      state.list = state.list.map((item) => {
        if (item.id == payload.id) {
          item = payload;
        }
        return item;
      });
    } else {
      let maxID = 0;
      state.list.forEach((item) => {
        if (item.id > maxID) {
          maxID = item.id;
        }
      });
      payload.id = ++maxID;
      payload.datetime = new Date().getTime();
      state.list.push(payload);
    }
  },
  sortBy: (state, { field, direction }) => {
    if (!field) {
      field = "id";
    }
    state.list.sort(function (a, b) {
      if (direction == "DESC") {
        return b[field] - a[field];
      } else {
        return a[field] - b[field];
      }
    });
  },
};

export const actions = {
  load: ({ state, commit }) => {
    if (state.list.length) return;
    const data = require("~/data/data.json");
    commit("save", data);
  },
};
