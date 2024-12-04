import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

type TotalBillProps = {
  border?: string;
  color?: string;
  radius?: string;
};

const TotalBill = ({ border, color, radius }: TotalBillProps) => {
  const navigate = useNavigate();
  const location = useLocation();

  const cart = useSelector((state: RootState) => state.produts.cart);
  const productPricesArray = cart?.map((product) => product.price);
  const initialPrice = 0;
  const totalPrice = productPricesArray?.reduce(
    (accumulator, current) => accumulator + current,
    initialPrice
  );
  return (
    <div className={`${border} ${radius} ${color} p-4 w-[80vw] md:w-80 h-fit `}>
      <div>
        {location.pathname === "/cart" ? (
          <h2 className="text-xl font-medium pb-5">Cart Total</h2>
        ) : null}
        <div className="border-b-2 border-gray-300 py-3 flex justify-between">
          <span>Subtotal</span>
          <span>24801$</span>
        </div>
        <div className="border-b-2 border-gray-300 py-3 flex justify-between">
          <span>Shipping</span>
          <span>Free</span>
        </div>
        <div className="border-b-2 border-gray-300 py-3 flex justify-between">
          <span>Total</span>
          <span>{totalPrice}$</span>
        </div>
      </div>
      <div className="w-full grid place-content-center mt-6">
        {location.pathname === "/cart" ? (
          <button
            onClick={() => {
              cart?.length !== 0 ? navigate(routes.checkOut) : null;
            }}
            className="bg-[#DB4444] text-white px-6 py-2 rounded-sm"
          >
            Process to checkout
          </button>
        ) : null}
      </div>
    </div>
  );
};

export default TotalBill;
