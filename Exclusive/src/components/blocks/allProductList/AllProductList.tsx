import { useSelector } from "react-redux";
import DiscountedItem from "../../FreshSales/DiscountedItem";
import { RootState } from "../../../store/store";
import CardLoader from "../../../shared/CardLoader";

interface IAllProductsListProps {
  isLoading: boolean;
}

const AllProductList = ({ isLoading }: IAllProductsListProps) => {
  const products = useSelector((state: RootState) => state.produts.products);
  const loaderCards = Array(12).fill(true);
  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
      {isLoading &&
        loaderCards.map((_card, index) => <CardLoader key={index} />)}
      {!isLoading &&
        products?.products.map((item) => (
          <DiscountedItem
            id={item.id}
            title={item.title}
            images={item.images}
            price={item.price}
            key={item.title}
          />
        ))}
    </section>
  );
};

export default AllProductList;
