"use  client";
import React from "react";

import { Button } from "@/components/ui/button";
import Image from "next/image";
// import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/css';
// import { Autoplay } from "swiper/modules";
import { productData } from "@/Products";
import Footer from "@/components/Footer";
//import  { createContext} from 'react';

const AllProducts = () => {
  return (
    <div className=" min-h-[2885px] xl:min-h-[2000px] mt-10 ">
      <div>
        <h2 className="font-inter sm:mx-0 mx-5 xl:mx-20 flex flex-col gap-5 text-3xl font-semibold mb-16 leading-tight text-left text-gray-700">
          AllProducts
        </h2>
        <div className="xl:flex sm:grid sm:mx-0 mx-5 sm:grid-cols-2 sm:grid-rows-2 sm:gap-10 xl:gap-3 flex flex-col xl:h-[461px] xl:mx-20 xl:flex-row gap-3 mt-14">
          <div className="h-[367px] bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/img/item-category-3.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className="mt-3 ml-3 text-white"
              >
                New
              </Button>
            </div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-[rgba(0,117,128,1)]">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>

              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="top-[420px]  mt-[250px] bg-[rgba(2,159,174,1)]"
                >
                  <Image
                    src="/Group.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px]  bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image1.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className="mt-3 ml-3  bg-orange-500 text-white"
              >
                Sale
              </Button>
            </div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>

              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="top-[420px] mt-[630px] sm:mt-[250px] bg-slate-100"
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px] bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image2.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            ></div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>
              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="top-[420px] mt-[998px] xl:mt-[250px] sm:mt-[650px] bg-slate-100"
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px]  bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image3.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            ></div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>
              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="top-[420px] mt-[1390px] sm:mt-[650px] xl:mt-[250px] bg-slate-100 "
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex sm:mx-0 mx-5 xl:h-[461px] flex flex-col xl:mx-20 xl:gap-3 sm:grid sm:grid-cols-2 sm:grid-rows-2  sm:gap-10 xl:flex-row gap-3 mt-14">
          <div className="h-[367px] bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(Image6.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className="mt-3 ml-3 text-white"
              >
                New
              </Button>
            </div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-[rgba(0,117,128,1)]">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>

              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="xl:mt-[860px] mt-[1900px] sm:mt-[1170px] bg-[rgba(2,159,174,1)]"
                >
                  <Image
                    src="/Group.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px]  bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/img/item-category-2.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className="mt-3 ml-3  bg-orange-500 text-white"
              >
                Sale
              </Button>
            </div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>

              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="sm:mt-[1170px] mt-[2280px] xl:mt-[860px] bg-slate-100"
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px] bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image8.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            ></div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>
              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="sm:mt-[1570px] mt-[2660px] xl:mt-[860px] bg-slate-100"
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px]  bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/img/item-category-3.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            ></div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>
              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="sm:mt-[1570px] mt-[3030px] xl:mt-[860px] bg-slate-100 "
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="xl:flex xl:h-[461px] sm:mx-0 mx-5 sm:grid xl:gap-3 sm:grid-cols-2 sm:grid-rows-2 sm:gap-10  xl:mx-20 xl:flex-row gap-3 mt-14">
          <div className="h-[367px] bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image_8.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className="mt-3 ml-3 text-white"
              >
                New
              </Button>
            </div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-[rgba(0,117,128,1)]">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>

              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="sm:mt-[2000px] mt-[3450px] xl:mt-[1375px] bg-[rgba(2,159,174,1)]"
                >
                  <Image
                    src="/Group.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px] mt-2 sm:mt-0 bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image1.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            >
              <Button
                variant={"secondary"}
                size={"lg"}
                className="mt-3 ml-3  bg-orange-500 text-white"
              >
                Sale
              </Button>
            </div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>

              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="sm:mt-[2000px] mt-[3830px] xl:mt-[1375px] bg-slate-100"
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px] bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image2.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            ></div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>
              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="sm:mt-[2405px] mt-[4200px] xl:mt-[1375px] bg-slate-100"
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="h-[367px] mt-2 sm:mt-0 bg-white w-[292px]">
            <div
              style={{ backgroundImage: `url(/Image_5.png)` }}
              className="h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]"
            ></div>
            <div className="flex flex-row gap-[114px] mt-[10px]">
              <div>
                <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                  Library Stool Chair
                </div>
                <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                  $20
                </div>
              </div>
              <div>
                <Button
                  variant={"outline"}
                  size={"sm"}
                  className="sm:mt-[2405px] mt-[4570px] xl:mt-[1375px] bg-slate-100 "
                >
                  <Image
                    src="/Group_1.png"
                    alt="Cart"
                    width={18.5}
                    height={18.4}
                  />
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="h-[824px] mt-30 w-full hidden sm:block bg-gray-100 py-[80px] top-[1400px]">
        <div>
          <h2 className="font-roboto w-[707px] sm:mx-20 xl:ml-72 text-[30px] sm:ml-52 sm:text-[40px] lg:text-[50px] flex justify-center font-medium text-black">
            Or subscribe to the newsletter
          </h2>
        </div>
        <div className="flex justify-center mx-20 mt-5 gap-5 flex-row items-center">
          <input
            type="email"
            placeholder="Email Address..."
            className="w-[643px] h-[50px] bg-gray-100 border-b-2 border-black font-roboto font-semibold text-[rgba(30, 40, 50, 0.5)] text-[16px] p-[10px]"
          />
          <button
            type="submit"
            className="h-[32px] mt-3 w-[91px] border-custom font-open-sans text-[16px] font-normal leading-[21.79px] text-center"
          >
            SUBMIT
          </button>
        </div>
        <div className="flex justify-center gap-5 mx-20 ml-24 mt-10 w-auto">
          <h2 className="font-roboto sm:text-[40px] text-[30px] lg:text-[50px] font-medium leading-[58.59px] text-center w-auto h-[59px] ">
            Follow products and discounts on Instagram
          </h2>
        </div>
        <div className="xl:mt-10 md:mt-20 ml-48 mr-28 mx-20 grid grid-cols-3 w-[450] grid-rows-2 gap-0 h-[450px]">
          {/* <div>
                  <Image src="/img/Image_1.png" alt="Chair1" width={200} height={200} />
                </div>
                <div>
                <Image src="/Image2.png" alt="Chair2" width={200} height={200} />
                </div>
                <div>
                <Image src="/img/Image3.png" alt="Chair3" width={200} height={200} />
                </div>
                <div>
                <Image src="/img/Image4.png" alt="Chair4" width={200} height={200} />
                </div>
                <div>
                <Image src="/Image5.png" alt="Chair5" width={200} height={200} />
                </div>
                <div>
                <Image src="/img/Card.png" alt="Chair6" width={200} height={200} />
                </div> */}
          {/* <Swiper
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          speed={5000}
          modules={[Autoplay]}
          className="max-w-[80%]"
        > */}
          {productData.map((product) => (
            // <SwiperSlide key={index}>

            <Image
              key={product.name}
              src={product.Image}
              alt={product.name}
              width={product.width}
              height={product.height}
            />
            // </SwiperSlide>
          ))}
          {/* </Swiper> */}
        </div>
        </div>
      </div>
      
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default AllProducts;
