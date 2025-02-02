// 'use client'
// import React, { useState } from "react";
// import { Button } from "./ui/button";
// import Image from "next/image";
// import { client } from "@/lib/SanityClient";
// import { Image as IImage } from 'sanity';
// import { urlFor } from "@/sanity/lib/image";
// import Link from "next/link";
// import AddToCartButton from "./AddToCartButton";

// export const getProductData = async () => {
//   const res = await client.fetch(`*[_type == "product" && tags == 'featured' ] {
//     title,
//     price,
//     image,
//    "slug": slug.current,
//     _id,
//     quantity,
//     description
//   }`);
//   return res;
// }


// export interface IProduct {
//   title: string;
//   price: number;
//   image: IImage;
//   _id: string;
//   slug:string
//   quantity: number;
//   description:string;
// }


// const FeaturedProducts = () => {

//     const [data, setData] = useState<IProduct[]>([]);
    
//     const fetchData = async () => {
//            const res = await getProductData();
//               setData(res);
//     }
//     fetchData();
//   return (
//     <div className="xl:min-h-[571px] min-h-full mt-5 absolute mb-10 top-[1050px] mx-10 md:mx-28 sm::mx-20">
//       <div className="font-inter mt-10  md:ml-0  text-[32px] font-[550] text-indigo-950 ">
//         Featured Products
//       </div>
//       <div className="xl:grid xl:grid-rows-1 md:grid-cols-2 grid grid-cols-1 md:grid-rows-2 ml-auto lg:ml-10  xl:grid-cols-4  gap-3 mt-10">
        
//       {data.map((item) => {
//             return (
//         <div key={item._id} className="h-[367px]  bg-white w-[292px]">
//           <div
//           style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3 text-white"
//             >
//               New
//             </Button>
//           </div>
//           <div className="p-4 flex justify-between gap-auto h-full">
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
//         </div>
//             )})}
//         {/* <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image1.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3  bg-orange-500 text-white"
//             >
//               Sale
//             </Button>
//           </div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>

//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[420px]  mt-6 bg-slate-100"
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="h-[367px] bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image2.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           ></div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>
//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[420px] mt-7 bg-slate-100"
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image3.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           ></div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>
//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[420px] mt-7 bg-slate-100 "
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div> */}
//         </div>
//         {/* <div className="md:flex hidden lg:ml-10 xl:hidden md:flex-row gap-3 mt-10">
//         <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/img/item-category-3.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3 text-white"
//             >
//               New
//             </Button>
//           </div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-[rgba(0,117,128,1)]">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>

//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[420px] mt-6 bg-[rgba(2,159,174,1)]"
//               >
//                 <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image1.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3  bg-orange-500 text-white"
//             >
//               Sale
//             </Button>
//           </div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>

//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[420px]  mt-6 bg-slate-100"
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//            {data.map((item) => {
//             return (
//         <div key={item._id} className="h-[367px]  bg-white w-[292px]">
//           <div
//           style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3 text-white"
//             >
//               New
//             </Button>
//           </div>
//           <div className="p-4 flex justify-between gap-auto h-full">
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
//         </div>
//             )})}
//         </div> */}
//         {/* <div className="md:flex hidden lg:ml-10 xl:hidden md:flex-row gap-3 mt-10">
//         <div className="h-[367px] bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image2.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           ></div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>
//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[830px] mt-7 bg-slate-100"
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image3.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           ></div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>
//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[830px] mt-7 bg-slate-100 "
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//            {data.map((item) => {
//             return (
//         <div key={item._id} className="h-[367px]  bg-white w-[292px]">
//           <div
//           style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3 text-white"
//             >
//               New
//             </Button>
//           </div>
//           <div className="p-4 flex justify-between gap-auto h-full">
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
//         </div>
//             )})}
//         </div> */}
//         {/* <div className="flex md:hidden ml-0 sm:ml-20 flex-col gap-3 mt-10">
//         <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/img/item-category-3.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3 text-white"
//             >
//               New
//             </Button>
//           </div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-[rgba(0,117,128,1)]">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>

//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[420px] mt-6 bg-[rgba(2,159,174,1)]"
//               >
//                 <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image1.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3  bg-orange-500 text-white"
//             >
//               Sale
//             </Button>
//           </div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>

//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[800px]  mt-6 bg-slate-100"
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="h-[367px] bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image2.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           ></div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>
//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[1180px] mt-7 bg-slate-100"
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//         <div className="h-[367px]  bg-white w-[292px]">
//           <div
//             style={{ backgroundImage: `url(/Image3.png)` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           ></div>
//           <div className="flex flex-row gap-[114px] mt-[10px]">
//             <div>
//               <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
//                 Library Stool Chair
//               </div>
//               <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
//                 $20
//               </div>
//             </div>
//             <div>
//               <Button
//                 variant={"outline"}
//                 size={"sm"}
//                 className="top-[1560px] mt-7 bg-slate-100 "
//               >
//                 <Image
//                   src="/Group_1.png"
//                   alt="Cart"
//                   width={18.5}
//                   height={18.4}
//                 />
//               </Button>
//             </div>
//           </div>
//         </div>
//            {data.map((item) => {
//             return (
//         <div key={item._id} className="h-[367px]  bg-white w-[292px]">
//           <div
//           style={{ backgroundImage: `url(${urlFor(item.image).url()})` }}
//             className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
//           >
//             <Button
//               variant={"secondary"}
//               size={"lg"}
//               className="mt-3 ml-3 text-white"
//             >
//               New
//             </Button>
//           </div>
//           <div className="p-4 flex justify-between gap-auto h-full">
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
//         </div>
//             )})}
//         </div> */}
//     </div>
//   );
// };

// export default FeaturedProducts;

'use client';
import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import Image from 'next/image';
import { client } from '@/lib/SanityClient';
import { Image as IImage } from 'sanity';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';
import AddToCartButton from './AddToCartButton';

export const getProductData = async () => {
  const res = await client.fetch(
    `*[_type == "product"] {
      title,
      price,
      image,
      "slug": slug.current,
      _id,
      quantity,
      description
    }[0..3]`
  );
  return res;
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

const FeaturedProducts = () => {
  const [data, setData] = useState<IProduct[]>([]);

  // Use useEffect to fetch data after the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getProductData();
        setData(res);
      } catch (error) {
        console.error('Error fetching product data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this runs only once after the component mounts

  return (
    <div className="xl:min-h-[571px] min-h-full mt-5 absolute mb-10 top-[1050px] mx-10 md:mx-28 sm:mx-20">
      <div className="font-inter mt-10 md:ml-0 text-[32px] font-[550] text-indigo-950">
        Featured Products
      </div>
      <div className="xl:grid xl:grid-rows-1 md:grid-cols-2 xl:gap-6 grid grid-cols-1 md:grid-rows-2 ml-auto lg:ml-10 xl:grid-cols-4 gap-6 mt-10">
        {data.map((item) => (
          <div key={item._id} className="h-[367px] bg-white w-[292px]">
            <div
              style={{
                backgroundImage: `url(${urlFor(item.image).url()})`,
              }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            >
              <Button variant="secondary" size="lg" className="mt-3 ml-3 text-white">
                New
              </Button>
            </div>
            <div className="p-4 flex justify-between gap-auto h-full">
              <div>
                <Link
                  href={`/AllProducts/${item.slug}`}
                  className="font-inter hover:text-black hover:underline text-lg font-normal text-left text-[rgba(0,117,128,1)]"
                >
                  {item.title}
                </Link>
                <div className="font-inter text-xl mt-2 text-left text-[rgba(39,35,67,1)]">
                  ${item.price}
                </div>
              </div>
              <div className="justify-end flex">
                <AddToCartButton product={item}>
                  <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
                </AddToCartButton>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
