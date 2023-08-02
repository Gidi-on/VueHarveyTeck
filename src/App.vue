<template>
  <div class="font-montserrat overflow-x-hidden">
    <router-view />
  </div>
</template>

<script>
import Dashboard from "./views/Dash.vue";
export default {
  name: "App",
  components: {
    Dashboard,
  },
};
</script>

<style scoped>
#app {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
}
</style>
