import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchBestSellings } from "../../features/productSlice/productSlice";
import DiscountedItem from "../FreshSales/DiscountedItem";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";

const BestSellings = () => {
  const bestSellings = useSelector(
    (state: RootState) => state.produts.bestSellings
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchBestSellings());
  }, [dispatch]);
  return (
    <div>
      <div className="flex items-center gap-2">
        <span className="bg-[#DB4444] h-8 w-4 rounded-md"></span>
        <span className="text-[#DB4444] font-bold">This month</span>
      </div>
      <div className="flex justify-between">
        <h1 className="text-3xl font-medium">Best Selling Products</h1>
        <button
          onClick={() => {
            navigate(routes.allProducts);
          }}
          className="text-white font-medium bg-[#DB4444] rounded-sm px-6 py-2"
        >
          View All
        </button>
      </div>
      <div className="mt-6 flex gap-4 whitespace-nowrap overflow-x-auto md:justify-center">
        {bestSellings?.products.map((item) => (
          <DiscountedItem
            id={item.id}
            title={item.title}
            images={item.images}
            discountPercentage={item.discountPercentage}
            price={item.price}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellings;
