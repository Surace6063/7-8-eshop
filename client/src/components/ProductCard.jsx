const ProductCard = ({item}) => {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden">
      <img src={item.image} alt={item.title} 
      className=" aspect-square" />
      <div className="p-2">
        <h3 className="text-slate-800 font-semibold truncate">
            {item.title}
        </h3>
        <p className="text-gray-600 mt-1 line-clamp-2 text-sm">
            {item.description}
        </p>

        <p className="text-lg mt-2 text-primary font-bold">
            ${item.price}
        </p>
      </div>
    </div>
  )
}
export default ProductCard