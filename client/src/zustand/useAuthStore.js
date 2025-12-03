import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuthStore = create(
  persist(
    (set) => ({
      access_token: null,
      refresh_token: null,
      isAuthenticated: false,
      user: null,

      // function to store user state after sign-in
      setTokens: (tokenData) => {
        set({
          access_token: tokenData.access,
          refresh_token: tokenData.refresh,
          isAuthenticated: true,
        });
      },
      // function to set user state
      setUser: (userData) => {
        set({
          user: userData,
        });
      },
      // function to logout
      clearUser: () => {
        set({
          access_token: null,
          refresh_token: null,
          isAuthenticated: false,
          user: null,
        });
      },
    }),
    {
      name: "auth", // key in local storage
    }
  )
);
