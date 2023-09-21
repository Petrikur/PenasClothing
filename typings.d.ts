// type Product = {
//     _id: string;
//     title: string;
//     description: string;
//     price: number;
//     category: string;
//     brand: string;
//     imageUrl: string;
//     stockQuantity: number;
//   };

export type Rating = {
  rate: number;
  count: number;
};

export type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  image: string;
  rating: Rating;
};
