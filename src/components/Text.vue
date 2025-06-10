<template>
  <component :is="tag" :class="classes" :style="inlineStyle">
    <slot />
  </component>
</template>

<script setup>
import { computed, toRefs } from "vue";
import "./Text.scss";

// Hardcoded weights and class mappings (originally from text.types)
const variantClasses = {
  body1: "text-body1",
  body2: "text-body2",
  caption: "text-caption",
  // Add more as needed...
};

const weightClasses = {
  regular: "font-regular",
  medium: "font-medium",
  bold: "font-bold",
};

const allowedWeights = {
  body1: ["regular", "medium"],
  body2: ["regular", "medium"],
  caption: ["regular", "medium"],
  // Add more as needed...
};

const defaultTagMap = {
  body1: "p",
  body2: "p",
  caption: "span",
  // Add more as needed...
};

// Props
const props = defineProps({
  variant: { type: String, required: true },
  weight: { type: String, default: "regular" },
  color: String,
  as: String,
  customClassName: { type: String, default: "" },
  style: { type: Object, default: () => ({}) },
});

const { variant, weight, color, as, customClassName, style } = toRefs(props);

const tag = computed(() => as.value || defaultTagMap[variant.value]);

const finalWeight = computed(() => {
  const allowed = allowedWeights[variant.value] || ["regular"];
  return allowed.includes(weight.value) ? weight.value : allowed[0];
});

const classes = computed(() => {
  return [
    variantClasses[variant.value],
    weightClasses[finalWeight.value],
    customClassName.value,
  ]
    .filter(Boolean)
    .join(" ");
});

const inlineStyle = computed(() => ({
  margin: 0,
  padding: 0,
  ...(color.value ? { color: color.value } : {}),
  ...style.value,
}));
</script>
