import { useQuery } from "@tanstack/react-query";
import { apiRequest } from "../libs/apiRequest";

// get all products
export const useProducts = ({page_size=10, category="",sort,page=1,serachValue="",minPrice="",maxPrice=""}) =>
  useQuery({
    queryKey: ["products",page_size,category,sort,page,serachValue,maxPrice,minPrice],
    queryFn: async () => {
      const response = await apiRequest.get("/products/", {
        params: {
          page_size,
          category__name : category,
          ordering:sort,
          page,
          search: serachValue,
          max_price: maxPrice,
          min_price: minPrice
        },
      });
      console.log(response.data);
      return response.data;
    },
  });


  // get single product
export const useProduct = (id) =>
  useQuery({
    queryKey: ["product",id],
    queryFn: async () => {
      const response = await apiRequest.get(`/products/${id}`);
      console.log(response.data);
      return response.data;
    },
  });