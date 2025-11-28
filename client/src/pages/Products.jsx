import { useEffect, useState } from "react";
import { useProducts } from "../api/productServices";
import CategoryFilter from "../components/filters/CategoryFilter";
import SortFilter from "../components/filters/SortFilter";
import MaxWidthContainer from "../components/MaxWidthContainer";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import Button from "../components/ui/Button";

const Products = () => {
  const [searchParams,setSearchParams] = useSearchParams()

  console.log(searchParams.get('category'));

  const [category,setCategory] = useState(searchParams.get('category') || "")
  const [sort,setSort] = useState(searchParams.get('sort') || '')
  const [page,setPage] = useState(1)

  // console.log(category);

  const { data: products, isLoading, isError, error } = useProducts({category,sort,page});

    // handle previous pagination
  const handlePrevious = () => {
    if(products?.links?.previous){
      setPage(page - 1)
    }
  }

  // handle next pagination
  const handleNext = () => {
    if(products?.links?.next){
      setPage(page + 1)
    }
  }

  useEffect(()=>{
    const params = {}
     if(category) params.category = category
     if(sort) params.sort = sort
     if(page) params.page = page
     setSearchParams(params)
  },[category,setSearchParams,sort,page])



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
      {/* pagination */}
      <div className="mt-8 flex justify-center">
        <div className="flex justify-center gap-4 items-center">
          <Button disabled={!products?.links?.previous} onClick={handlePrevious} variant="outline" className="border-gray-300 text-gray-700">
             previous
          </Button>
          <span className="text-gray-600 font-medium">
            {products?.current_page} / {products?.total_pages}
          </span>
           <Button disabled={!products?.links?.next} onClick={handleNext} variant="outline" className="border-gray-300 text-gray-700">
             next
          </Button>
        </div>
      </div>
    </MaxWidthContainer>
  );
};
export default Products;

