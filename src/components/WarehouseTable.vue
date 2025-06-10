<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";
import TableController from "./TableController.vue";
import Loading from "./Loading.vue";
import { defineAsyncComponent } from "vue";

const TableCard = defineAsyncComponent(() => import("./TableCard.vue"));
const TableRow = defineAsyncComponent(() => import("./TableRow.vue"));

const getInitialView = () => {
  const stored = localStorage.getItem("tableView");
  return stored === "row" || stored === "card" ? stored : "row";
};

const selected = ref(getInitialView());

const handleViewChange = (view) => {
  console.log("Main component - changing view to:", view);
  selected.value = view;
  localStorage.setItem("tableView", view);
};

const syncView = (event) => {
  if (
    event.key === "tableView" &&
    (event.newValue === "row" || event.newValue === "card")
  ) {
    selected.value = event.newValue;
  }
};

onMounted(() => {
  window.addEventListener("storage", syncView);
});

onBeforeUnmount(() => {
  window.removeEventListener("storage", syncView);
});
</script>

<template>
  <div class="container">
    <!-- Pass selected as value and handleViewChange as function -->
    <TableController :selected="selected" @update:selected="handleViewChange" />

    <Suspense>
      <template #default>
        <component :is="selected === 'row' ? TableRow : TableCard" />
      </template>
      <template #fallback>
        <Loading />
      </template>
    </Suspense>
  </div>
</template>
