// src/lib/productData.ts
import { client } from "@/lib/SanityClient";
import { Image as IImage } from "sanity";

export interface IProduct {
  title: string;
  price: number;
  image: IImage;
  _id: string;
  description: string;
  quantity: number;
  qty: number;
  size: string;
}

export interface IItems {
  title: string;
  price: number;
  image: IImage;
  _id: string;
}

export const getProductData = async (slug: string): Promise<IProduct | null> => {
  const res = await client.fetch(`*[_type == "product" && slug.current == $slug] {
    title,
    price,
    image,
    description,
    _id,
    quantity
  }[0]`, { slug });
  return res || null;
};

export const GetProductData = async () => {
  const res = await client.fetch(`*[_type == 'product']{
     title,
     price,
     image, 
     _id
    }[0...4]`);
  return res;
};
