import BestSellings from "../../components/BestSellings/BestSellings";
import FreshSales from "../../components/FreshSales/FreshSales";
import NewArrival from "../../components/NewArrival/NewArrival";

const Home = () => {
  return (
    <div>
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
