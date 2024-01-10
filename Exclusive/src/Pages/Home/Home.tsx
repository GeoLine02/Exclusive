import BestSellings from "../../components/BestSellings/BestSellings";
import FreshSales from "../../components/FreshSales/FreshSales";
import NewArrival from "../../components/NewArrival/NewArrival";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="grid items-center justify-center">
        <Slider />
      </div>
      <div>
        <FreshSales />
      </div>
      <div>
        <BestSellings />
      </div>
      <div>
        <NewArrival />
      </div>
    </div>
  );
};

export default Home;
