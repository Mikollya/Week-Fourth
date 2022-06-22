<template>
  <div>
  	<div v-if="toggleLoading">
      <TheSpinner/>
    </div>
    <div v-else>
      <div v-if="$route.name === 'eventDetails'"
        class="container__details">
        <router-view />
        <button
          class="btn"
          @click="getBack">
          Get back
        </button>
      </div>
      <div v-else>
        <div>
          <h1>All events that u can choose!</h1>
          <div class="container__card">
            <EventCard
              v-for=" event in eventsList"
              :key="event.id"
              :event="event"
            />
          </div>
          <div class="EventsList__buttons">
              <button
                :disabled="isPrevPageDisabled"
                @click="prevPage"
                :class="isPrevPageDisabled ? 'buttons_none' : 'btn'"
                >
                Prev
              </button>
              <button
                :disabled="isNextPageDisabled"
                @click="nextPage"
                :class="isNextPageDisabled ? 'buttons_none' : 'btn'"
                >
                Next
              </button>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import EventCard from '../components/EventCard';
import TheSpinner from '../components/TheSpinner';

export default {
  name: 'EventsList',
  components: {
    EventCard,
    TheSpinner,
  },
  methods: {
    ...mapActions(['fetchEventsList']),
    getBack() {
      this.$router.replace({ name: 'eventsList' });
    },
    nextPage() {
			this.currentPage += 1;
			this.fetchEventsList({ perPage: this.perPage, currentPage: this.currentPage});
		},
		prevPage() {
			this.currentPage -= 1;
			this.fetchEventsList({perPage: this.perPage, currentPage: this.currentPage});
		},
  },
  computed: {
		...mapGetters( ['eventsList', 'toggleLoading', 'totalEvents']),
    isPrevPageDisabled() {
      if (this.currentPage === 1) {
        return true
      }
      else {
        return false
      }
		},
    isNextPageDisabled() {
      if (this.currentPage === Math.ceil(this.totalEvents / this.perPage)) {
        return true
      }
      else {
        return false
      }
		}
	},
	data() {
		return {
			perPage: 3,
			currentPage: 1,
		};
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchEventsList({ perPage: this.perPage, currentPage: this.currentPage })
      },
      { immediate: true }
    )
  },
};
</script>

<style scoped>

.container__details {
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.container__card {
  display: flex;
  flex-wrap: wrap;
}

h1 {
  text-align: center;
  margin-top: 50px;
}
.EventsList__buttons {
  display: flex;
  justify-content: space-evenly;
  margin: 20px 0;
}
.buttons_none {
  display: none;
}
</style>
