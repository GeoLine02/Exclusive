import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useLocation } from "react-router-dom";
import Bkash from "../../assets/Bkash.svg";
import Visa from "../../assets/Visa.svg";
import MasterCard from "../../assets/masterCard.svg";
import Nagad from "../../assets/nagad.svg";

type TotalBillProps = {
  border?: string;
  color?: string;
  radius?: string;
};

const TotalBill = ({ border, color, radius }: TotalBillProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location.pathname);
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
          <span>1920$</span>
        </div>
      </div>
      <div className="w-full grid place-content-center mt-6">
        {location.pathname === "/checkOut" ? (
          <div>
            <div className="flex gap-10">
              <div>
                <input type="radio" />
                <label className="ml-1" htmlFor="radio">
                  Bank
                </label>
              </div>
              <div className="flex gap-1 items-center">
                <img src={Bkash} alt="Bkash" />
                <img src={Visa} alt="Visa" />
                <img src={MasterCard} alt="MasterCard" />
                <img src={Nagad} alt="Nagad" />
              </div>
            </div>
            <div>
              <input type="radio" />
              <label className="ml-1" htmlFor="radio">
                Cash on Delivery
              </label>
            </div>
            <button
              onClick={() => {
                navigate(routes.checkOut);
              }}
              className="bg-[#DB4444] text-white px-6 py-2 rounded-sm"
            >
              Place Order
            </button>
          </div>
        ) : (
          <button
            onClick={() => {
              navigate(routes.checkOut);
            }}
            className="bg-[#DB4444] text-white px-6 py-2 rounded-sm"
          >
            Process to checkout
          </button>
        )}
      </div>
    </div>
  );
};

export default TotalBill;
