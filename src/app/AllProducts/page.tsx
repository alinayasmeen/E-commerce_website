// 'use client';
// import React, { useEffect, useState } from "react";
// // import { Image as IImage } from 'sanity';
// // import { Button } from "@/components/ui/button";
// import Image from "next/image";
// import { productData } from "@/Products";
// import Footer from "@/components/Footer";
// // import { client } from "@/lib/SanityClient";
// // import { urlFor } from '../../sanity/lib/image';
// import {motion} from 'framer-motion';
// import  ProductCard from "@/components/productCard";
// // import Link from 'next/link';
// // import AddToCartButton from "@/components/AddToCartButton";


// // export const getProductData = async () => {
// //   const res = await client.fetch(`*[_type == "product" ] {
// //     title,
// //     price,
// //     image,
// //    "slug": slug.current,
// //     _id,
// //     quantity,
// //     description
// //   }`);
// //   return res;
// // }

// // export interface IProduct {
// //   title: string;
// //   price: number;
// //   image: IImage;
// //   _id: string;
// //   slug:string
// //   quantity: number;
// //   description:string;
// // }

// const AllProducts = () => {
//   // const [data, setData] = useState<IProduct[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         setLoading(true); // Show loader
//         setError(null); // Reset error state
//         // const res = await getProductData();
//         // setData(res);
//       } catch (err: unknown) {
//         console.error(err); // Log the error for debugging
//         setError("Failed to fetch products. Please try again later.");
//       } finally {
//         setLoading(false); // Hide loader
//       }
//     };

//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="text-center mt-20">Loading...</div>;
//   }

//   if (error) {
//     return <div className="text-center mt-20 text-red-500">{error}</div>;
//   }

//   const variant = {
//     hidden: { x:0, y:-10, opacity: 0 },
//     visible: { x:0, y:70, opacity: 1 , transition:{delay:0.5}},
//   }
//   return (
//     <div className="min-h-screen mt-10">
//       <div>
//         <h2 className="font-inter mx-5 xl:mx-20 flex flex-col gap-5 text-3xl font-semibold mb-0 leading-tight text-left text-gray-700">
//           All Products
//         </h2>
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 xl:mx-20 mb-10">
//           {/* {data.map((item) => {
//             return ( */}
//               <motion.div  initial="hidden" animate="visible" variants={variant} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
//               {/* <div key={item._id} className="bg-white rounded-lg mb-5 overflow-hidden shadow-md">
//                 <div
//                   style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
//                   className="h-64 bg-cover bg-center transition-transform duration-300 hover:scale-105 relative"
//                 >
//                   <Button
//                     variant={"secondary"}
//                     size={"lg"}
//                     className="mt-3 ml-3 text-white"
//                   >
//                     New
//                   </Button>
//                 </div>
//                 <div className="p-4 flex justify-between gap-auto h-full">
//                   <div>
//                     <Link href={`/AllProducts/${item.slug}`} className="font-inter hover:text-black hover:underline text-lg font-normal text-left text-[rgba(0,117,128,1)]">
//                       {item.title}
//                     </Link>
//                       <div className="font-inter text-xl mt-2 text-left text-[rgba(39,35,67,1)]">
//                       ${item.price}
//                     </div>
//                   </div>
//                   <div className="justify-end flex ">
                    
//                     <AddToCartButton product={item} >
//                       <Image
//                         src="/Group.png"
//                         alt="Cart"
//                         width={18.5}
//                         height={18.4}
//                       />
//                       </AddToCartButton>
                  
//                   </div>
//                 </div>
//               </div> */}
//               <ProductCard />
//               </motion.div>
//             {/* );
//           })} */}
//         </div>
//         <div className="h-[824px] mt-28 w-full hidden sm:block bg-gray-100 py-[80px]">
//           <div>
//             <h2 className="font-roboto w-[707px] sm:mx-20 xl:ml-72 text-[30px] sm:ml-52 sm:text-[40px] lg:text-[50px] flex justify-center font-medium text-black">
//               Or subscribe to the newsletter
//             </h2>
//           </div>
//           <div className="flex justify-center mx-20 mt-5 gap-5 flex-row items-center">
//             <input
//               type="email"
//               placeholder="Email Address..."
//               className="w-[643px] h-[50px] bg-gray-100 border-b-2 border-black font-roboto font-semibold text-[rgba(30, 40, 50, 0.5)] text-[16px] p-[10px]"
//             />
//             <button
//               type="submit"
//               className="h-[32px] mt-3 w-[91px] border-custom font-open-sans text-[16px] font-normal leading-[21.79px] text-center"
//             >
//               SUBMIT
//             </button>
//           </div>
//           <div className="flex justify-center gap-5 mx-20 ml-24 mt-10 w-auto">
//             <h2 className="font-roboto sm:text-[40px] text-[30px] lg:text-[50px] font-medium leading-[58.59px] text-center w-auto h-[59px] ">
//               Follow products and discounts on Instagram
//             </h2>
//           </div>
//           <div className="xl:mt-10 md:mt-20 ml-48 mr-28 mx-20 grid grid-cols-3 w-[450] grid-rows-2 gap-0 h-[450px]">
//             {productData.map((product) => (
//               <Image
//                 key={product.name}
//                 src={product.Image}
//                 alt={product.name}
//                 width={product.width}
//                 height={product.height}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </div>
//   );
// };

// export default AllProducts;              

'use client';

import React from "react";
import { motion } from "framer-motion";
import ProductCard from "@/components/productCard";
import NewsletterSubscription from '@/components/NewsletterSubscription';

const AllProducts = () => {
  const variant = {
    hidden: { x: 0, y: -10, opacity: 0 },
    visible: { x: 0, y: 70, opacity: 1, transition: { delay: 0.5 } },
  };

  return (
    <div className="min-h-screen mt-10">
      <h2 className="text-3xl font-semibold mb-5 text-gray-700 mx-5 xl:mx-20">All Products</h2>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={variant}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 mx-5 xl:mx-20"
      >
        <ProductCard />
      </motion.div>
      <NewsletterSubscription />
    </div>
  );
};

export default AllProducts;
