import AuthSideImage from "../../assets/Auth-side-image.svg";
import { Link } from "react-router-dom";
import routes from "../../constants/routes";
import { ClipLoader } from "react-spinners";
import Form from "../ui/Form";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { UserType } from "../../types/user";
import SlowServerWarning from "../warnings/SlowServerWarning";


interface SignUpPropsType {
  handleSetUser: (fieldName: keyof UserType, value: string) => void;
  handleSignUp: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  error: string;
  isLoading: boolean;
}

const SignUpForm = ({error, handleSetUser, handleSignUp, isLoading} : SignUpPropsType) => {

  return (
      <div className="flex justify-center items-center md:flex md:gap-10">
      <img
        className="hidden md:block max-h-[600px]"
        src={AuthSideImage}
        alt="auth side image"
      />
    <Form onSubmit={handleSignUp} className="max-w-80" align="vertical">
        
          <h1 className="text-4xl font-medium">Create an account</h1>
        
        <div className="flex flex-col gap-5 mt-8">
          <Input name="userName" backgroundColor="none" underlined placeholder="Username" type="text" handleChange={(e) => handleSetUser("userName", e.target.value)} />     
          <Input name="email" backgroundColor="none" underlined placeholder="Email" type="text" handleChange={(e) => handleSetUser("email", e.target.value)} />     
          <Input name="password" backgroundColor="none" underlined placeholder="Passwrod" type="password" handleChange={(e) => handleSetUser("password", e.target.value)} />
        </div>
        <Button type="submit" className="mt-6" align="horizontal" background="red" textColor="light">
          Sign Up
        </Button>
        <p className="mt-4">
          Already have account?&nbsp;&nbsp;
          <Link to={routes.signIn} className="border-b-[1px] border-gray-300">
            Log in
          </Link>
        </p>
        <div>
          {isLoading && 
            <div className=" w-full flex justify-center items-center mt-10">
          <ClipLoader size={30} color="#DB4444" />
          <SlowServerWarning isLoading={isLoading} />
            </div>
          }
          {error &&
           <p>
              {error}
           </p>
           }  
        </div>
              
    </Form>
    </div>
  );
};

export default SignUpForm;
