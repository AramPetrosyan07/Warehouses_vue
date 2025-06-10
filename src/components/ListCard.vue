<template>
  <div :class="styles.container">
    <button
      @click="handleRowClick"
      :class="[
        styles.item,
        styles.left,
        props.selected === 'row' ? styles.selected : '',
      ]"
    >
      <Row :selected="props.selected === 'row'" />
    </button>
    <button
      @click="handleCardClick"
      :class="[
        styles.item,
        styles.right,
        props.selected === 'card' ? styles.selected : '',
      ]"
    >
      <Card :selected="props.selected === 'card'" />
    </button>
  </div>
</template>

<script setup>
import Row from "../assets/icon/warehouses/Row.vue";
import Card from "../assets/icon/warehouses/Card.vue";
import styles from "./Listcard.module.scss";

const props = defineProps({
  selected: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:selected"]);

const handleRowClick = () => {
  console.log("ListCard - Row clicked");
  emit("update:selected", "row");
};

const handleCardClick = () => {
  console.log("ListCard - Card clicked");
  emit("update:selected", "card");
};
</script>

<style scoped>
@import "./ListCard.module.scss";
</style>
