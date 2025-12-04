import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "../libs/apiRequest";
import toast from "react-hot-toast";
import { useCartStore } from "../zustand/useCartStore";

// get user cart
export const useCarts = () => {
  const {setUserCart} = useCartStore()

  return useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const response = await apiRequest.get("/carts/");
      setUserCart(response.data) // setting user cart info to zustand cart state
      return response.data;
    },
  });
}
  

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
