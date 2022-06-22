import axios from "axios";

const state = {
  events: [],
  eventDetails: null,
  totalEvents: 0,
  toggleLoading: false,
};

const mutations = {
  SET_EVENTS_LIST(state, events) {
    state.events = events;
  },
  TOGGLE_LOADING(state, loading) {
    state.toggleLoading = loading;
  },
  SET_TOTAL_EVENTS(state, totalEvents) {
    state.totalEvents = totalEvents;
  },
  SET_EVENT_DETAILS(state, eventDetails) {
    state.eventDetails = eventDetails;
  },
};

const actions = {
  async fetchEventsList({ commit }, pagination) {
    commit("TOGGLE_LOADING", true);
    await axios
      .get(
        `http://localhost:3000/events?_limit=${pagination.perPage}&_page=${pagination.currentPage}`
      )
      .then((response) => {
        commit("SET_EVENTS_LIST", response.data);
        commit("SET_TOTAL_EVENTS", response.headers["x-total-count"]);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        commit("TOGGLE_LOADING", false);
      });
  },
  async fetchEventDetails({ commit }, id) {
    await axios
      .get(`http://localhost:3000/events/${id}`)
      .then((response) => {
        commit("SET_EVENT_DETAILS", response.data);
      })
      .catch((err) => console.log(err));
  },
  async createEvent(store, event) {
    await axios.post("http://localhost:3000/events", event);
    store.dispatch("fetchEventsList", { perPage: 3, currentPage: 1 });
  },
  async deleteEvent(store, id) {
    await axios.delete(`http://localhost:3000/events/${id}`);
    store.dispatch("fetchEventsList", { perPage: 3, currentPage: 1 });
  },
  async updateEvent(store, event) {
    await axios.put(`http://localhost:3000/events/${event.id}`, event);
    store.dispatch("fetchEventDetails", event.id);
  },
};

const getters = {
  eventsList: (state) => state.events,
  eventDetails: (state) => state.eventDetails,
  toggleLoading: (state) => state.toggleLoading,
  totalEvents: (state) => +state.totalEvents,
};

export default {
  state,
  mutations,
  actions,
  getters,
  namesoaced: true,
};

//async fetchEventsList(store, pagination) {
//     store.commit("TOGGLE_LOADING", true);
//     const response = await axios.get(
//       `http://localhost:3000/events?_limit=${pagination.perPage}&_page=${pagination.currentPage}`
//     );
//     store.commit("SET_TOTAL_EVENTS", response.headers["x-total-count"]);
//     store.commit("SET_EVENTS_LIST", response.data);
//     store.commit("TOGGLE_LOADING", false);
//   },
//   async fetchEventDetails(store, id) {
//     const response = await axios.get(`http://localhost:3000/events/${id}`);
//     store.commit("SET_EVENT_DETAILS", response.data);
//   },
