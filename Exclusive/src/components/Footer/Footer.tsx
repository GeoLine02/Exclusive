import QRCode from "../../assets/QR-Code.svg";
import GooglePlay from "../../assets/google-play.svg";
import AppStore from "../../assets/app-store.svg";
const Footer = () => {
  return (
    <nav>
      <div>
        <ul>
          <h3 className="text-lg">Exclusive</h3>
          <li className="text-sm">Subscribe</li>
          <li className="text-xs">get 10% off your first order</li>
        </ul>
        <ul>
          <li>111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.</li>
          <li>exclusive@gmail.com</li>
          <li>+88015-88888-9999</li>
        </ul>
        <ul>
          <li>Account</li>
          <li>My Account</li>
          <li>Login / Register</li>
          <li>Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
        <ul>
          <li>Quick Link</li>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
          <li>FAQ</li>
          <li>Contact</li>
        </ul>
        <ul>
          <li>Download App</li>
          <span>Save $3 with App New Users Only</span>
          <div className="flex items-center gap-2">
            <img src={QRCode} alt="Qr code" />
            <div>
              <img className="pb-2" src={GooglePlay} alt="google play" />
              <img src={AppStore} alt="appStore" />
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};

export default Footer;
