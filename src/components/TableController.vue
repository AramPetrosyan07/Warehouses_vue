<template>
  <div>
    <SearchComponent />
    <div :class="$style.container">
      <div :class="$style.left_controller">
        <div :class="$style.table_controller">
          <Text
            variant="caption"
            weight="regular"
            :customClassName="$style.dark_blue_90"
          >
            Show
          </Text>
          <NumberSelector />
        </div>
        <div :class="$style.export">
          <Export />
        </div>
      </div>

      <div :class="$style.right_controller">
        <div :class="$style.table_controller">
          <!-- Pass selected and emit update event -->
          <Listcard :selected="selected" @update:selected="handleViewChange" />
        </div>
        <div :class="$style.table_controller">
          <Button
            text="Create Warehouse"
            @click="handleCreateWarehouse"
            :class="$style.create_warehouse"
            :textClassName="$style.create_warehouse_text"
            variant="body2"
            weight="medium"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Button from "./Button.vue";
import Export from "./Export.vue";
import Listcard from "./ListCard.vue";
import NumberSelector from "./NumberSelector.vue";
import Text from "./Text.vue";
import SearchComponent from "./SearchComponent.vue";

const props = defineProps({
  selected: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["update:selected"]);

const handleViewChange = (view) => {
  console.log("TableController - emitting view change:", view);
  emit("update:selected", view);
};

const handleCreateWarehouse = () => {
  // handle create warehouse click here
};
</script>

<style module src="./TableController.module.scss"></style>
