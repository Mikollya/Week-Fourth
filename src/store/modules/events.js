import * as db from '../../mocks/store'

const state = {
    events: db.events,
}

const mutations = {
    CREATE_EVENT(state, event) {
        state.events.push(event);
    },
    DELETE_EVENT(state, id) {
        const eventId = state.events.findIndex((event) => event.id === id);
        state.events.splice(eventId, 1);
    },
}

const actions = {
    createEvent ({commit}, event) {
        event.id = state.events[state.events.length - 1].id + 1;
        commit('CREATE_EVENT', event);
    },
    deleteEvent({commit}, id) {
        commit('DELETE_EVENT', id);
    },
}

const getters = {
    eventsList: (state) => state.events,
	currentEvent: (state) => (id) => state.events.find((event) => +event.id === +id),
}

export default {
    state,
    mutations,
    actions,
    getters,
    namesoaced: true
}