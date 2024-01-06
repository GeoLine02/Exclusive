import QRCode from "../../assets/QR-Code.svg";
import GooglePlay from "../../assets/google-play.svg";
import AppStore from "../../assets/app-store.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
const Footer = () => {
  const isLogedIn = useSelector((state: RootState) => state.user.isLogedIn);
  return (
    <nav>
      {isLogedIn ? (
        <div className="grid grid-cols-2 justify-center gap-4 p-5 text-white bg-black ">
          <ul className="grid justify-center items-center">
            <h3 className="text-3xl font-medium">Exclusive</h3>
            <li className="text-sm">Subscribe</li>
            <li className="text-xs">get 10% off your first order</li>
          </ul>
          <ul className="grid justify-center items-center">
            <li className="text-2xl">Support</li>
            <li className="max-w-[90%]">
              111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
            </li>
            <li>exclusive@gmail.com</li>
            <li>+88015-88888-9999</li>
          </ul>
          <ul className="grid justify-center items-center">
            <li className="text-2xl font-medium">Account</li>
            <li>My Account</li>
            <li>Cart</li>
            <li>Wishlist</li>
            <li>Shop</li>
          </ul>
          <ul className="grid justify-center items-center">
            <li className="text-2xl font-bold">Quick Link</li>
            <li>Privacy Policy</li>
            <li>Terms of use</li>
            <li>FAQ</li>
            <li>Contact</li>
          </ul>
          <ul className="grid justify-center items-center">
            <li className="2xl font-medium">Download App</li>
            <span>Save $3 with App New Users Only</span>
            <div className="flex items-center gap-2">
              <img src={QRCode} alt="Qr code" />
              <div>
                <img
                  className="pb-2 cursor-pointer"
                  src={GooglePlay}
                  alt="google play"
                />
                <img className="cursor-pointer" src={AppStore} alt="appStore" />
              </div>
            </div>
          </ul>
        </div>
      ) : null}
    </nav>
  );
};

export default Footer;
