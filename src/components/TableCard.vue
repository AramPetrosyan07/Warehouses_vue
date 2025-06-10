<script setup>
import { computed } from "vue";
import { useUsersStore } from "@/api/stores/users.js"; // Adjust path if needed
import CardItem from "./CardItem.vue";

const store = useUsersStore();

const users = computed(() => store.users || []);

const tableData = computed(() =>
  users.value.map((user) => ({
    id: user.id,
    name: user.name,
    organization: user.company?.name || "",
    address: user.address?.street || "",
    worker: user.username,
    products: user.email,
  }))
);
</script>

<template>
  <div class="data-table-container-card">
    <CardItem v-for="item in tableData" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>
@import "./TableCard.scss";
/* If you want to keep SCSS, make sure your build supports it */
</style>
