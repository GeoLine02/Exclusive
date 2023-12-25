type FoundersType = {
  image: string;
  alt: string;
  name: string;
  position: string;
};

const Founders = ({ image, name, position, alt }: FoundersType) => {
  return (
    <div>
      <img src={image} alt={alt} />
      <h2 className="text-xl font-medium">{name}</h2>
      <p>{position}</p>
    </div>
  );
};

export default Founders;
