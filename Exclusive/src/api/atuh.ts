import { UserType } from "../types";

export const signIn = async (user: UserType) => {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/login",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("User sign in error!");
};

export const signUp = async (user: UserType) => {
  const resp = await fetch(
    "https://academyofdigitalindustriesbackend.onrender.com/api/v1/auth/register",
    {
      method: "POST",
      body: JSON.stringify(user),
      headers: { "content-type": "application/json" },
    }
  );
  if (resp.ok) {
    return await resp.json();
  }
  throw new Error("User SignUp error!");
};
