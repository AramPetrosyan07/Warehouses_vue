<template>
  <button :class="className" @click="handleClick" :disabled="disabled">
    <Text :variant="variant" :weight="weight" :customClassName="textClassName">
      {{ text }}
    </Text>
  </button>
</template>

<script>
import Text from "./Text.vue"; // Adjust path as needed

export default {
  name: "Button",
  props: {
    text: String,
    onClick: Function,
    disabled: {
      type: Boolean,
      default: false,
    },
    className: String,
    textClassName: String,
    variant: {
      type: String,
      default: "body1",
    },
    weight: {
      type: String,
      default: "medium",
    },
  },
  methods: {
    handleClick(event) {
      if (this.onClick) {
        this.onClick(event);
      }
    },
  },
};
</script>
