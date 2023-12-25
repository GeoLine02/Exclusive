type ProductType = {
  image: string;
  alt: string;
  title: string;
  price: number;
  sale?: string;
  oldPrice?: number;
};

const Product = ({ image, alt, title, price, sale, oldPrice }: ProductType) => {
  return (
    <div>
      <img className="relative" src={image} alt={alt} />
      <h3>{title}</h3>
      <div className="absolute top-1 left-1">{sale}</div>
      <div>
        <span>{price}</span>
        <span>{oldPrice}</span>
      </div>
    </div>
  );
};

export default Product;
