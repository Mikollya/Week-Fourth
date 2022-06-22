<template>
  <div class="main">
    <div class="nav">
      <router-link :to="{ name: 'home' }">
        <div class="btn">Home</div>
      </router-link>
      <router-link :to="{ name: 'eventsList' }">
        <div class="btn">Events List</div>
      </router-link>
      <router-link :to="{ name: 'createEvent' }">
        <div class="btn">Create new Card</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TheHeader'
};
</script>

<style scoped>
.nav {
  display: flex;
  justify-content: center;
}
</style>
