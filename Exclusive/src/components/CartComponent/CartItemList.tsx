import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import CartItem from "./CartItem";

const CartItemList = () => {
  const cartItems = useSelector((state: RootState) => state.produts.cart);

  return (
    <div className="">
      <div className="lg:flex justify-between">
        <div className="  md:gap-3 md:max-w-[80vh] md:justify-center">
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
