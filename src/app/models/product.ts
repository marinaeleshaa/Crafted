export interface Product {
  id?: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  gallery?: string[];
  colors: string[];
  sizes?: string[];
  details: {
    title: string;
    description: string;
  }[];
}
