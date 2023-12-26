import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { Navigate, Outlet } from "react-router-dom";
import routes from "../constants/routes";

const RouteGuard = () => {
  const isLogedIn = useSelector((state: RootState) => state.user.isLogedIn);
  return isLogedIn ? <Outlet /> : <Navigate to={routes.signIn} />;
};

export default RouteGuard;
