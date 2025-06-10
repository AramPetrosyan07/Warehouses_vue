<template>
  <button :class="styles.export">
    <ExportArrow />
    <Text variant="body2" :customClassName="styles.dark_blue_50">
      Export PDF
    </Text>
  </button>
</template>

<script>
import ExportArrow from "../assets/icon/warehouses/ExportArrow.vue";
import Text from "./Text.vue";
import styles from "./Export.module.scss";

export default {
  name: "Export",
  components: {
    ExportArrow,
    Text,
  },
  data() {
    return {
      styles,
    };
  },
};
</script>
