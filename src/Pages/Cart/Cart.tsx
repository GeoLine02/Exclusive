import TotalBill from "../../components/BillingDetails/TotalBill";
import CartItemList from "../../components/CartComponent/CartItemList";

const Cart = () => {
  return (
    <div className="h-[45vh]">
      <div className="px-6">
        <p className="text-gray-300">
          Home / <span className="text-black">Cart</span>
        </p>
      </div>
      <div className="flex flex-col  items-center justify-center md:flex-row md:justify-around ">
        <CartItemList />
        <TotalBill
          color="border-gray-300"
          border="border-2"
          radius="rounded-md"
        />
      </div>
    </div>
  );
};

export default Cart;
