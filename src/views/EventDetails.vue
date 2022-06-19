<template>
  <div
    v-if="targetEvent" class="event__details">
    <div class="event__id"><h1>Event</h1>{{ '#' + targetEvent.id }}</div>
    <div class="event__title">{{ ' ' + targetEvent.title }}</div>
    <div><span>To do:</span>{{ ' ' + targetEvent.description }}</div>
    <div><span>Where: </span>{{ ' ' + targetEvent.location }}</div>
    <div><span>When: </span>{{ ' ' + targetEvent.date }}</div>
    <div><span>Time:</span>{{ ' ' + targetEvent.time }}</div>
    <div><span>Organizer:</span>{{ ' ' + targetEvent.organizer }}</div>
    <div><span>Category:</span>{{ ' ' + targetEvent.category }}</div>
    <div><span>Attendees:</span>{{ ' ' + attendees() }}</div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'EventDetails',
  props: {
    id: String,
  },
  computed: {
    ...mapGetters(['currentEvent']),
		targetEvent() {
			return this.currentEvent(this.id);
		},
  },
  methods: {
    attendees() {
      return this.currentEvent && this.targetEvent.attendees.map((member) => member.name).join(', ');
    }
  }
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
.btn {
  margin-left: 0;
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
