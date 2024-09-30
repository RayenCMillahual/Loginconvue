import { defineStore } from 'pinia';

interface User {
  username: string;
  email: string;
}

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {} as User | null,
  }),
  actions: {
    setUser(username: string, email: string) {
      this.user = { username, email };
    },
    clearUser() {
      this.user = null;
    },
  },
});
