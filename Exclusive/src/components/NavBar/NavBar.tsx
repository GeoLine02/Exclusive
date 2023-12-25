import { NavLink } from "react-router-dom";
import { AiOutlineSearch, AiOutlineBars } from "react-icons/ai";
import routes from "../../constants/routes";
const NavBar = () => {
  return (
    <nav className="flex justify-between items-center">
      <h1 className="text-4xl font-medium">Exclusive</h1>
      <ul className=" gap-5 hidden md:flex">
        <li>
          <NavLink to={routes.home}>Home</NavLink>
        </li>
        <li>
          <NavLink to={routes.contact}>Contact</NavLink>
        </li>
        <li>
          <NavLink to={routes.about}>About</NavLink>
        </li>
        <li>
          <NavLink to={routes.signUp}>Sign Up</NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-">
        <input
          className="outline-none"
          type="text"
          placeholder="What are you looking for?"
        />
        <AiOutlineSearch className="cursor-pointer" size={30} />
        <AiOutlineBars size={30} />
      </div>
    </nav>
  );
};

export default NavBar;
