import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  addToCartAction,
  fetchProductsDetails,
} from "../../features/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaTruckFast } from "react-icons/fa6";
import { RiLoopLeftFill } from "react-icons/ri";

const ProductsDetailsComponent = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const details = useSelector((state: RootState) => state.produts.details);
  const [selectImage, setSelectImage] = useState<number>(0);
  const [cart, setCart] = useState<boolean>(false);

  const addToCart = () => {
    setCart(true);
    dispatch(addToCartAction(details));
  };

  useEffect(() => {
    dispatch(fetchProductsDetails(id as string));
  }, [dispatch, id]);

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
          <div className="flex gap-6 mt-8 justify-center">
            <button className="py-2 px-5 bg-[#DB4444] text-white rounded-sm">
              Buy Now
            </button>
            <button className="w-10 border-[#DB4444] border-2 rounded-sm flex items-center justify-center">
              {cart ? (
                <AiFillHeart size={25} color={"#DB4444"} />
              ) : (
                <AiOutlineHeart
                  onClick={addToCart}
                  color={"#DB4444"}
                  size={25}
                />
              )}
            </button>
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
