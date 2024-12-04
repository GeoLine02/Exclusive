import SliderImage from "../../assets/slider-img.png";
import SideBar from "../Sidebar/SideBar";

const Slider = () => {
  return (
    <div className="flex gap-6 justify-center">
      <div className="hidden border-r border-gray-300 xl:block">
        <SideBar />
      </div>
      <img src={SliderImage} alt="slider image" />
    </div>
  );
};

export default Slider;
