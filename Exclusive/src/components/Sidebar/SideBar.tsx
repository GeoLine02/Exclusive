import { IoIosArrowForward } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { toggleSideBar } from "../../features/navigationSlice/navigationSLice";

const SideBar = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleCloseSideBar = () => {
    dispatch(toggleSideBar());
  };

  return (
    <div>
      <ul className="flex flex-col gap-4 cursor-pointer bg-white px-6 py-4 md:py-0 min-h-screen md:min-h-[100%] md:max-h-fit fixed md:static z-50 opacity-100">
        <div className="flex items-center gap-3">
          <h1 className="text-3xl border-gray-300 border-b w-full cursor-pointer md:hidden">
            Exclusive
          </h1>
          <IoClose
            onClick={handleCloseSideBar}
            className="cursor-pointer md:hidden"
            size={35}
          />
        </div>
        <div className="flex items-center justify-between">
          <li>Wooman's Fashion</li>
          <IoIosArrowForward size={20} />
        </div>
        <div className="flex items-center justify-between">
          <li>Man's Fashion</li>
          <IoIosArrowForward size={20} />
        </div>
        <li>Electronics</li>
        <li>Home & Lifestyle</li>
        <li>Medicine</li>
        <li>Sports & Outdoor</li>
        <li>Bady's & Toys</li>
        <li>Groceries & Pets</li>
        <li>Health & Beauty</li>
      </ul>
    </div>
  );
};

export default SideBar;
