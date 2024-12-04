export type ProductsType = {
    id: number;
    title: string;
    images: string[];
    discountPercentage: number;
    price: number;
    category: string;
  };
  
  export type ProductDetailsType = ProductsType & {
    brand: string;
    stock: number;
    description: string;
  };