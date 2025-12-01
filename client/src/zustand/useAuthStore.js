import { create } from "zustand"
import {persist} from "zustand/middleware"

export const useAuthStore = create(
    persist(
        (set) => ({
            access_token: null,
            refresh_token: null,
            user: false,

            // function to store user state after sign-in
            setUser: (userData) => {
                set({
                    access_token: userData.access,
                    refresh_token: userData.refresh,
                    user: true
                })
            }
        }),
        {
            name: 'auth'  // key in local storage
        }
    )
)
