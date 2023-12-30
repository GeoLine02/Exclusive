import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductsDetails } from "../../features/productSlice/productSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";

const ProductsDetailsComponent = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchProductsDetails(id as string));
  }, [dispatch, id]);

  return <div>ProductsDetails</div>;
};

export default ProductsDetailsComponent;
