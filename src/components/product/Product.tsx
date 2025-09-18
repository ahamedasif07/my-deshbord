// best selling product
// data/products.ts
export interface Product {
  id: number;
  name: string;
  date: string;
  price: number;
  orders: number;
  stock: number;
  amount: number;
  status: "in-stock" | "out-of-stock";
}

export const products: Product[] = [
  {
    id: 1,
    name: "Branded T-Shirts",
    date: "24 Apr 2021",
    price: 29.0,
    orders: 62,
    stock: 510,
    amount: 1798,
    status: "in-stock",
  },
  {
    id: 2,
    name: "Bentwood Chair",
    date: "19 Mar 2021",
    price: 85.2,
    orders: 35,
    stock: 0,
    amount: 2982,
    status: "out-of-stock",
  },
  {
    id: 3,
    name: "Borosil Paper Cup",
    date: "01 Mar 2021",
    price: 14.0,
    orders: 80,
    stock: 749,
    amount: 1120,
    status: "in-stock",
  },
  {
    id: 4,
    name: "One Seater Sofa",
    date: "11 Feb 2021",
    price: 127.5,
    orders: 56,
    stock: 0,
    amount: 7140,
    status: "out-of-stock",
  },
  {
    id: 5,
    name: "Stillbird Helmet",
    date: "17 Jan 2021",
    price: 54,
    orders: 74,
    stock: 805,
    amount: 3996,
    status: "in-stock",
  },
];
