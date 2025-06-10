<template>
  <div class="numberSelector" @click="handleDivClick">
    <select
      ref="selectRef"
      v-model="value"
      @change="handleChange"
      class="nativeSelect"
    >
      <option v-for="num in options" :key="num" :value="num">
        {{ num }}
      </option>
    </select>
    <div class="arrow">
      <ShortArrow :width="16" :height="16" :rotate="90" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import ShortArrow from "../assets/icon/warehouses/ExportArrow.vue"; // Make sure this path matches your file structure

const value = ref(10);
const selectRef = ref(null);

const options = Array.from({ length: 6 }, (_, i) => 10 + i);

const handleChange = (event) => {
  value.value = Number(event.target.value);
  event.preventDefault();

  setTimeout(() => {
    selectRef.value?.blur();
  }, 0);
};

const handleDivClick = () => {
  // You can use this later if needed
};
</script>

<style scoped>
@import "./NumberSelector.module.scss";
</style>
