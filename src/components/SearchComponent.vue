<template>
  <div class="search-container">
    <div class="search-wrapper">
      <!-- Search By Dropdown -->
      <div class="dropdown-container">
        <button
          class="dropdown-button"
          @click="showSearchByDropdown = !showSearchByDropdown"
        >
          <Text variant="body2" customClassName="button-text">
            {{ searchBy }}
          </Text>
          <svg
            class="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>
        <div v-if="showSearchByDropdown" class="dropdown-menu">
          <div
            v-for="option in searchByOptions"
            :key="option"
            class="dropdown-item"
            @click="
              () => {
                searchBy = option;
                showSearchByDropdown = false;
              }
            "
          >
            {{ option }}
          </div>
        </div>
      </div>

      <!-- LIKE Dropdown -->
      <div class="dropdown-container">
        <button
          class="dropdown-button like-button"
          @click="showLikeDropdown = !showLikeDropdown"
        >
          {{ likeFilter }}
          <svg
            class="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>
        <div v-if="showLikeDropdown" class="dropdown-menu">
          <div
            v-for="option in likeOptions"
            :key="option"
            class="dropdown-item"
            @click="
              () => {
                likeFilter = option;
                showLikeDropdown = false;
              }
            "
          >
            {{ option }}
          </div>
        </div>
      </div>

      <!-- Search Input Dropdown -->
      <div class="dropdown-container search-input-container">
        <button
          class="dropdown-button search-input"
          @click="showSearchDropdown = !showSearchDropdown"
        >
          {{ searchValue }}
          <svg
            class="dropdown-arrow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
          >
            <polyline points="6,9 12,15 18,9"></polyline>
          </svg>
        </button>
        <div v-if="showSearchDropdown" class="dropdown-menu">
          <div
            v-for="option in searchOptions"
            :key="option"
            class="dropdown-item"
            @click="
              () => {
                searchValue = option;
                showSearchDropdown = false;
              }
            "
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>

    <!-- Add Button -->
    <button class="add-button">
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
      >
        <line x1="12" y1="5" x2="12" y2="19"></line>
        <line x1="5" y1="12" x2="19" y2="12"></line>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Text from "./Text.vue";
import "./SearchComponent.scss";

const searchBy = ref("Search by");
const likeFilter = ref("LIKE");
const searchValue = ref("Search");

const showSearchByDropdown = ref(false);
const showLikeDropdown = ref(false);
const showSearchDropdown = ref(false);

const searchByOptions = ["Search by", "Name", "Category", "Date", "Status"];
const likeOptions = ["LIKE", "EQUALS", "CONTAINS", "STARTS WITH"];
const searchOptions = [
  "Search",
  "Recent searches",
  "Popular items",
  "Saved filters",
];
</script>
