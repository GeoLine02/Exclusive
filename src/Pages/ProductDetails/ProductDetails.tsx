import { useDispatch, useSelector } from "react-redux";
import ProductsDetailsComponent from "../../components/productsDetails/ProductsDetailsComponent";
import {
  addToCartAction,
  fetchProductsDetails,
  removeCartItemAction,
} from "../../features/productSlice/productSlice";
import { useEffect, useState } from "react";
import { AppDispatch, RootState } from "../../store/store";
import { useNavigate, useParams } from "react-router-dom";
import routes from "../../constants/routes";

const ProductDetails = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { id } = useParams();
  const navigate = useNavigate();
  const [cart, setCart] = useState<boolean>(false);
  const [selectImage, setSelectImage] = useState<number>(0);

  const details = useSelector((state: RootState) => state.produts.details);
  const addToCart = () => {
    setCart(true);
    dispatch(addToCartAction(details));
  };

  const onBye = () => {
    setCart(true);
    dispatch(addToCartAction(details));
    navigate(routes.checkOut);
  };

  const removeFromCart = () => {
    setCart(false);
    dispatch(removeCartItemAction(id));
  };

  useEffect(() => {
    dispatch(fetchProductsDetails(id as string));
  }, [dispatch, id]);
  return (
    <div>
      <ProductsDetailsComponent
        selectImage={selectImage}
        removeFromCart={removeFromCart}
        setSelectImage={setSelectImage}
        addToCart={addToCart}
        cart={cart}
        setCart={setCart}
        id={id}
        details={details}
        onBuy={onBye}
      />
    </div>
  );
};

export default ProductDetails;
