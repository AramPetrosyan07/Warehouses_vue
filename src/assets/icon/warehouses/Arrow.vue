<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :style="{ transform: `rotate(${rotate}deg)` }"
  >
    <path
      d="M9 6.5L15 12.5L9 18.5"
      stroke="#687384"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup>
defineProps({
  rotate: {
    type: Number,
    default: 0,
  },
  width: {
    type: [Number, String],
    default: 24,
  },
  height: {
    type: [Number, String],
    default: 25,
  },
});
</script>
