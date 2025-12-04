import Button from "../components/ui/Button";

const CartSummaryCard = ({total}) => {
  return (
    <div className="p-5 bg-white rounded-xl shadow-md h-fit sticky top-5">
      <h3 className="text-lg font-semibold mb-4">Order Summary</h3>

      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <p>Subtotal</p>
        <p className="font-semibold text-gray-900">${total}</p>
      </div>

      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <p>Shipping</p>
        <p className="font-medium text-gray-900">$5.00</p>
      </div>

      <div className="flex justify-between text-sm text-gray-700 mb-2">
        <p>Tax</p>
        <p className="font-medium text-gray-900">$8.00</p>
      </div>

      <div className="flex justify-between text-sm text-gray-700 mb-4">
        <p>Discount</p>
        <p className="font-medium text-red-600">- $10.00</p>
      </div>

      <hr className="my-4" />

      <div className="flex justify-between text-base font-semibold text-gray-900 mb-6">
        <p>Total</p>
        <p>${total}</p>
      </div>

      <div className="flex flex-col gap-3">
        <Button variant="secondary">GO TO CHECKOUT</Button>
        <Button variant="ghost">CONTINUE SHOPPING</Button>
      </div>
    </div>
  );
};
export default CartSummaryCard
