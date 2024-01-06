import TotalBill from "../../components/BillingDetails/TotalBill";
import CartItemList from "../../components/CartComponent/CartItemList";

const Cart = () => {
  return (
    <div>
      <div>
        <p className="text-gray-300">
          Home / <span className="text-black">Cart</span>
        </p>
      </div>
      <CartItemList />
      <TotalBill
        color="border-gray-300"
        border="border-2"
        radius="rounded-md"
      />
    </div>
  );
};

export default Cart;
