<template>
  <div v-if="eventDetails" class="event__details">
    <div class="event__id"><h1>Event</h1>{{ '#' + eventDetails.id }}</div>
    <div class="event__title">{{ ' ' + eventDetails.title }}</div>
    <div><span>To do:</span>{{ ' ' + eventDetails.description }}</div>
    <div><span>Where: </span>{{ ' ' + eventDetails.location }}</div>
    <div><span>When: </span>{{ ' ' + eventDetails.date }}</div>
    <div><span>Time:</span>{{ ' ' + eventDetails.time }}</div>
    <div><span>Organizer:</span>{{ ' ' + eventDetails.organizer }}</div>
    <div><span>Category:</span>{{ ' ' + eventDetails.category }}</div>
    <div><span>Attendees:</span>{{ ' ' + attendees() }}</div>
    <button
      class="btn"
      @click="editRoute"> 
      Update
      </button>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'EventDetails',
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(['eventDetails'])
  },
  methods: {
    ...mapActions(['fetchEventDetails']),
    attendees() {
      return this.eventDetails && this.eventDetails.attendees.map((member) => member.name).join(', ');
    },
    editRoute() {
      this.$router.push({ name: 'editDetails', params: { id: this.id } });
    },
  },
  mounted() {
		this.fetchEventDetails(this.id);
	},
};
</script>

<style scoped>
.event__details {
  align-content: center;
  font-size: 18px;
}
span {
  color: steelblue;
  font-size: 20px;
}

.event__title {
  text-align: center;
  font-size: 26px;
}
.event__id {
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
}
</style>
