import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../libs/apiRequest";

// get user cart
export const useCarts = () =>
  useQuery({
    queryKey: ["carts"],
    queryFn: async () => {
      const response = await apiRequest.get("/carts/");
      return response.data;
    },
  });
