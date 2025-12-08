import { useProducts } from "../api/productServices";
import ProductCard from "./ProductCard";
import ProductSkeleton from "./skeleton/ProductSkeleton";

const NewArrivals = () => {
  const {
    data: products,
    isLoading,
    isError,
    error,
  } = useProducts({ page_size: 4 });

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {isLoading ? (
        <>
          {[...Array(4)].map((_, index) => (
            <ProductSkeleton key={index} />
          ))}
        </>
      ) : isError ? (
        <p>{error.message}</p>
      ) : (
        products.results.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
};
export default NewArrivals;
