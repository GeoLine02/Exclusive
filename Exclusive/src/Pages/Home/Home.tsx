import FreshSales from "../../components/FreshSales/FreshSales";
import NewArrival from "../../components/NewArrival/NewArrival";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <div className="grid items-center justify-center">
        <Slider />
      </div>
      <NewArrival />
      <div>
        <FreshSales />
      </div>
    </div>
  );
};

export default Home;
