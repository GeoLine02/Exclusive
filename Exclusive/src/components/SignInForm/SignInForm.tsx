import AuthSideImage from "../../assets/Auth-side-image.svg";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
const SignInForm = () => {
  return (
    <div className="h-screen grid justify-center items-center md:flex  md:gap-10">
      <img
        className="hidden md:block"
        src={AuthSideImage}
        alt="auth side image"
      />
      <form className="max-w-96 flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-medium">Login to Exclusive</h1>
          <p className="font-medium">Enter your details below</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5 mt-8">
          <div>
            <input
              className=" outline-none bg-transparent border-b-2 border-gray-400"
              type="email"
              placeholder="Email"
            />
          </div>
          <div>
            <input
              className=" outline-none bg-transparent border-b-2 border-gray-400"
              type="passowrd"
              placeholder="Password"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-5 gap-6">
          <button className="h-[56px] w-[143px] bg-[#DB4444] rounded-md text-white">
            Log In
          </button>
          <Link className="text-[#DB4444]" to={routes.forgetPassword}>
            Forget Password?
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
