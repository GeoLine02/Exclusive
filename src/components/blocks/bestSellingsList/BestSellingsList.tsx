import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import DiscountedItem from "../../FreshSales/DiscountedItem";

const BestSellingsList = () => {
  const bestSellings = useSelector(
    (state: RootState) => state.produts.bestSellings
  );
  return (
    <section className="mt-6 flex gap-4 whitespace-nowrap overflow-x-auto md:grid md:grid-cols-4">
      {bestSellings?.products.map((product) => (
        <DiscountedItem
          id={product.id}
          title={product.title}
          images={product.images}
          discountPercentage={product.discountPercentage}
          price={product.price}
          key={product.title}
        />
      ))}
    </section>
  );
};

export default BestSellingsList;
