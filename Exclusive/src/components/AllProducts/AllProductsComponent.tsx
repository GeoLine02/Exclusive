import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { useEffect, useState } from "react";
import { fetchProductsData } from "../../features/productSlice/productSlice";
import DiscountedItem from "../FreshSales/DiscountedItem";

const AllProductsComponent = () => {
  const [page, setPage] = useState<number>(0);
  const pages = [0, 1, 2, 3];
  const products = useSelector((state: RootState) => state.produts.products);
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductsData(page));
  }, [dispatch, page]);
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center">
        {products?.products.map((item) => (
          <DiscountedItem
            id={item.id}
            title={item.title}
            images={item.images}
            price={item.price}
            key={item.title}
          />
        ))}
      </div>
      <div className="flex justify-center gap-2 items-center">
        {pages.map((page, index) => (
          <button
            key={index}
            onClick={() => {
              setPage(page);
            }}
            className="bg-[#DB4444] w-10 h-10 text-white my-6"
          >
            {page}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AllProductsComponent;
