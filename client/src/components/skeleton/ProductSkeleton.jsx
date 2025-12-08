const ProductSkeleton = () => {
  return (
    <div className="animate-pulse space-y-3 border border-gray-200 p-3 rounded-lg">
      <div className="w-full h-40 bg-gray-200 rounded-md"></div>

      <div className="h-3 bg-gray-200 rounded w-3/4"></div>
      <div className="h-3 bg-gray-200 rounded w-1/2"></div>

      <div className="flex justify-between items-center mt-3">
        <div className="h-3 w-16 bg-gray-200 rounded"></div>
        <div className="h-8 w-20 bg-gray-200 rounded"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;
