type CategoryListType = {
  image: string;
  alt: string;
  label: string;
};

const CategoryList = ({ image, alt, label }: CategoryListType) => {
  return (
    <div className=" flex flex-col items-center justify-center border-2 border-gray-400 rounded-md w-[170px] h-36 hover:bg-[#DB4444] hover:border-[#DB4444] hover:text-white">
      <img src={image} alt={alt} />
      <p>{label}</p>
    </div>
  );
};

export default CategoryList;
