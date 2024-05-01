import AuthSideImage from "../../assets/Auth-side-image.svg";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../constants/routes";
import { useEffect } from "react";
import { UserType } from "../../types";
import { useDispatch} from "react-redux";
import { AppDispatch} from "../../store/store";
import { signInAction } from "../../features/UserSlice/userSlice";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Loader from "../Loaders/Loader";
import SlowServerWarning from "../warnings/SlowServerWarning";

interface SignInFormPropsType {
  handleSetUser: (fieldName: keyof UserType, value: string) => void;
  handleSignIn: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
  isLoading: boolean;
}

const SignInForm = ({handleSetUser, handleSignIn, isLoading, error} : SignInFormPropsType) => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      dispatch(signInAction(token));
      navigate(routes.home);
    }
  }, [dispatch, navigate]);




  return (
    <div className="flex justify-center items-center md:flex  md:gap-10">
      <img
        className="hidden md:block h-[600px]"
        src={AuthSideImage}
        alt="auth side image"
      />
      <Form align="vertical" className="max-w-80" onSubmit={handleSignIn} >
        
          <h1 className="text-4xl font-medium">Login to Exclusive</h1>
        
        <div className="flex flex-col gap-5 mt-8">
          <Input underlined type="email" placeholder="Email" name="email" handleChange={(e) => handleSetUser("email", e.target.value)} backgroundColor="none" />
          <Input underlined type="password" placeholder="Password" name="password" handleChange={(e) => handleSetUser("password", e.target.value)} backgroundColor="none" />
        </div>
        <div className="flex flex-col justify-center items-center mt-5 gap-6">
          <Button className="mt-4" background="red" textColor="light" align="horizontal" type="submit">
            Log In
          </Button>
          <Link className="text-[#DB4444]" to={routes.forgetPassword}>
            Forget Password?
          </Link>
        </div>
        {isLoading &&
        <div className="flex justify-center gap-4 items-center">
         <Loader />
         <SlowServerWarning isLoading={isLoading} />
        </div>
         }
        {error &&
          <p>
            {error}
          </p>
        }
      </Form>
    </div>
  );
};

export default SignInForm;
