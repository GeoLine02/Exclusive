import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect } from "react";
import { fetchBestSellings } from "../../features/productSlice/productSlice";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import BestSellingsList from "../blocks/bestSellingsList/BestSellingsList";
import Button from "../ui/Button";

const BestSellings = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchBestSellings());
  }, [dispatch]);

  const handleNavigate = () => {
    navigate(routes.allProducts);
  };
  return (
    <div className="py-4 px-6 max-w-screen-xl w-full mx-auto">
      <div className="flex items-center gap-2">
        <span className="bg-[#DB4444] h-8 w-4 rounded-md"></span>
        <span className="text-[#DB4444] font-bold">This month</span>
      </div>
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium">Best Selling Products</h1>
        <div className="max-w-56">
          <Button
            onClick={handleNavigate}
            background="red"
            textColor="light"
            type="button"
            align="default"
          >
            View All
          </Button>
        </div>
      </div>
      <BestSellingsList />
    </div>
  );
};

export default BestSellings;
