import { useEffect, useState } from "react";
import { useProducts } from "../api/productServices";
import CategoryFilter from "../components/filters/CategoryFilter";
import SortFilter from "../components/filters/SortFilter";
import MaxWidthContainer from "../components/MaxWidthContainer";
import ProductCard from "../components/ProductCard";
import { useSearchParams } from "react-router-dom";
import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [serachValue, setSerachValue] = useState(
    searchParams.get("search") || ""
  );

  const [category, setCategory] = useState(searchParams.get("category") || "");
  const [sort, setSort] = useState(searchParams.get("sort") || "");
  const [page, setPage] = useState(1);

  const [minPrice,setMinPrice] = useState("")
  const [maxPrice,setMaxPrice] = useState("")

  const [debouncedMinPrice,setDebouncedMinPrice] = useState("")
  const [debouncedMaxPrice,setDebouncedMaxPrice] = useState("")

  // set min max state value to dedounced state after 500ms
  useEffect(()=>{
     const minTimeout = setTimeout(()=> setDebouncedMinPrice(minPrice),500)
     return () => clearTimeout(minTimeout);
  },[minPrice])

  useEffect(()=>{
     const maxTimeout = setTimeout(()=> setDebouncedMaxPrice(maxPrice),500)
     return () => clearTimeout(maxTimeout);
  },[maxPrice])

  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProducts({ category, sort, page, serachValue,minPrice:debouncedMinPrice,maxPrice:debouncedMaxPrice })

  // handle previous pagination
  const handlePrevious = () => {
    if (products?.links?.previous) {
      setPage(page - 1);
    }
  };

  // handle next pagination
  const handleNext = () => {
    if (products?.links?.next) {
      setPage(page + 1);
    }
  };

  useEffect(() => {
    // get search value from url
    const urlSearch = searchParams.get("search") || "";

    // set search value to searchValue state
    setSerachValue(urlSearch);
  }, [searchParams]); // whenever searchParams chnage -> setSearchValue will update searchValue state

  useEffect(() => {
    const params = {};
    if (category) params.category = category;
    if (sort) params.sort = sort;
    if (page) params.page = page;
    if (serachValue) params.search = serachValue;
    setSearchParams(params);
  }, [category, setSearchParams, sort, page, serachValue]);

  return (
    <MaxWidthContainer className="my-10">
      <div className="flex justify-between items-center">
        {/* <h1 className="text-gray-800 text-2xl font-bold">Products</h1> */}
        {/* price range filter */}
        <div className="flex gap-2">
          <Input
            type="number"
            placeholder="min price"
            label="Min Price"
            id="min"
            onChange={e => setMinPrice(e.target.value)}
          />
          <Input
            type="number"
            placeholder="max price"
            label="Max Price"
            id="max"
            onChange={e => setMaxPrice(e.target.value)}
          />
        </div>

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
        ) : products.results.length === 0 ? (
          <div>no products found</div>
        ) : (
          products.results.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))
        )}
      </div>
      {/* pagination */}
      <div className="mt-8 flex justify-center">
        <div className="flex justify-center gap-4 items-center">
          <Button
            disabled={!products?.links?.previous}
            onClick={handlePrevious}
            variant="outline"
            className="border-gray-300 text-gray-700"
          >
            previous
          </Button>
          <span className="text-gray-600 font-medium">
            {products?.current_page} / {products?.total_pages}
          </span>
          <Button
            disabled={!products?.links?.next}
            onClick={handleNext}
            variant="outline"
            className="border-gray-300 text-gray-700"
          >
            next
          </Button>
        </div>
      </div>
    </MaxWidthContainer>
  );
};
export default Products;
