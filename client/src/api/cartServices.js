import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../libs/apiRequest";
import toast from "react-hot-toast";
import { useCartStore } from "../zustand/useCartStore";

// get user cart
export const useCarts = () => {
  const { setUserCart } = useCartStore();

  return useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const response = await apiRequest.get("/carts/");
      setUserCart(response.data); // setting user cart info to zustand cart state
      return response.data;
    },
  });
};

// add to cart
export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ product, quantity }) =>
      await apiRequest.post("/carts/add/", {
        product,
        quantity,
      }),
    onSuccess: (data) => {
      // invalidate fetch cart key

      queryClient.invalidateQueries(["carts"]);
      toast.success("item added to cart sucessfully.");
      console.log(data);
    },
    onError: (error) => {
      console.log(error);
    },
  });
};


// update to cart
export const useUpdateToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({cart, quantity }) =>
      await apiRequest.patch(`/carts/update/${cart}/`, {
        quantity,
      }),
    onSuccess: () => {
      // invalidate fetch cart key

      queryClient.invalidateQueries(["carts"]);
      toast.success("Cart item updated sucessfully.");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};

// delete from cart
export const useRemoveFromCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (id) => {
      return await apiRequest.delete(`/carts/delete/${id}/`);
    },
    onSuccess: () => {
      // invalidate fetch cart key
      queryClient.invalidateQueries(["carts"]);
      toast.success("Item removed from cart sucessfully.");
    },
    onError: (error) => {
      console.log(error);
    },
  });
};
