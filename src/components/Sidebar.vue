<script setup>
import OrdersActive from "@/assets/icon/sideBar/active/OrdersActive.vue";
import OrganizationActive from "@/assets/icon/sideBar/active/OrganizationActive.vue";
import PlacesActive from "@/assets/icon/sideBar/active/PlacesActive.vue";
import ProductsActive from "@/assets/icon/sideBar/active/ProductsActive.vue";
import RolesActive from "@/assets/icon/sideBar/active/RolesActive.vue";
import ScanHistoryActive from "@/assets/icon/sideBar/active/ScanHistoryActive.vue";
import UsersActive from "@/assets/icon/sideBar/active/UsersActive.vue";
import WorkersActive from "@/assets/icon/sideBar/active/WorkersActive.vue";
import CloseSideBar from "@/assets/icon/sideBar/CloseSideBar.vue";
import Orders from "@/assets/icon/sideBar/ordinary/Orders.vue";
import Organization from "@/assets/icon/sideBar/ordinary/Organization.vue";
import Places from "@/assets/icon/sideBar/ordinary/Places.vue";
import Products from "@/assets/icon/sideBar/ordinary/Products.vue";
import Roles from "@/assets/icon/sideBar/ordinary/Roles.vue";
import ScanHistory from "@/assets/icon/sideBar/ordinary/ScanHistory.vue";
import Users from "@/assets/icon/sideBar/ordinary/Users.vue";
import Workers from "@/assets/icon/sideBar/ordinary/Workers.vue";
import Warehouses from "@/assets/icon/sideBar/Warehouses.vue";
import { ref, watch, reactive } from "vue";

const SideBar = reactive([
  {
    id: 1,
    name: "Organization",
    icon: Organization,
    activeIcon: OrganizationActive,
  },
  { id: 2, name: "Roles", icon: Roles, activeIcon: RolesActive },
  { id: 3, name: "Users", icon: Users, activeIcon: UsersActive },
  { id: 4, name: "Workers", icon: Workers, activeIcon: WorkersActive },
  { id: 5, name: "Places", icon: Places, activeIcon: PlacesActive },
  { id: 6, name: "Products", icon: Products, activeIcon: ProductsActive },
  { id: 7, name: "Orders", icon: Orders, activeIcon: OrdersActive },
  {
    id: 8,
    name: "ScanHistory",
    icon: ScanHistory,
    activeIcon: ScanHistoryActive,
  },
]);

const sideBarStatus = ref(true);
const selectedSideBar = ref(5);

function toggleSidebar() {
  sideBarStatus.value = !sideBarStatus.value;
}
</script>

<template>
  <div :class="[$style.container, sideBarStatus ? '' : $style.small]">
    <Warehouses :side-bar-status="sideBarStatus" />
    <div :class="$style.sideBarButtonContainer">
      <CloseSideBar
        :class="[$style.closeSideBar, !sideBarStatus ? $style.rotated : '']"
        @click="toggleSidebar"
      />
    </div>
    <div :class="$style.sideBarContainer">
      <div
        v-for="item in SideBar"
        :key="item.id"
        @click="selectedSideBar = item.id"
        :class="[
          $style.sideBarItem,
          selectedSideBar === item.id ? $style.selected : '',
        ]"
        style="display: flex; align-items: center; cursor: pointer"
      >
        <component
          :is="selectedSideBar === item.id ? item.activeIcon : item.icon"
        />

        <span v-if="sideBarStatus" :class="$style.sideBarName">{{
          item.name
        }}</span>
      </div>
    </div>
  </div>
</template>

<style module lang="scss">
.container {
  width: 312px;
  height: 100vh;
  padding: 30px;
  background-color: #232229;
  transition: all 0.3s ease;
  box-sizing: border-box;

  &.small {
    width: 122px;
  }
}

.sideBarButtonContainer {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  position: relative;
  right: -20px;
  margin-top: 50px;
}

.closeSideBar {
  cursor: pointer;
}

.sideBarContainer {
  gap: 25px;
}

.rotated {
  transform: rotate(180deg);
}

.sideBarItem {
  transition: background-color 0.3s;
  padding: 10px 16px;
  border-radius: 8px;
  user-select: none;
  color: white;
  gap: 16px;
  margin-top: 25px;
}

.selected {
  background-color: white;
  color: #eb672f;
}

.sideBarName {
  transition: all 0.3s ease 0.2s;
}
</style>
