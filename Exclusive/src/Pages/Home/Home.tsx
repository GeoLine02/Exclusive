import Category from "../../components/Elements/Category/Category";
import FreshSales from "../../components/FreshSales/FreshSales";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div>
      <div>
        <Slider />
      </div>
      <div>
        <FreshSales />
      </div>
      <div>
        <Category />
      </div>
    </div>
  );
};

export default Home;
