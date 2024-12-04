import BestSellings from "../../components/BestSellings/BestSellings";
import FreshSales from "../../components/FreshSales/FreshSales";
import NewArrival from "../../components/NewArrival/NewArrival";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
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
