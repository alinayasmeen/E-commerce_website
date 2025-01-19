import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <div>
      <div className="min-h-[1500px] mx-2 max-w-full lg:mx-20">
        <div className="flex flex-col  xl:flex-row mt-20 gap-10">
          <div className="xl:w-1/2 w-full sm:w-[70%] h-[450px] bg-[#007580]">
            <h1 className="font-inter text-[32px] font-bold mt-10 ml-10 leading-[38.73px] text-white">
              About Us - Comforty
            </h1>
            <p className="font-inter text-[18px] mt-3 ml-10 mr-16 font-normal leading-[21.78px] text-white">
              At Comforty, we believe that the right chair can transform your
              space and elevate your comfort. Specializing in ergonomic design,
              premium materials, and modern aesthetics, we craft chairs that
              seamlessly blend style with functionality.
            </p>
            <Button className="w-[179px] h-[56px] absolute top-[660px] rounded-none left-[124px] p-[16px_32px] gap-[10px] bg-[#F9F9F926]">
              <h6 className="font-inter text-[16px] font-normal leading-[24px] text-white">
                View collection
              </h6>
            </Button>
          </div>
          <div className=" contain h-[478px]">
            <Image
              src="/img/ImageBlock.png"
              alt="Chair"
              width={609}
              height={478}
            />
          </div>
        </div>
        <h2 className="text-[#272343] mt-0 sm:mt-10 flex justify-center font-inter font-semibold text-[32px]">
          What makes our Brand Different
        </h2>
        <div className="mt-10 xl:h-[244px] h-[916px] max-w-full grid xl:grid-cols-4 sm:grid-cols-1 sm:grid-rows-4 xl:grid-rows-1 gap-10">
          <div className="bg-[#F9F9F9]">
            <div className="m-10">
              <Image
                src="/Delivery.png"
                alt="Delivery"
                width={24}
                height={24}
              />
              <h3 className="font-inter mt-3 text-[20px] font-normal leading-[28px] text-[#007580]">
                Next day as standard
              </h3>
              <p className="font-inter mt-3 text-[16px] font-normal leading-[28px] text-[#007580]">
                Order before 3pm and get your order the next day as standard
              </p>
            </div>
          </div>
          <div className="bg-[#F9F9F9]">
            <div className="m-10">
              <Image
                src="/Checkmark--outline.png"
                alt="Delivery"
                width={24}
                height={24}
              />
              <h3 className="font-inter mt-3 text-[20px] font-normal leading-[28px] text-[#007580]">
                Made by true artisans
              </h3>
              <p className="font-inter mt-3 text-[16px] font-normal leading-[28px] text-[#007580]">
                Handmade crafted goods made with real passion and craftmanship
              </p>
            </div>
          </div>
          <div className="bg-[#F9F9F9]">
            <div className="m-10">
              <Image
                src="/Purchase.png"
                alt="Purchase"
                width={24}
                height={24}
              />
              <h3 className="font-inter mt-3 text-[20px] font-normal leading-[28px] text-[#007580]">
                Unbeatable prices
              </h3>
              <p className="font-inter mt-3 text-[16px] font-normal leading-[28px] text-[#007580]">
                For our materials and quality you won’t find better prices
                anywhere
              </p>
            </div>
          </div>
          <div className="bg-[#F9F9F9]">
            <div className="m-10">
              <Image src="/Sprout.png" alt="Sprout" width={24} height={24} />
              <h3 className="font-inter mt-3 text-[20px] font-normal leading-[28px] text-[#007580]">
                Recycled packaging
              </h3>
              <p className="font-inter mt-3 text-[16px] font-normal leading-[28px] text-[#007580]">
                We use 100% recycled to ensure our footprint is more manageable
              </p>
            </div>
          </div>
        </div>
        <h2 className="text-[#272343] mt-14 sm:mt-10 font-inter font-semibold text-[32px]">
          Our Popular Products
        </h2>
        <div className="flex flex-row gap-5 mt-10">
          <div>
            <Image src="/Large.png" alt="Large" width={620} height={375} />
            <h3 className="font-inter mt-5 font-normal text-xl text-[#2A254B]">
              The Poplar suede sofa
            </h3>
            <h3 className="font-inter font-normal text-lg text-[#2A254B]">
              $99.00
            </h3>
          </div>
          <div className="hidden xl:block">
            <Image src="/Parent1.png" alt="Parent" width={300} height={375} />
            <h3 className="font-inter mt-5 font-normal text-xl text-[#2A254B]">
              The Dandy chair
            </h3>
            <h3 className="font-inter font-normal text-lg text-[#2A254B]">
              $99.00
            </h3>
          </div>
          <div className="hidden xl:block">
            <Image src="/Parent.png" alt="Parent" width={300} height={375} />
            <h3 className="font-inter mt-5 font-normal text-xl text-[#2A254B]">
              The Dandy chair
            </h3>
            <h3 className="font-inter font-normal text-lg text-[#2A254B]">
              $99.00
            </h3>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-5 mt-10">
        <div className="xl:hidden">
            <Image src="/Parent1.png" alt="Parent" width={300} height={375} />
            <h3 className="font-inter mt-5 font-normal text-xl text-[#2A254B]">
              The Dandy chair
            </h3>
            <h3 className="font-inter font-normal text-lg text-[#2A254B]">
              $99.00
            </h3>
          </div>
          <div className=" xl:hidden">
            <Image src="/Parent.png" alt="Parent" width={300} height={375} />
            <h3 className="font-inter mt-5 font-normal text-xl text-[#2A254B]">
              The Dandy chair
            </h3>
            <h3 className="font-inter font-normal text-lg text-[#2A254B]">
              $99.00
            </h3>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
