import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

type DiscountedItemProps = {
  title: string;
  images: string[];
  price: number;
  discountPercentage: number;
  id: number;
};

const DiscountedItem = ({
  title,
  images,
  price,
  discountPercentage,
  id,
}: DiscountedItemProps) => {
  const navigate = useNavigate();

  return (
    <div className="w-72 cursor-pointer">
      <div
        onClick={() => {
          navigate(`${routes.home}/${id}`);
        }}
        className="relative"
      >
        <img src={images[0]} alt={title} />
        <span className="text-white font-medium text-xs bg-[#DB4444] p-1 rounded-md absolute top-3 left-3">
          -{discountPercentage}%
        </span>
      </div>
      <div>
        <h3 className="font-medium">{title}</h3>
        <div>
          <p className="text-red-600 font-medium">price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountedItem;
