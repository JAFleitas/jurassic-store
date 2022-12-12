export interface IBilling {
  _id: string;
  name: string;
  email: string;
  address: string;
  products: Array<{ _id: string; quantity: number }>;
  total: number;
}
