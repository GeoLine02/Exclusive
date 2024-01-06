import { AiOutlineClose } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { removeCartItemAction } from "../../features/productSlice/productSlice";

type CartItemProps = {
  name: string;
  price: number;
  image: string[];
  id: number;
};

const CartItem = ({ id, name, price, image }: CartItemProps) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(removeCartItemAction(id));
  };
  return (
    <div className="flex justify-between min-w-72 px-4 py-2 items-center">
      <div className="w-fit relative">
        <img className="max-w-16" src={image[0]} alt={`${name} image`} />
        <div
          onClick={handleDelete}
          className="cursor-pointer rounded-full absolute top-2 right-2 bg-red-600  text-white"
        >
          {<AiOutlineClose />}
        </div>
      </div>
      <p>{name}</p>
      <p>${price}</p>
    </div>
  );
};

export default CartItem;
