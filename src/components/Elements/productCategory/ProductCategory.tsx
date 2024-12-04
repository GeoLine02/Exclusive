interface IProductCategory {
  productCategory: string;
}

const ProductCategory = ({ productCategory }: IProductCategory) => {
  return <li className="my-4">{productCategory}</li>;
};

export default ProductCategory;
