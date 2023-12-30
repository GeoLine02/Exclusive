import SliderImage from "../../assets/slider-img.png";

const Slider = () => {
  return (
    <section>
      <div className="flex gap-4 mt-4">
        <ul className=" md:grid gap-1 py-3 pr-3  border-r-2 border-r-gray-100 hidden ">
          <li>Woman's Fashion</li>
          <li>Men's Fashion</li>
          <li>Electronics</li>
          <li>Home & Lifestyle</li>
          <li>Medicine</li>
          <li>Sports & Outdoor</li>
          <li>Baby's & Toys</li>
          <li>Groceries & Pets</li>
          <li>Helath & Beauty</li>
        </ul>
        <img src={SliderImage} />
      </div>
    </section>
  );
};

export default Slider;
