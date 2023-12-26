import { jwtDecode } from "jwt-decode";

export const decodeToken = (token: string) => {
  return jwtDecode(token);
};

export const toggleStorage = (token: string) => {
  if (token) {
    localStorage.setItem("accessToken", token);
  } else {
    localStorage.removeItem("accessToken");
  }
};
