import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { useEffect, useState } from "react";
import { fetchProductsData } from "../../features/productSlice/productSlice";
import AllProductList from "../blocks/allProductList/AllProductList";

const AllProductsComponent = () => {
  const [page, setPage] = useState<number>(0);
  const pages = [0, 1, 2, 3];
  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    dispatch(fetchProductsData(page));
  }, [dispatch, page]);
  return (
    <div className="max-w-screen-xl mx-auto">
      <div>
        <AllProductList />
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
