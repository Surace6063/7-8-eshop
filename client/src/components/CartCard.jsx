import {X} from "lucide-react"
import { useRemoveFromCart } from "../api/cartServices";

const CartCard = ({item}) => {

  // handle remove from cart
  const {mutate} = useRemoveFromCart()

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition duration-300 border border-gray-100 w-full cursor-pointer group relative">

      {/* PRODUCT (col 1–7) */}
      <div className="flex gap-4 items-start md:col-span-7">
        <img
          src={item.product_image}
          alt={item.product_name}
          className="size-28 object-cover rounded-lg"
        />

        <div className="flex flex-col justify-between w-full">
          <div>
            <h3 className="text-sm md:text-base font-medium max-w-[250px] text-gray-800 leading-tight">
              {item.product_name}
            </h3>

            <p className="text-primary font-medium text-sm mt-1 mb-3">
              ${item.price}
            </p>

            <p className="text-gray-600 text-xs px-2 py-1 bg-slate-50 w-fit">
              {item.product_category}
            </p>
          </div>

          {/* Remove Button */}
          <button onClick={()=>mutate(item.id)} className="text-red-800 text-xs opacity-0 group-hover:opacity-100 transition-opacity absolute top-2 right-2 p-1 cursor-pointer rounded-full hover:bg-slate-50">
            <X size={20} />
          </button>
        </div>
      </div>

      {/* QUANTITY (col 8–10) */}
      <div className="flex items-center md:justify-center mt-4 md:mt-0 md:col-span-3">
        <div className="flex items-center gap-3 bg-gray-50 rounded-xl px-3 py-2 border border-gray-200">
          <button className="px-2 text-gray-600 text-lg cursor-pointer">–</button>

          <span className="font-semibold text-gray-800 w-6 text-center">
            {item.quantity}
          </span>

          <button className="px-2 text-gray-600 text-lg cursor-pointer">+</button>
        </div>
      </div>

      {/* TOTAL (col 11–12) */}
      <div className="flex items-center md:justify-end mt-4 md:mt-0 font-semibold text-gray-900 md:col-span-2">
        ${item.subtotal}
      </div>
    </div>
  );
};

export default CartCard;