import AuthSideImage from "../../assets/Auth-side-image.svg";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useState } from "react";
import { UserType } from "../../types";
import { signIn } from "../../api/atuh";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { signInAction } from "../../features/UserSlice/userSlice";
import { ClipLoader } from "react-spinners";
const SignInForm = () => {
  const [user, setUser] = useState<UserType>({
    email: "",
    password: "",
  });
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();
  const handleOnChange = (fieldName: keyof UserType, value: string) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSignIn = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault, setLoader(true);
    signIn(user)
      .then((data) => {
        dispatch(signInAction(data.token));
        navigate(routes.home);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };

  return (
    <div className="grid justify-center items-center md:flex  md:gap-10">
      <img
        className="hidden md:block h-[600px]"
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
              onChange={(e) => handleOnChange("email", e.target.value)}
              className=" outline-none bg-transparent border-b-2 border-gray-400"
              type="email"
              placeholder="Email"
              name="email"
            />
          </div>
          <div>
            <input
              onChange={(e) => handleOnChange("password", e.target.value)}
              className=" outline-none bg-transparent border-b-2 border-gray-400"
              type="passowrd"
              placeholder="Password"
              name="password"
            />
          </div>
        </div>
        <div className="flex justify-center items-center mt-5 gap-6">
          <button
            onClick={handleSignIn}
            className="h-[56px] w-[143px] bg-[#DB4444] rounded-md text-white"
          >
            Log In
          </button>
          <Link className="text-[#DB4444]" to={routes.forgetPassword}>
            Forget Password?
          </Link>
        </div>
        {loader && <ClipLoader color="#DB4444" />}
      </form>
    </div>
  );
};

export default SignInForm;
