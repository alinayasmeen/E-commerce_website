// 'use client';
// import React, { useEffect, useState } from "react";
// import { use } from "react";
// import Image from "next/image";
// import { urlFor } from "@/sanity/lib/image";
// import Footer from "@/components/Footer";
// import { client } from "@/lib/SanityClient";
// import { Image as IImage } from 'sanity';

// import AddToCartButton from "@/components/AddToCartButton";
 



// export const getProductData = async (slug: string): Promise<IProduct | null> => {
//   const res = await client.fetch(`*[_type == "product" && slug.current == $slug] {
//     title,
//     price,
//     image,
//     description,
//     _id,
//     quantity
//   }[0]`, { slug });
//   return res || null;
// };

// export const GetProductData = async () => {
//   const res = await client.fetch(`*[_type == 'product']{
//      title,
//      price,
//      image, 
//      _id
//     }[0...4]`);
//   return res;
// };

// interface IProduct {
//   title: string;
//   price: number;
//   image: IImage;
//   _id: string;
//   description: string;
//   quantity: number;
//   qty:number;
//   size:string;
// }

// interface IItems {
//   title: string;
//   price: number;
//   image: IImage;
//   _id: string;
// }

// const SingleProduct =  ({ params }: { params: Promise<{ slug: string }> }) => {
 
//   const { slug } = use(params); 
//   const [data, setData] = useState<IProduct | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [items, setItems] = useState<IItems[]>([]);


//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);
//         const res = await getProductData(slug); 
//         setData(res);
//         const featuredProducts = await GetProductData();
//         setItems(featuredProducts);
//       } catch (err) {
//         console.error(err);
//         setError("Failed to fetch product data. Please try again later.");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [slug]); 

//   if (loading) {
//     return <div className="text-center mt-20">Loading...</div>;
//   }else if (error) {
//     return <div className="text-center mt-20 text-red-500">{error}</div>;
//   }else{
// return (
//     <div className="xl:min-h-[1333px] sm:max-h-[1000px] my-10 bg-white">
//       <div className="flex xl:flex-row flex-col sm:mx-20 sm:gap-[120px]">
//         <div className="h-[615px]">
//           <Image
//             src={urlFor(data?.image).url()}
//             alt={data?.title || "Product image"}
//             width={580}
//             height={600}
//             className="rounded-[10px]"
//           />
//         </div>
//         <div className="h-[615px]">
//           <h1 className="absolute w-[441px] top-[800px] xl:top-[235px] text-[60px] font-bold">
//             {data?.title}
//           </h1>
//           <div className="absolute bg-[rgba(2,159,174,1)] text-white mt-5 font-semibold text-[18px] rounded-3xl w-[120px] h-[42px] top-[1000px] xl:top-[400px] flex items-center justify-center">
//             ${data?.price} USD
//           </div>
//           <p className="absolute top-[1050px] xl:top-[468px] text-[22px] opacity-60 border-t pt-5">
//             {data?.description}
//           </p>
//           <p className="absolute top-[1150px] xl:top-[568px] text-[22px] opacity-80 mt-10 border-t pt-5">
//             {data?.quantity} pieces in stock
//           </p>
//           <div className="flex absolute top-[1250px] xl:top-[648px] gap-5 flex-row">
         
        
//           </div>
//           <div className="top-[1250px] xl:top-[720px] absolute p-[14px_24px] gap-[20px] rounded-tl-[8px]">
//            <AddToCartButton product={data} >
//             Add to Cart
//             </AddToCartButton>
//             </div>
//          </div>
//       </div>

//       <div className="sm:mx-20 my-10">
//         <h2 className="font-bold text-[28px]">Featured Products</h2>
//         <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5">
//           {items.map((item) => (
//             <div key={item._id} className="bg-white shadow-md rounded-lg">
//               <div
//                 style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
//                 className="h-[282px] bg-cover rounded-t-lg"
//               />
//               <div className="p-4 flex justify-between">
//                 <span>{item.title}</span>
//                 <span>${item.price}</span>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// }
// };

// export default SingleProduct;


'use client';
import React, { useEffect, useState } from "react";
import { use } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Footer from "@/components/Footer";
import { client } from "@/lib/SanityClient";
import { Image as IImage } from 'sanity';
import AddToCartButton from "@/components/AddToCartButton";

// Remove export keyword from helper functions
const getProductData = async (slug: string): Promise<IProduct | null> => {
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

const GetProductData = async () => {
  const res = await client.fetch(`*[_type == 'product']{
     title,
     price,
     image, 
     _id
    }[0...4]`);
  return res;
};

interface IProduct {
  title: string;
  price: number;
  image: IImage;
  _id: string;
  description: string;
  quantity: number;
  qty: number;
  size: string;
}

interface IItems {
  title: string;
  price: number;
  image: IImage;
  _id: string;
}

const SingleProduct = ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = use(params);
  const [data, setData] = useState<IProduct | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [items, setItems] = useState<IItems[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        const res = await getProductData(slug);
        setData(res);
        const featuredProducts = await GetProductData();
        setItems(featuredProducts);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch product data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) {
    return <div className="text-center mt-20">Loading...</div>;
  } else if (error) {
    return <div className="text-center mt-20 text-red-500">{error}</div>;
  } else {
    return (
      <div className="xl:min-h-[1333px] sm:max-h-[1000px] my-10 bg-white">
        <div className="flex xl:flex-row flex-col sm:mx-20 sm:gap-[120px]">
          <div className="h-[615px]">
            <Image
              src={urlFor(data?.image).url()}
              alt={data?.title || "Product image"}
              width={580}
              height={600}
              className="rounded-[10px]"
            />
          </div>
          <div className="h-[615px]">
            <h1 className="absolute w-[441px] top-[800px] xl:top-[235px] text-[60px] font-bold">
              {data?.title}
            </h1>
            <div className="absolute bg-[rgba(2,159,174,1)] text-white mt-5 font-semibold text-[18px] rounded-3xl w-[120px] h-[42px] top-[1000px] xl:top-[400px] flex items-center justify-center">
              ${data?.price} USD
            </div>
            <p className="absolute top-[1050px] xl:top-[468px] text-[22px] opacity-60 border-t pt-5">
              {data?.description}
            </p>
            <p className="absolute top-[1150px] xl:top-[568px] text-[22px] opacity-80 mt-10 border-t pt-5">
              {data?.quantity} pieces in stock
            </p>
            <div className="flex absolute top-[1250px] xl:top-[648px] gap-5 flex-row">
              {/* Additional elements can be added here */}
            </div>
            <div className="top-[1250px] xl:top-[720px] absolute p-[14px_24px] gap-[20px] rounded-tl-[8px]">
              <AddToCartButton product={data}>
                Add to Cart
              </AddToCartButton>
            </div>
          </div>
        </div>

        <div className="sm:mx-20 my-10">
          <h2 className="font-bold text-[28px]">Featured Products</h2>
          <div className="grid xl:grid-cols-4 sm:grid-cols-2 gap-5">
            {items.map((item) => (
              <div key={item._id} className="bg-white shadow-md rounded-lg">
                <div
                  style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
                  className="h-[282px] bg-cover rounded-t-lg"
                />
                <div className="p-4 flex justify-between">
                  <span>{item.title}</span>
                  <span>${item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    );
  }
};

export default SingleProduct;
