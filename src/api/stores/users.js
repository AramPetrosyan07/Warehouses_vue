import { defineStore } from "pinia";
import { fetchUsers } from "../services/users";

export const useUsersStore = defineStore("users", {
  state: () => ({
    users: [],
    loading: false,
    error: "",
  }),
  actions: {
    async loadUsers() {
      this.loading = true;
      this.error = "";
      try {
        this.users = await fetchUsers();
      } catch (err) {
        this.error = err.message || "Failed to fetch users";
      } finally {
        this.loading = false;
      }
    },
  },
});
