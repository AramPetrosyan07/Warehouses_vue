<template>
  <svg
    width="18"
    height="16"
    viewBox="0 0 18 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 8H2M16 3H2M16 13H2"
      :stroke="color"
      stroke-width="2.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
import { computed } from "vue";

// defineProps({
//   selected: {
//     type: Boolean,
//     default: true,
//   },
// });

const props = defineProps(["selected"]);

const color = computed(() => (props.selected ? "#687384" : "#B9BEC6"));
</script>
