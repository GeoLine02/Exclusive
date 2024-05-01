import { useState } from "react";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { UserType } from "../../types/user";
import useFetch from "../../hooks/useFetch";
import routes from "../../constants/routes";
import { useNavigate } from "react-router-dom";
import { AUTH_API_BASE_URL } from "../../utils/envs";

const SignUp = () => {
  const {error, isLoading,  fetchData} = useFetch()
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: '',
    username: '',
    password: '',
  })
   
    const handleSetUser = (fieldName : keyof UserType, value: string) => {
      setUser((prev) => ({
        ...prev,
        [fieldName]: value
      }))
    }
  
    const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const apiCallOptions = {
          headers: {
            "Content-Type" : "application/json"
          },
          method: "POST",
          body: JSON.stringify(user)
        }
        const resp = await fetchData(`${AUTH_API_BASE_URL}/api/v1/auth/register`, apiCallOptions);
        navigate(routes.signIn)
        return resp
      } catch (error) {
        console.log(error)
      }
      
    }
  return (
    <div>
      <SignUpForm handleSetUser={handleSetUser} handleSignUp={handleSignUp} error={error} isLoading={isLoading} />
    </div>
  );
};

export default SignUp;
