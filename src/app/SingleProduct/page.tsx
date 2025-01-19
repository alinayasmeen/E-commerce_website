'use client'
import Footer from "@/components/Footer";
import Wrapper from "@/components/shared/page";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuRadioGroup, DropdownMenuRadioItem } from "@radix-ui/react-dropdown-menu";
import { PlusIcon, MinusIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
const SingleProduct = () => {
   const [size, setSize] = React.useState("small")
  return (
    <Wrapper>
    <div className="xl:min-h-[1333px] sm:max-h-[1000px] my-10 bg-white">
      <div className="flex xl:flex-row flex-col sm:mx-20 sm:gap-[120px]">
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
          <div className="absolute w-[423px] border-t h-[101px] pt-2 top-[1050px] xl:top-[458px] font-inter text-[rgba(39,35,67,1)] text-[22px] font-normal leading-[33px] opacity-[0.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </div>
          <p className="absolute top-[1150px] xl:top-[568px] text-[18px] pt-2 opacity-80 border-t mt-8">
          157 pieces in stock
          </p>
          <div className="flex absolute top-[1250px] xl:top-[648px] gap-5 flex-row">
           
           <div className="flex flex-row gap-5">
       <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">Select Size</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-5">
        <DropdownMenuLabel> Select Size</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={size} onValueChange={setSize}>
          <DropdownMenuRadioItem value="small">S</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="medium">M</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="large">L</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="extra_large">XL</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
          </div> 
        
         
          <div className="flex flex-row gap-5">
            <Button className=" bg-[rgba(2,159,174,1)] relative p-4 rounded">
              <PlusIcon/>
            </Button>
            <p className="relative text-[22px] opacity-80 ">
            0
          </p>
            <Button className=" bg-[rgba(2,159,174,1)] relative p-4 rounded">
              <MinusIcon/>
            </Button>
          </div>
          </div>
          <Button className="w-[171px] h-[52px] bg-[rgba(2,159,174,1)] absolute top-[1250px] xl:top-[720px]  p-[14px_24px] gap-[20px] rounded-tl-[8px]">
            <Image src="/Group.png" alt="Cart" width={29} height={29} />
            Add To cart
          </Button>
        </div>
      </div>
      <div className="flex justify-between sm:mx-20 mb-10  items-center h-[35px]">
        <div className="font-inter text-[28px] font-bold text-black ">
          Featured Products
        </div>
        <div className="font-inter text-[18px] font-bold border-b-2 border-black text-black ">
          View all
        </div>
      </div>
      <div className="xl:flex xl:flex-row sm:grid sm:grid-cols-2 sm:grid-rows-2 flex-col mx-20 xl:gap-3 gap-[80px]">
        <div className="h-[307px] my-5 sm:my-0 bg-white w-[242px]">
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
            <div>
            </div>
          </div>
        </div>
        <div className="h-[307px] my-5 sm:my-0 bg-white w-[242px]">
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
        <div className="h-[307px] my-5 sm:my-0 bg-white w-[242px]">
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
        <div className="h-[307px] my-5 sm:my-0 bg-white w-[242px]">
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
      <div className="flex sm:mt-10 mb-10 flex-col mx-20 sm:flex-row gap-10">
        <div className="h-[307px] my-5 sm:my-0 bg-white w-[242px]">
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
        <div className="h-[307px] my-5 sm:my-0 bg-white w-[242px]">
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
    </Wrapper>
  );
};

export default SingleProduct;
