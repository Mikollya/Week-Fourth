<template>
  <div
    class="container__details"
    v-if="$route.name === 'eventDetails'">
    <router-view :events="events" />
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
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import EventCard from '../components/EventCard';

export default {
  name: 'EventsList',
  components: {
    EventCard,
  },
  methods: {
    getBack() {
      this.$router.back();
    }
  },
  computed: {
		...mapGetters( ['eventsList'])
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
</style>
