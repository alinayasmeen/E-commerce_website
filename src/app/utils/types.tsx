import { StaticImageData } from "next/image";
import { Image as IImage } from 'sanity';

export type Product = {
    _id: string;
    title: string;
    description: string;
    price: number;
    image: StaticImageData | IImage [];
    slug: string;
    size: string;
    quantity: number;
    category: string;
    countInStock: number;
}



export type Cart = {
    _id: string;
    title: string;
    price: number;
    image: StaticImageData | IImage ;
    slug: string;
    size: string;
    quantity: number;
    category: string;
    countInStock: number
}