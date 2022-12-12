export interface IProduct {
  _id: string;
  name: string;
  description: string;
  images: string[];
  stock: number;
  price: number;
  slug: string;
  tags: string[];
}
export interface ICartProduct {
  _id: string;
  image: string;
  price: number;
  slug: string;
  name: string;
  quantity: number;
}
