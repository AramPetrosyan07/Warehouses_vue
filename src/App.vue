<script setup>
import HomeView from "./views/HomeView.vue";
import SideBar from "./components/Sidebar.vue";
// import SideBar from './views/HomeView.vue'
import { RouterView } from "vue-router";
import { onMounted, watch } from "vue";
import { useUsersStore } from "./api/stores/users.js";

const usersStore = useUsersStore();

onMounted(() => {
  usersStore.loadUsers();
});

watch(
  () => usersStore.users,
  (newUsers) => {
    console.log("✅ Users loaded:", newUsers);
  }
);

// console.log(JSON.stringify(usersStore.users, null, 2));
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
