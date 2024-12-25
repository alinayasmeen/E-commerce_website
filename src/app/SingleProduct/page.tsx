import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
const SingleProduct = () => {
  return (
    <div className="xl:min-h-[1333px] sm:max-h-[1000px] my-10 bg-white">
      <div className="flex xl:flex-row flex-col mx-20 gap-[120px]">
        <div className="h-[615px]">
          <Image
            src="/img/Image10.png"
            alt="Pink Chair"
            width={580}
            height={600}
            className="rounded-[10px]"
          />
        </div>
        <div className="h-[615px]">
          <div className="absolute w-[441px] h-[132px] top-[800px] xl:top-[235px] font-inter text-[60px] font-bold leading-[66px] text-[rgba(39,35,67,1)]">
            Library Stool Chair
          </div>
          <div className="w-[120px] absolute  h-[42px] items-center pt-2 pl-3 rounded-3xl bg-[rgba(2,159,174,1)] top-[1000px] xl:top-[400px] font-inter text-[18px] font-semibold leading-[22px] text-white">
            $20.00 USD
          </div>
          <div className="absolute w-[423px] border-t h-[101px] pt-5 top-[1050px] xl:top-[468px] font-inter text-[rgba(39,35,67,1)] text-[22px] font-normal leading-[33px] opacity-[0.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </div>
          <Button className="w-[171px] h-[52px]   bg-[rgba(2,159,174,1)] absolute top-[1250px] xl:top-[640px]  p-[14px_24px] gap-[20px] rounded-tl-[8px]">
            <Image src="/Group.png" alt="Cart" width={29} height={29} />
            Add To cart
          </Button>
        </div>
      </div>
      <div className="flex justify-between mx-20 mb-10  items-center h-[35px]">
        <div className="font-inter text-[28px] font-bold text-black ">
          Featured Products
        </div>
        <div className="font-inter text-[18px] font-bold border-b-2 border-black text-black ">
          View all
        </div>
      </div>
      <div className="xl:flex xl:flex-row sm:grid sm:grid-cols-2 sm:grid-rows-2 flex-col mx-20 xl:gap-3 gap-[74px]">
        <div className="h-[307px] bg-white w-[242px]">
          <div
            style={{ backgroundImage: `url(/singleProduct/Image3.png)` }}
            className="h-[282px] shadow-lg hover:scale-110 w-[252px] rounded-[6px]"
          ></div>
          <div className="flex justify-between mt-[10px]">
            <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
              Library Stool Chair
            </div>
            <div className="font-inter font-semibold text-[18px] leading-[19.8px] text-right ml-16 text-[rgba(39,35,67,1)]">
              $90
            </div>
            <div></div>
          </div>
        </div>
        <div className="h-[307px]  bg-white w-[242px]">
          <div
            style={{ backgroundImage: `url(/singleProduct/Image8.png)` }}
            className="h-[282px] shadow-lg hover:scale-110 w-[242px] rounded-[6px]"
          ></div>
          <div className="flex justify-between mt-[10px]">
            <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
              Library Stool Chair
            </div>
            <div className="font-inter text-[18px] leading-[19.8px] font-semibold ml-16 text-right text-[rgba(39,35,67,1)]">
              $90
            </div>
            <div></div>
          </div>
        </div>
        <div className="h-[307px]  bg-white w-[242px]">
          <div
            style={{
              backgroundImage: `url(/singleProduct/item-category-3.png)`,
            }}
            className="h-[282px] hover:scale-110 shadow-lg w-[242px] rounded-[6px]"
          ></div>
          <div className="flex justify-between mt-[10px]">
            <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
              Library Stool Chair
            </div>
            <div className="font-inter text-[18px] leading-[19.8px] font-semibold ml-16 text-right text-[rgba(39,35,67,1)]">
              $90
            </div>
            <div></div>
          </div>
        </div>
        <div className="h-[307px]  bg-white w-[242px]">
          <div
            style={{ backgroundImage: `url(/singleProduct/Image_5.png)` }}
            className="h-[282px] hover:scale-110 shadow-lg w-[242px] rounded-[6px]"
          ></div>
          <div className="flex justify-between mt-[10px]">
            <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
              Library Stool Chair
            </div>
            <div className="font-inter text-[18px] leading-[19.8px] font-semibold ml-16 text-right text-[rgba(39,35,67,1)]">
              $90
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <div className="flex mt-10 mb-10 flex-col mx-20 sm:flex-row gap-10">
        <div className="h-[307px]  bg-white w-[242px]">
          <div
            style={{ backgroundImage: `url(/singleProduct/Image2.png)` }}
            className="h-[282px] hover:scale-110 shadow-lg w-[242px] rounded-[6px]"
          ></div>
          <div className="flex justify-between mt-[10px]">
            <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
              Library Stool Chair
            </div>
            <div className="font-inter text-[18px] leading-[19.8px] font-semibold ml-16 text-[rgba(39,35,67,1)]">
              $90
            </div>
            <div></div>
          </div>
        </div>
        <div className="h-[307px]  bg-white w-[242px]">
          <div
            style={{ backgroundImage: `url(/singleProduct/Image_8.png)` }}
            className="h-[282px] hover:scale-110 shadow-lg w-[242px] rounded-[6px]"
          ></div>
          <div className="flex justify-between mt-[10px]">
            <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
              Library Stool Chair
            </div>
            <div className="font-inter text-[18px] leading-[19.8px] ml-16 font-semibold text-[rgba(39,35,67,1)]">
              $90
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SingleProduct;
