import fakeProductCategoryData from "../../../data/fakeProductCategoryData";
import ProductCategory from "../../Elements/productCategory/ProductCategory";

const ProductCategoryList = () => {
  return (
    <ul className="flex justify-between gap-4 py-3 pr-3 xl:border-r-2 xl:border-r-gray-100 xl:block">
      {fakeProductCategoryData.map((item) => (
        <ProductCategory key={item.id} productCategory={item.category} />
      ))}
    </ul>
  );
};

export default ProductCategoryList;
