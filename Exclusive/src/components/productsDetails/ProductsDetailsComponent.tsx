import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";
import { ProductDetailsType } from "../../types";
import Button from "../ui/Button";

interface ProductsDetailsPropsType {
  cart: boolean;
  setCart: React.Dispatch<React.SetStateAction<boolean>>;
  removeFromCart: () => void;
  addToCart: () => void;
  id: string | undefined;
  details: ProductDetailsType | null;
  selectImage: number;
  setSelectImage: React.Dispatch<React.SetStateAction<number>>;
  onBuy: () => void;
}

const ProductsDetailsComponent = ({
  addToCart,
  cart,
  details,
  selectImage,
  setSelectImage,
  onBuy,
  removeFromCart,
}: ProductsDetailsPropsType) => {
  return (
    <div className="px-6 py-4">
      <p className="text-gray-300">
        Account / {details?.category} /
        <span className="text-black">{details?.title}</span>
      </p>
      <div className="md:flex gap-6 md:justify-center">
        <div className="grid grid-row-2 md:flex gap-4 md:items-center md:flex-row-reverse">
          <div>
            <img
              className="max-w-72 mx-auto md:max-w-96"
              src={details?.images[selectImage]}
            />
          </div>
          <div className="flex gap-2 whitespace-nowrap overflow-x-auto mt-6 max-w-96 md:flex-col md:h-96 mx-auto">
            {details?.images.map((image, index) => (
              <img
                onClick={() => {
                  setSelectImage(index);
                }}
                className="max-w-32"
                src={image}
                key={index}
                alt={`Image ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div>
          <div className="w-md grid place-content-center">
            <h1>{details?.title}</h1>
            <h2>Price: {details?.price}$</h2>
            <p className="max-w-96">Description: {details?.description}</p>
          </div>
          <div className="flex gap-6 mt-8 justify-center items-center">
            <div className="max-w-80">
              <Button
                align="default"
                onClick={onBuy}
                textColor="light"
                type="button"
                background="red"
              >
                Buy Now
              </Button>
            </div>
            <div className="max-w-72">
              {cart ? (
                <Button
                  align="default"
                  onClick={removeFromCart}
                  textColor="light"
                  type="button"
                  bordered
                  icon={<AiFillHeart size={25} color={"#DB4444"} />}
                />
              ) : (
                <Button
                  align="default"
                  onClick={addToCart}
                  textColor="dark"
                  type="button"
                  bordered
                  icon={<AiOutlineHeart size={25} color="#DB4444" />}
                />
              )}
            </div>
          </div>
          <div>
            <div className="flex items-center gap-4 my-4 border-gray-300 border-2 rounded-md p-4">
              <FaTruckFast size={30} />
              <div>
                <p>Free Delivery</p>
                <span className="text-xs">
                  Enter your postal code for Delivery Availability
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4 border-gray-300 border-2 rounded-md p-4">
              <RiLoopLeftFill size={30} />
              <div>
                <p>Return Delivery</p>
                <span className="text-xs">
                  Free 30 Days Delivery Returns. Details
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsComponent;
