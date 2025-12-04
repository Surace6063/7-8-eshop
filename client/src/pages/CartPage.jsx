import { useCarts } from "../api/cartServices";
import CartCard from "../components/CartCard";
import CartSummaryCard from "../components/CartSummaryCard";
import MaxWidthContainer from "../components/MaxWidthContainer";

const CartPage = () => {
  const { data: carts, isLoading, isError, error } = useCarts();
  
console.log(carts);
  return (
    <MaxWidthContainer>
      {isLoading ? (
        "loading..."
      ) : isError ? (
        <p>{error.message}</p>
      ) : carts.items.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <div className="my-10 flex gap-20">
          {/* cart list */}
          <div className="basis-[70%]">
            {/* <h1 className="text-2xl font-semibold text-gray-800">
              Shopping Cart
            </h1> */}

            <div className="mt-4 space-y-4">
              {
                carts.items.map(item => (
                  <CartCard key={item.id} item={item} />
                ))
              }
            </div>
          </div>

          {/* cart summary card */}
          <div className="basis-[25%]">
            <CartSummaryCard total={carts.total} />
          </div>
        </div>
      )}
    </MaxWidthContainer>
  );
};
export default CartPage;
