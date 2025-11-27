import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../libs/apiRequest";

// get all products
export const useProducts = ({page_size=10, category="",sort}) =>
  useQuery({
    queryKey: ["products",page_size,category,sort],
    queryFn: async () => {
      const response = await apiRequest.get("/products/", {
        params: {
          page_size: page_size,
          category__name : category,
          ordering:sort
        },
      });
      console.log(response.data);
      return response.data;
    },
  });
