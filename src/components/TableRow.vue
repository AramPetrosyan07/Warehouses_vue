<template>
  <div>
    <div class="data-table-container">
      <div class="table-wrapper">
        <table class="data-table">
          <thead>
            <tr>
              <th @click="handleSort('id')" class="sortable">
                <span class="sort_lable">H/H</span>
                <span
                  :class="['sort-arrows', sortColumn === 'id' ? 'active' : '']"
                >
                  <span
                    :class="[
                      'arrow',
                      'up',
                      sortColumn === 'id' && sortDirection === 'asc'
                        ? 'active'
                        : '',
                    ]"
                    >▲</span
                  >
                  <span
                    :class="[
                      'arrow',
                      'down',
                      sortColumn === 'id' && sortDirection === 'desc'
                        ? 'active'
                        : '',
                    ]"
                    >▼</span
                  >
                </span>
              </th>
              <th @click="handleSort('name')" class="sortable">
                <span class="sort_lable">Name</span>
                <span
                  :class="[
                    'sort-arrows',
                    sortColumn === 'name' ? 'active' : '',
                  ]"
                >
                  <span
                    :class="[
                      'arrow',
                      'up',
                      sortColumn === 'name' && sortDirection === 'asc'
                        ? 'active'
                        : '',
                    ]"
                    >▲</span
                  >
                  <span
                    :class="[
                      'arrow',
                      'down',
                      sortColumn === 'name' && sortDirection === 'desc'
                        ? 'active'
                        : '',
                    ]"
                    >▼</span
                  >
                </span>
              </th>
              <th @click="handleSort('organization')" class="sortable">
                <span class="sort_lable">Organization</span>
                <span
                  :class="[
                    'sort-arrows',
                    sortColumn === 'organization' ? 'active' : '',
                  ]"
                >
                  <span
                    :class="[
                      'arrow',
                      'up',
                      sortColumn === 'organization' && sortDirection === 'asc'
                        ? 'active'
                        : '',
                    ]"
                    >▲</span
                  >
                  <span
                    :class="[
                      'arrow',
                      'down',
                      sortColumn === 'organization' && sortDirection === 'desc'
                        ? 'active'
                        : '',
                    ]"
                    >▼</span
                  >
                </span>
              </th>
              <th @click="handleSort('address')" class="sortable">
                <span class="sort_lable">Address</span>
                <span
                  :class="[
                    'sort-arrows',
                    sortColumn === 'address' ? 'active' : '',
                  ]"
                >
                  <span
                    :class="[
                      'arrow',
                      'up',
                      sortColumn === 'address' && sortDirection === 'asc'
                        ? 'active'
                        : '',
                    ]"
                    >▲</span
                  >
                  <span
                    :class="[
                      'arrow',
                      'down',
                      sortColumn === 'address' && sortDirection === 'desc'
                        ? 'active'
                        : '',
                    ]"
                    >▼</span
                  >
                </span>
              </th>
              <th @click="handleSort('worker')" class="sortable">
                <span class="sort_lable">Worker</span>
                <span
                  :class="[
                    'sort-arrows',
                    sortColumn === 'worker' ? 'active' : '',
                  ]"
                >
                  <span
                    :class="[
                      'arrow',
                      'up',
                      sortColumn === 'worker' && sortDirection === 'asc'
                        ? 'active'
                        : '',
                    ]"
                    >▲</span
                  >
                  <span
                    :class="[
                      'arrow',
                      'down',
                      sortColumn === 'worker' && sortDirection === 'desc'
                        ? 'active'
                        : '',
                    ]"
                    >▼</span
                  >
                </span>
              </th>
              <th @click="handleSort('products')" class="sortable">
                <span class="sort_lable">Products</span>
                <span
                  :class="[
                    'sort-arrows',
                    sortColumn === 'products' ? 'active' : '',
                  ]"
                >
                  <span
                    :class="[
                      'arrow',
                      'up',
                      sortColumn === 'products' && sortDirection === 'asc'
                        ? 'active'
                        : '',
                    ]"
                    >▲</span
                  >
                  <span
                    :class="[
                      'arrow',
                      'down',
                      sortColumn === 'products' && sortDirection === 'desc'
                        ? 'active'
                        : '',
                    ]"
                    >▼</span
                  >
                </span>
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="row in paginatedData" :key="row.id" class="data-row">
              <td>{{ row.id }}</td>
              <td>{{ row.name }}</td>
              <td>{{ row.organization }}</td>
              <td>{{ row.address }}</td>
              <td>{{ row.worker }}</td>
              <td>
                <a href="#" class="product-link">{{ row.products }}</a>
              </td>
              <td class="action-cell">
                <button class="action-btn view-btn">
                  <Eye />
                </button>
                <button class="action-btn menu-btn">⋮</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <div class="pagination-container">
      <div class="pagination-info">
        Showing {{ startEntry }} to {{ endEntry }} of
        {{ sortedData.length }} entries
      </div>
      <div class="pagination">
        <button
          class="pagination-btn"
          @click="prevPage"
          :disabled="currentPage === 1"
        >
          ‹
        </button>

        <button
          v-for="page in totalPages"
          :key="page"
          class="pagination-btn"
          :class="{ active: currentPage === page }"
          @click="setPage(page)"
        >
          {{ page }}
        </button>

        <button
          class="pagination-btn"
          @click="nextPage"
          :disabled="currentPage === totalPages"
        >
          ›
        </button>

        <div class="page-input-container">
          <span>Go</span>
          <input
            type="text"
            class="page-input"
            placeholder="Type page"
            @keypress.enter="goToPage"
            v-model="pageInput"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useUsersStore } from "@/api/stores/users.js"; // adjust path as needed
import Eye from "../assets/icon/warehouses/Eye.vue";

const store = useUsersStore();

const sortColumn = ref("");
const sortDirection = ref("asc");
const currentPage = ref(1);
const entriesPerPage = 10;
const pageInput = ref("");

// Build tableData from store.users (assuming users array with expected structure)
const tableData = computed(() =>
  store.users.map((user) => ({
    id: user.id,
    name: user.name,
    organization: user.company.name,
    address: user.address.street,
    worker: user.username,
    products: user.email,
  }))
);

function handleSort(column) {
  if (sortColumn.value === column) {
    sortDirection.value = sortDirection.value === "asc" ? "desc" : "asc";
  } else {
    sortColumn.value = column;
    sortDirection.value = "asc";
  }
}

const sortedData = computed(() => {
  if (!sortColumn.value) return tableData.value;

  return [...tableData.value].sort((a, b) => {
    const aValue = a[sortColumn.value];
    const bValue = b[sortColumn.value];

    if (sortColumn.value === "id" || sortColumn.value === "products") {
      // parseInt safely; fallback to 0 if NaN
      const aNum = typeof aValue === "string" ? parseInt(aValue) || 0 : aValue;
      const bNum = typeof bValue === "string" ? parseInt(bValue) || 0 : bValue;
      return sortDirection.value === "asc" ? aNum - bNum : bNum - aNum;
    }

    const aStr = String(aValue).toLowerCase();
    const bStr = String(bValue).toLowerCase();

    return sortDirection.value === "asc"
      ? aStr.localeCompare(bStr)
      : bStr.localeCompare(aStr);
  });
});

const totalPages = computed(() =>
  Math.ceil(sortedData.value.length / entriesPerPage)
);

const startEntry = computed(() => (currentPage.value - 1) * entriesPerPage + 1);
const endEntry = computed(() =>
  Math.min(currentPage.value * entriesPerPage, sortedData.value.length)
);

const paginatedData = computed(() =>
  sortedData.value.slice(
    (currentPage.value - 1) * entriesPerPage,
    currentPage.value * entriesPerPage
  )
);

function prevPage() {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
}

function nextPage() {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
}

function setPage(page) {
  currentPage.value = page;
}

function goToPage() {
  const page = parseInt(pageInput.value);
  if (!isNaN(page) && page >= 1 && page <= totalPages.value) {
    currentPage.value = page;
    pageInput.value = "";
  }
}
</script>

<style scoped>
@import "./TableRow.scss";
</style>
