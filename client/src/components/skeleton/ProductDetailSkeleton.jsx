const ProductDetailSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 lg:gap-20 p-6 animate-pulse">
      
      {/* Left: Image Skeleton */}
      <div className="flex-1 w-full md:h-[70vh]">
        <div className="w-full h-full bg-gray-200 rounded-xl"></div>
      </div>

      {/* Right: Product Details Skeleton */}
      <div className="flex-1 w-full space-y-4">
        
        {/* Title */}
        <div className="h-6 md:h-8 bg-gray-200 rounded w-3/4"></div>

        {/* Price */}
        <div className="h-5 bg-gray-200 rounded w-32 mt-3"></div>

        {/* Description */}
        <div className="space-y-3 mt-4">
          <div className="h-4 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6"></div>
        </div>

        {/* Quantity Section */}
        <div className="flex items-center gap-3 mt-6">
          <div className="h-10 w-10 bg-gray-200 rounded-md"></div>
          <div className="h-6 w-8 bg-gray-200 rounded"></div>
          <div className="h-10 w-10 bg-gray-200 rounded-md"></div>

          {/* Add to Cart Button */}
          <div className="h-10 w-32 bg-gray-300 rounded-lg"></div>
        </div>

        {/* Category */}
        <div className="h-4 bg-gray-200 rounded w-40 mt-4"></div>
      </div>
    </div>
  );
};

export default ProductDetailSkeleton;