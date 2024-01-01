import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsDetails } from "../../features/productSlice/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";

const ProductsDetailsComponent = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const details = useSelector((state: RootState) => state.produts.details);
  useEffect(() => {
    dispatch(fetchProductsDetails(id as string));
  }, [dispatch, id]);
  console.log(details?.images);
  return (
    <div>
      <p>
        Account / {details?.category} / <span>{details?.title}</span>
      </p>
      <div>
        <div className="flex flex-col items-center ">
          <div>
            <img className="max-w-72" src={details?.images[0]} />
          </div>
          <div className="flex gap-2 whitespace-nowrap overflow-x-auto">
            {details?.images.map((image, index) => (
              <img
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
          <div>
            <button>-</button>
            <input type="number" />
            <button>+</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetailsComponent;
``;
