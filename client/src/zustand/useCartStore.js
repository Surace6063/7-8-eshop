import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      carts: [],
      totalPrice: 0,
      totalQuantity:0,

      // function to store user cart state 
      setUserCart: (cartData) => {
        set({
          carts: cartData.items,
          totalPrice: cartData.total,
          totalQuantity: cartData.totalQuantity
        });
      },
    }),
    {
      name: "user-cart", // key in local storage
    }
  )
);
