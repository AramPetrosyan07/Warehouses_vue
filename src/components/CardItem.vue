<script setup>
import { toRefs } from "vue";
import Eye from "../assets/icon/warehouses/Eye.vue";

const props = defineProps({
  item: {
    type: Object,
    required: true,
    // expected shape:
    // { id, name, organization, address, worker, products }
  },
});

const { item } = toRefs(props);

const cardData = [
  { label: "H/H", value: item.value.id.toString() },
  { label: "Name", value: item.value.name },
  { label: "Organization", value: item.value.organization },
  { label: "Address", value: item.value.address },
  { label: "Worker", value: item.value.worker },
  { label: "Products", value: item.value.products, isLink: true },
];
</script>

<template>
  <div class="info-card">
    <div class="card-header">
      <button class="icon-button">
        <Eye />
      </button>
      <span class="icon-button">
        <button class="action-btn menu-btn">⋮</button>
      </span>
    </div>

    <div class="card-content">
      <div v-for="(data, index) in cardData" :key="index" class="info-row">
        <span class="label">{{ data.label }}</span>
        <span :class="['value', data.isLink ? 'link' : '']">{{
          data.value
        }}</span>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import "./CardItem.scss";
/* Your styles from CardItem.scss will be applied */
</style>
