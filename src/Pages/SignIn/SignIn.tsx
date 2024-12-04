import { useNavigate } from "react-router-dom";
import SignInForm from "../../components/SignInForm/SignInForm";
import useFetch from "../../hooks/useFetch";
import React, { useState } from "react";
import { UserType } from "../../types/user";
import routes from "../../constants/routes";
import { useDispatch } from "react-redux";
import { signInAction } from "../../features/UserSlice/userSlice";
import { AUTH_API_BASE_URL } from "../../utils/envs";

const SignIn = () => {

  const { error, isLoading,  fetchData} = useFetch()
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [user, setUser] = useState({
    email: '',
    password: '',
  })
  const handleSetUser = (fieldName : keyof UserType, value: string) => {
    setUser((prev) => ({
      ...prev,
      [fieldName]: value
    }))
  }

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const apiCallOptions = {
        headers: {
          "Content-Type" : "application/json"
        },
        method: "POST",
        body: JSON.stringify(user)
      }
      const resp = await fetchData(`${AUTH_API_BASE_URL}/api/v1/auth/login`, apiCallOptions)
      navigate(routes.home)
      dispatch(signInAction(resp.token))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
      <SignInForm handleSetUser={handleSetUser} handleSignIn={handleSignIn} isLoading={isLoading} error={error} />
    </div>
  );
};

export default SignIn;
