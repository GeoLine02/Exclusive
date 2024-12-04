import BillingDetails from "../../components/BillingDetails/BillingDetails";
import TotalBill from "../../components/BillingDetails/TotalBill";
import CartItemList from "../../components/CartComponent/CartItemList";

const CheckOut = () => {
  return (
    <div className="py-6 mx-auto flex flex-col md:flex-row items-center justify-around ">
      <div>
        <BillingDetails />
      </div>
      <div>
        <CartItemList />
        <TotalBill />
      </div>
    </div>
  );
};

export default CheckOut;
