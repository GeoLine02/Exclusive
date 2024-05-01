import { useDispatch, useSelector } from "react-redux";
import DiscountedItem from "./DiscountedItem";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect } from "react";
import { fetchSales } from "../../features/productSlice/productSlice";
import Timer from "./Timer";

const FreshSales = () => {
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchSales());
  }, [dispatch]);

  const sales = useSelector((state: RootState) => state.produts.sales);

  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 3);

  return (
    <section className="px-6 py-4 max-w-screen-xl w-full mx-auto">
      <div className="flex gap-2">
        <span className="h-8 w-4 bg-[#DB4444] rounded-md"></span>
        <p className="text-[#DB4444] font-bold">Today's</p>
      </div>
      <div className="md:flex gap-9 items-center">
        <h1 className="text-4xl">Flash Sales</h1>
        <div>
          <Timer expirationDate={expirationDate} />
        </div>
      </div>
      <div className="flex whitespace-nowrap gap-4 overflow-x-auto md:grid md:grid-cols-4 mt-5 ">
        {sales?.products?.map((state) => (
          <DiscountedItem
            id={state.id}
            title={state.title}
            images={state.images}
            discountPercentage={state.discountPercentage}
            price={state.price}
            key={state.title}
          />
        ))}
      </div>
    </section>
  );
};

export default FreshSales;
