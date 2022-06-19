<template>
  <div class="EventCard__container">
    <div class="EventCard__title">
      <div>{{ '№' + event.id }}</div>
      <div>{{ ' ' + event.title }}</div>
    </div>
    <div><span>What we will do: </span>{{ ' ' + event.description }}</div>
    <div><span>Where: </span>{{ ' ' + event.location }}</div>
    <div><span>When: </span>{{ ' ' + event.date }}</div>
    <div class="EventCard__buttons">
      <button
        class="btn"
        @click="detailsRoute"
      > Details
      </button>
      <button
        class="btn"
        @click="deleteSelectedEvent"
      > Delete
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: {
    event: Object
  },
  methods: {
    detailsRoute() {
      this.$router.push({ name: 'eventDetails', params: { id: this.event.id } });
    },
    ...mapActions(['deleteEvent']),
    deleteSelectedEvent() {
			this.deleteEvent(this.event.id);
		},
  },
};

</script>

<style scoped>
.EventCard__container {
  width: 100%;
  max-width: 500px;
  margin: 30px auto;
  overflow: auto;
  min-height: 300px;
  border: 1px solid steelblue;
  padding: 30px;
  border-radius: 5px;
}

.EventCard__title {
  display: flex;
  font-size: 28px;
  justify-content: space-evenly;
  margin-bottom: 10px;
  width: 90%;
}
.EventCard__buttons {
  display: flex;
  justify-content: space-evenly;
}
.btn {
  
  margin: 25px 50px;
}

span {
  color: steelblue;
  font-size: 20px;
}
</style>
