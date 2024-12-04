import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import routes from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { BsCart2 } from "react-icons/bs";
import { signOutAction } from "../../features/UserSlice/userSlice";
import { useState } from "react";
import { toggleSideBar } from "../../features/navigationSlice/navigationSLice";
import SideBar from "../Sidebar/SideBar";
const NavBar = () => {
  const isLogedIn = useSelector((state: RootState) => state.user.isLogedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isHeaderOpen, setIsHeadeOpen] = useState<boolean>(false);

  const handleToggleHeader = () => {
    setIsHeadeOpen(!isHeaderOpen);
  };
  const isSideBarOpen = useSelector(
    (state: RootState) => state.naviagtion.isSidebarOpen
  );
  const handleToggleSideBar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <nav className="flex justify-between items-center px-6 py-2 border-b-gray-300 relative">
      <div className="flex gap-4">
        {isSideBarOpen ? (
          <AiOutlineClose
            onClick={handleToggleSideBar}
            className="cursor-pointer  lg:hidden"
            size={30}
          />
        ) : (
          <AiOutlineBars
            onClick={handleToggleSideBar}
            className="cursor-pointer md:hidden"
            size={30}
          />
        )}

        <h1
          onClick={() => {
            navigate(routes.home);
          }}
          className="text-4xl font-medium cursor-pointer"
        >
          Exclusive
        </h1>

        <div
          className={`absolute z-50 transition-all duration-300 ${
            isSideBarOpen ? " top-0 -left-3" : "top-0 -left-[100%]"
          }`}
        >
          <SideBar />
        </div>
      </div>
      <ul
        className={
          isHeaderOpen
            ? "absolute top-11 left-0 md:static md:flex md:gap-4 flex flex-col items-center justify-center w-full bg-white gap-3 py-3 z-50"
            : "absolute top-[-150px] left-0 md:static md:flex md:gap-4 z-50"
        }
      >
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>

        <li>
          <NavLink to={routes.about}>About Us</NavLink>
        </li>
        {!isLogedIn ? (
          <div className="flex flex-col md:flex-row gap-4">
            <li>
              <NavLink to={routes.signIn}>Sign In</NavLink>
            </li>
            <li>
              <NavLink to={routes.signUp}>Sign Up</NavLink>
            </li>
          </div>
        ) : (
          <li>
            <NavLink
              onClick={() => {
                dispatch(signOutAction());
              }}
              to={routes.signIn}
            >
              Log Out
            </NavLink>
          </li>
        )}
      </ul>
      <div className="flex items-center gap-">
        <BsCart2
          className="cursor-pointer"
          onClick={() => {
            navigate(routes.cart);
          }}
          size={25}
        />
        {isHeaderOpen ? (
          <AiOutlineClose
            onClick={handleToggleHeader}
            className="cursor-pointer  md:hidden"
            size={30}
          />
        ) : (
          <AiOutlineBars
            onClick={handleToggleHeader}
            className="cursor-pointer  md:hidden"
            size={30}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
