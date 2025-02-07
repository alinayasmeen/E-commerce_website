'use client';

import React, { useEffect, useState } from "react";
import { Image as IImage } from 'sanity';
import { Button } from "@/components/ui/button";
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import AddToCartButton from "@/components/AddToCartButton";
import { client } from "@/lib/SanityClient";
import Image from "next/image";


export const getProductData = async () => {
  return client.fetch(`*[_type == "product"] {
    title,
    price,
    image,
    "slug": slug.current,
    _id,
    quantity,
    description
  }`);
};

export interface IProduct {
  title: string;
  price: number;
  image: IImage;
  _id: string;
  slug: string;
  quantity: number;
  description: string;
}

const ProductCard = () => {
  const [data, setData] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductData();
        setData(res);
      } catch (error) {
        console.error("Error fetching product data:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (data.length === 0) {
    return <div>No products available.</div>;
  }

  return (
    <>
      {data.map((item) => (
        <div key={item._id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div
            className="h-64 bg-cover bg-center transition-transform duration-300 hover:scale-105 relative"
            style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
            aria-label={item.title}
          >
            <Button variant="secondary" size="lg" className="mt-3 ml-3 text-white">
              New
            </Button>
          </div>
          <div className="p-4 flex justify-between">
            <div>
              <Link
                href={`/AllProducts/${item.slug}`}
                className="text-lg font-normal text-[rgba(0,117,128,1)] hover:underline"
              >
                {item.title}
              </Link>
              <div className="text-xl mt-2 text-[rgba(39,35,67,1)]">${item.price}</div>
            </div>
            <div>
              <AddToCartButton product={item}>
                <Image src="/Group.png" alt="Add to Cart" width={18.5} height={18.4} />
              </AddToCartButton>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProductCard;
