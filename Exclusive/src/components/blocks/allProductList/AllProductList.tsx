import { useSelector } from "react-redux";
import DiscountedItem from "../../FreshSales/DiscountedItem";
import { RootState } from "../../../store/store";

const AllProductList = () => {
  const products = useSelector((state: RootState) => state.produts.products);

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
      {products?.products.map((item) => (
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
