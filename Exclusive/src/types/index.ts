export type UserType = {
  email: string;
  userName?: string;
  password: string;
};

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
  discription: string;
};
