import AuthSideImage from "../../assets/Auth-side-image.svg";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useState } from "react";
import { UserType } from "../../types";
import { signUp } from "../../api/atuh";
import { ClipLoader } from "react-spinners";
const SignUpForm = () => {
  const [user, setUser] = useState<UserType>({
    email: "",
    userName: "",
    password: "",
  });
  const [loader, setLoader] = useState<boolean>(false);
  const navigate = useNavigate();
  const handleOnChange = (fieldName: keyof UserType, value: string) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSignUp = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setLoader(true);
    signUp(user)
      .then(() => {
        navigate(routes.signIn);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoader(false);
      });
  };
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
              onChange={(e) => handleOnChange("userName", e.target.value)}
              className="outline-none bg-transparent "
              type="text"
              placeholder="Username"
            />
          </div>
          <div className="border-b-2 border-gray-400">
            <input
              onChange={(e) => handleOnChange("email", e.target.value)}
              className="outline-none bg-transparent "
              type="email"
              placeholder="Email"
            />
          </div>
          <div className="border-b-2 border-gray-400 w-full">
            <input
              onChange={(e) => handleOnChange("password", e.target.value)}
              className=" outline-none bg-transparent "
              type="passowrd"
              placeholder="Password"
            />
          </div>
        </div>
        <div className=" w-full flex justify-center items-center mt-5 gap-6">
          <button
            onClick={handleSignUp}
            className="h-[56px] w-full bg-[#DB4444] rounded-md text-white"
          >
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
      {loader && <ClipLoader color="#DB4444" />}
    </div>
  );
};

export default SignUpForm;
