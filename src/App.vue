<script setup>
import HomeView from './views/HomeView.vue'
import SideBar from './components/Sidebar.vue'
// import SideBar from './views/HomeView.vue'
import { RouterView } from 'vue-router';
</script>

<template>
  <div :class="$style.container">
    <SideBar />
    <RouterView />
  </div>
</template>


<style module lang="scss">
.container {
  display: flex;
}
</style>