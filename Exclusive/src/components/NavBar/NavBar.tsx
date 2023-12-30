import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineBars, AiOutlineClose } from "react-icons/ai";
import routes from "../../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { signOutAction } from "../../features/UserSlice/userSlice";
import { useState } from "react";
const NavBar = () => {
  const isLogedIn = useSelector((state: RootState) => state.user.isLogedIn);
  const dispatch = useDispatch();

  const [burger, setBurger] = useState<boolean>(false);

  const handleBurger = () => {
    setBurger(!burger);
  };
  return (
    <nav className="flex justify-between items-center ">
      <h1 className="text-4xl font-medium">Exclusive</h1>
      <ul
        className={
          burger
            ? "absolute top-16 left-0 md:static md:flex md:gap-4 flex flex-col items-center justify-center w-full bg-white gap-3 py-3"
            : "absolute top-[-150px] left-0 md:static md:flex md:gap-4"
        }
      >
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.contact}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={routes.about}>About</NavLink>
        </li>
        {!isLogedIn ? (
          <div className="flex gap-4">
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
        <input
          className="outline-none"
          type="text"
          placeholder="What are you looking for?"
        />
        <AiOutlineSearch className="cursor-pointer" size={30} />
        {burger ? (
          <AiOutlineClose
            onClick={handleBurger}
            className="cursor-pointer  md:hidden"
            size={30}
          />
        ) : (
          <AiOutlineBars
            onClick={handleBurger}
            className="cursor-pointer  md:hidden"
            size={30}
          />
        )}
      </div>
    </nav>
  );
};

export default NavBar;
