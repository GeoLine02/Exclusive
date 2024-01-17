import PlayStation from "../../assets/playstation.png";
import Perfume from "../../assets/perfume.png";
import WoomenColletions from "../../assets/woomen-colletions.png";
import Speakers from "../../assets/speakers.png";

const NewArrival = () => {
  return (
    <section className="mt-9 px-6 py-4">
      <div>
        <div className="flex gap-3 items-center">
          <span className="bg-[#DB4444] h-8 w-4 rounded-md "></span>
          <p className="text-[#DB4444] font-bold">Featured</p>
        </div>
        <h1 className="text-3xl">New Arrival</h1>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 items-center justify-center my-5">
        <img src={PlayStation} alt="PlayStation" />
        <div className="flex flex-col gap-3 items-center">
          <img src={WoomenColletions} alt="woomen's colletions" />
          <div className="flex justify-center gap-2">
            <img className="w-[45%] h-auto" src={Speakers} alt="Speakers" />
            <img className="w-[45%]" src={Perfume} alt="Perfume" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewArrival;
