import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

type DiscountedItemProps = {
  title: string;
  images: string[];
  price: number;
  discountPercentage?: number;
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

  const roundedDiscountPercentage = Math.round(discountPercentage as number);

  return (
    <div className="flex flex-col justify-between cursor-pointer max-w-52 pb-6">
      <div
        onClick={() => {
          navigate(`${routes.home}${id}`);
        }}
        className="relative"
      >
        <img
          className="min-h-40 min-w-40 max-h-52 max-w-52"
          src={images[0]}
          alt={title}
        />
        {discountPercentage ? (
          <span className="text-white font-medium text-xs bg-[#DB4444] p-1 rounded-md absolute top-3 left-3">
            -{roundedDiscountPercentage}%
          </span>
        ) : null}
      </div>
      <div>
        <h3 className="font-medium overflow-x-hidden">{title}</h3>
        <div>
          <p className="text-red-600 font-medium">price: {price}$</p>
        </div>
      </div>
    </div>
  );
};

export default DiscountedItem;
