<template>
  <div class="EventCard__container">
    <div class="EventCard__title">
      <div>{{ '№' + event.id }}</div>
      <div>{{ ' ' + event.title }}</div>
    </div>
    <div><span>What we will do: </span>{{ ' ' + event.description }}</div>
    <div><span>Where: </span>{{ ' ' + event.location }}</div>
    <div><span>When: </span>{{ ' ' + event.date }}</div>
    <button
      class="btn"
      @click="detailsRoute"
    > details
    </button>
  </div>
</template>

<script>
export default {
  props: {
    event: Object
  },
  methods: {
    detailsRoute() {
      this.$router.push({ name: 'eventDetails', params: { id: this.event.id } });
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
}

.btn {
  margin-left: 0;
}

span {
  color: steelblue;
  font-size: 20px;
}
</style>
