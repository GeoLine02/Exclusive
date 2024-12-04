import CategoryList from "./CategoryList";
import categories from "../../../constants/categories";
const Category = () => {
  return (
    <div className="grid items-center justify-between">
      <div className="flex gap-2 items-center">
        <span className="h-8 w-4 rounded-md bg-[#DB4444]"></span>
        <span className="text-[#DB4444] font-bold">Categories</span>
      </div>
      <h1 className="text-3xl">Browse By Category</h1>
      <div className="flex w-screen justify-between mt-5">
        {categories.map((category) => (
          <CategoryList
            image={category.image}
            alt={category.alt}
            label={category.label}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
