import { useCarts } from "../api/cartServices";
import CartCard from "../components/CartCard";
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
        <div className="my-10 flex gap-10">
          {/* cart list */}
          <div className="basis-4/5">
            <h1 className="text-2xl font-semibold text-gray-800">
              Shopping Cart
            </h1>

            <div>
              {
                carts.items.map(item => (
                  <CartCard />
                ))
              }
            </div>
          </div>

          {/* cart summary card */}
          <div className="basis-1/5">cart summary</div>
        </div>
      )}
    </MaxWidthContainer>
  );
};
export default CartPage;
