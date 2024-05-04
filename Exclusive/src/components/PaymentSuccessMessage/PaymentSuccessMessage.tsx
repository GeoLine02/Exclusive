import { useEffect, useState } from "react";
import { IoCheckmarkCircle } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
const PaymentSuccessMessage = () => {
  const [count, setCount] = useState<number>(4);
  const navigate = useNavigate();

  useEffect(() => {
    const redirectTimer = () => {
      const timeoutId = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
      if (!count) {
        clearTimeout(timeoutId);
        navigate(routes.home);
      }
    };
    redirectTimer();
  }, [count, navigate]);

  return (
    <div className="max-w-72 lg:max-w-80 flex flex-col justify-center items-center text-center gap-6">
      <IoCheckmarkCircle size={120} color="green" className="animate-pulse" />
      <h1 className="text-3xl text-green-500">Your Payment was successful!</h1>
      <p>Redirect in {count} seconds.</p>
      <p>Please wait!</p>
    </div>
  );
};

export default PaymentSuccessMessage;
