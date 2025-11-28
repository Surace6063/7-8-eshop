import { useState } from "react";
import MaxWidthContainer from "../components/MaxWidthContainer";
import Button from "../components/ui/Button";
import { useParams } from "react-router-dom";
import { useProduct } from "../api/productServices";

const ProductDetailPage = () => {
  const [quantity, setQuantity] = useState(1);

  const {id} = useParams()
  console.log(id);

  const {data:product,isLoading,isError,error} = useProduct(id)

  const increaseQty = () => setQuantity((q) => q + 1);
  const decreaseQty = () => setQuantity((q) => (q > 1 ? q - 1 : 1));

  if(isLoading) return <span>loaging....</span>
  if(isError) return <p>{error.message}</p>

  return (
    <MaxWidthContainer className="my-6 md:my-8 lg:my-10">
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 p-6">
        {/* Left: Product Image */}
        <div className="flex-1 w-full md:h-[70vh]">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover rounded-xl shadow"
          />
        </div>

        {/* Right: Product Details */}
        <div className="flex-1">
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">{product.title}</h1>

          <p className="text-xl sm:text-2xl text-primary mt-3 font-semibold">
            ${product.price}
          </p>

          <p className="text-gray-600 mt-4 leading-6 text-justify">{product.description}</p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mt-6">
            <button
              onClick={decreaseQty}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition rounded-md cursor-pointer"
            >
              -
            </button>

            <span className="text-lg font-semibold">{quantity}</span>

            <button
              onClick={increaseQty}
              className="px-3 py-1 bg-gray-200 hover:bg-gray-300 transition rounded-md cursor-pointer"
            >
              +
            </button>
            {/* Add to cart button */}
          <Button className="bg-slate-800 hover:bg-slate-800/80"
          >
            Add to Cart
          </Button>
          </div>

          

          {/* Category */}
          <p className="mt-4 text-sm text-gray-500">
            Category:{" "}
            <span className="font-medium text-gray-700">
              {product.category_name}
            </span>
          </p>
        </div>
      </div>
    </MaxWidthContainer>
  );
};

export default ProductDetailPage;