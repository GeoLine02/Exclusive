import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsDetails } from "../../features/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

const ProductsDetailsComponent = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const details = useSelector((state: RootState) => state.produts.details);
  const [itemAmount, setItemAmount] = useState<number>(1);
  const [selectImage, setSelectImage] = useState<number>(0);

  useEffect(() => {
    dispatch(fetchProductsDetails(id as string));
  }, [dispatch, id]);

  return (
    <div>
      <p>
        Account / {details?.category} / <span>{details?.title}</span>
      </p>
      <div>
        <div className="flex flex-col  ">
          <div>
            <img
              className="max-w-72 mx-auto"
              src={details?.images[selectImage]}
            />
          </div>
          <div className="flex gap-2 whitespace-nowrap overflow-x-auto">
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
        <h1>{details?.title}</h1>
        <h2>{details?.price}</h2>
        <p>{details?.discription}</p>
        <div className="flex gap-4">
          <div className="flex items-center">
            <button
              onClick={() => {
                setItemAmount(itemAmount - 1);
              }}
              className="w-10 text-4xl text-white bg-[#DB4444]"
            >
              -
            </button>
            <div className="text-xl">
              <input
                className="w-10 outline-none text-center"
                type="numeric"
                value={itemAmount}
              />
            </div>
            <button
              onClick={() => {
                setItemAmount(itemAmount + 1);
              }}
              className="w-10 text-4xl text-white bg-[#DB4444]"
            >
              +
            </button>
            <button className="py-2 px-5 bg-[#DB4444] text-white rounded-sm">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsComponent;
