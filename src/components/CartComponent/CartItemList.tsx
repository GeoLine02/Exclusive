import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartItems = useSelector((state: RootState) => state.produts.cart);

  return (
    <div className="px-6 py-4">
      <div className="lg:flex justify-between">
        <div className="md:gap-3 md:max-w-[80vh] md:justify-center whitespace-nowrap overflow-y-auto h-56 ">
          {cartItems?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.title}
              price={item.price}
              image={item.images}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartItemList;
