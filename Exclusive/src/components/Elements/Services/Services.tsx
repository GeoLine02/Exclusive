type ServicesType = {
  image: string;
  alt: string;
  number: number;
  text: string;
};

const Services = ({ image, alt, number, text }: ServicesType) => {
  return (
    <div className="inline-block mr-2 mt-10 lg:hover:scale-125 duration-500">
      <div className="flex flex-col justify-center items-center gap-4 border-2 border-gray-400 rounded-md w-[200px] py-3">
        <img src={image} alt={alt} />
        <h1 className="text-3xl font-bold">{number}k</h1>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Services;
