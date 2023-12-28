import { useEffect } from "react";
import { fetchSales } from "../../features/productSlice/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const DiscountedItem = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  return <div></div>;
};

export default DiscountedItem;
