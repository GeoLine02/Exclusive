import AuthSideImage from "../../assets/Auth-side-image.svg";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
const SignUpForm = () => {
  return (
    <div className="flex justify-center items-center md:flex  md:gap-10">
      <img
        className="hidden md:block max-h-[600px]"
        src={AuthSideImage}
        alt="auth side image"
      />
      <form className="max-w-96 flex flex-col justify-center">
        <div className="flex flex-col gap-3">
          <h1 className="text-4xl font-medium">Create an account</h1>
          <p className="font-medium">Enter your details below</p>
        </div>
        <div className="flex flex-col gap-5 mt-8">
          <div className="border-b-2 border-gray-400">
            <input
              className="outline-none bg-transparent "
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="border-b-2 border-gray-400">
            <input
              className="outline-none bg-transparent "
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="border-b-2 border-gray-400 w-full">
            <input
              className=" outline-none bg-transparent "
              type="passowrd"
              placeholder="Password"
            />
          </div>
        </div>
        <div className=" w-full flex justify-center items-center mt-5 gap-6">
          <button className="h-[56px] w-full bg-[#DB4444] rounded-md text-white">
            Create Account
          </button>
        </div>
        <p className="mt-4">
          Already have account?&nbsp;&nbsp;
          <Link to={routes.signIn} className="border-b-2 border-gray-400">
            Log in
          </Link>
        </p>
      </form>
    </div>
  );
};

export default SignUpForm;
