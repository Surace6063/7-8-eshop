import { useEffect, useState } from "react";
import { useProducts } from "../api/productServices";
import CategoryFilter from "../components/filters/CategoryFilter";
import SortFilter from "../components/filters/SortFilter";
import MaxWidthContainer from "../components/MaxWidthContainer";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";

const Products = () => {
  const [searchParams,setSearchParams] = useSearchParams()

  console.log(searchParams.get('category'));

  const [category,setCategory] = useState(searchParams.get('category') || "")
  const [sort,setSort] = useState(searchParams.get('sort') || '')


  // console.log(category);

  const { data: products, isLoading, isError, error } = useProducts({category,sort});

  useEffect(()=>{
    const params = {}
     if(category) params.category = category
     if(sort) params.sort = sort
     setSearchParams(params)
  },[category,setSearchParams,sort])

  return (
    <MaxWidthContainer className="my-10">
      <div className="flex justify-between items-center">
        <h1 className="text-gray-800 text-2xl font-bold">Products</h1>
        <div className="flex gap-8 items-center">
          <SortFilter setSort={setSort} />
          <CategoryFilter setCategory={setCategory} />
        </div>
      </div>

      <div className="border-b border-gray-200 my-10" />

      {/* product list */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {isLoading ? (
          "loading..."
        ) : isError ? (
          <p>{error.message}</p>
        ) : (
          products.results.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        )}
      </div>
    </MaxWidthContainer>
  );
};
export default Products;
