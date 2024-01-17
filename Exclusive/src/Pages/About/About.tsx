import AboutSideImage from "../../assets/About-Side-image.svg";
import Services from "../../components/Elements/Services/Services";
import Founders from "../../components/Elements/founders/Founders";
import founders from "../../constants/founders";
import services from "../../constants/services";
const About = () => {
  return (
    <div className="px-6 py-4">
      <p className="my-5 font-medium">
        <span className="text-gray-500">Home / </span> About
      </p>
      <div className=" flex flex-col gap-5 lg:flex lg:flex-row justify-between items-center mt-5">
        <div className="mt-5">
          <h1 className="text-6xl font-medium my-6">Our Story</h1>
          <p className="max-w-2xl">
            Launced in 2015, Exclusive is South Asia’s premier online shopping
            makterplace with an active presense in Bangladesh. Supported by wide
            range of tailored marketing, data and service solutions, Exclusive
            has 10,500 sallers and 300 brands and serves 3 millioons customers
            across the region. Exclusive has more than 1 Million products to
            offer, growing at a very fast. Exclusive offers a diverse assotment
            in categories ranging from consumer.
          </p>
        </div>
        <img src={AboutSideImage} alt="About side image" />
      </div>
      <div className="overflow-x-auto whitespace-nowrap lg:flex gap-4  mt-8 lg:justify-center overflow-y-hidden h-72 ">
        {services.map((service) => (
          <Services
            key={service.text}
            image={service.image}
            alt={service.alt}
            number={service.number}
            text={service.text}
          />
        ))}
      </div>
      <div className="md:flex md:flex-row flex flex-col items-center justify-center gap-4 mt-7">
        {founders.map((founder) => (
          <Founders
            key={founder.name}
            image={founder.image}
            alt={founder.alt}
            name={founder.name}
            position={founder.position}
          />
        ))}
      </div>
    </div>
  );
};

export default About;
