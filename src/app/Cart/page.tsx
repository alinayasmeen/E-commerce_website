import React from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";

const Cart = () => {
  return (
    <div>
      <div className="xl:min-h-[835px] h-[1000px] bg-white flex flex-row gap-20">
        <div className="h-[547.89px] mx-20 w-[733.33px]">
          <div className="flex flex-col xl:justify-between mt-0 ">
            <div>
              <h1 className="font-inter mt-10 font-medium text-[22px] text-black">
                Bag
              </h1>
              <div className="h-[211px] my-10 w-[80%] xl:w-[783px] gap-5 flex flex-row">
                <div>
                  <Image
                    src="/image2.png"
                    alt="Orange Chair"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="h-[200px] w-[550px]">
                  <div className=" flex justify-between items-center h-[28px]">
                    <div className="h-[200px]">
                      <div className="font-inter text-[16px] mt-[83px] font-normal leading-[20.8px] text-[rgba(39,35,67,1)]">
                        Library Stool Chair
                      </div>
                      <p className="font-inter text-[15px] mt-5 font-normal leading-[28px] text-gray-600">
                        Ashen Slate/Cobalt Bliss
                      </p>
                      <div className="flex flex-row mt-3 gap-10">
                        <p className="font-inter text-[15px] font-normal leading-[28px] text-gray-600">
                          Size {"   "} L
                        </p>
                        <p className="font-inter text-[15px] font-normal leading-[28px] text-gray-600">
                          Quantity {"   "} 1
                        </p>
                      </div>
                      <div className="flex flex-row mt-[72px] gap-10">
                        <Image
                          src="/img/Frame.png"
                          alt="Wishlist"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/img/Frame1.png"
                          alt="Dustbin"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                    <p className="font-inter text-[15px] font-medium leading-[28px]">
                      MRP: $99
                    </p>
                  </div>
                </div>
              </div>
              <div className="h-[281px] py-10 border-y w-[80%] xl:w-[783px] gap-5 flex flex-row">
                <div>
                  <Image
                    src="/singleProduct/Frame.png"
                    alt="Orange Chair"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="h-[200px] w-[550px]">
                  <div className=" flex justify-between items-center h-[28px]">
                    <div className="h-[200px]">
                      <div className="font-inter text-[16px] mt-[83px] font-normal leading-[20.8px] text-[rgba(39,35,67,1)]">
                        Library Stool Chair
                      </div>
                      <p className="font-inter text-[15px] mt-5 font-normal leading-[28px] text-gray-600">
                        Ashen Slate/Cobalt Bliss
                      </p>
                      <div className="flex flex-row mt-3 gap-10">
                        <p className="font-inter text-[15px] font-normal leading-[28px] text-gray-600">
                          Size {"   "} L
                        </p>
                        <p className="font-inter text-[15px] font-normal leading-[28px] text-gray-600">
                          Quantity {"   "} 1
                        </p>
                      </div>
                      <div className="flex flex-row mt-[72px] gap-10">
                        <Image
                          src="/img/Frame.png"
                          alt="Wishlist"
                          width={24}
                          height={24}
                        />
                        <Image
                          src="/img/Frame1.png"
                          alt="Dustbin"
                          width={24}
                          height={24}
                        />
                      </div>
                    </div>
                    <p className="font-inter text-[15px] mt-0 font-medium leading-[28px]">
                      MRP: $99
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-[300px] ml-16 mt-14 w-[350ppx]">
              <h3 className="font-inter text-xl font-medium leading-8 text-gray-900">
                Summary
              </h3>
              <div className="flex justify-between mt-5 h-[28px] w-[335px] items-center">
                <p className="font-inter text-sm font-normal leading-7 text-gray-900">
                  Subtotal
                </p>
                <span className="font-inter text-xs font-medium leading-6 text-gray-900">
                  $198.00
                </span>
              </div>
              <div className="flex justify-between mt-3 h-[28px] w-[335px] items-center">
                <p className="font-inter text-sm font-normal leading-7 text-gray-900">
                  Estimated Delivery & Handling
                </p>
                <span className="font-inter text-xs font-medium leading-6 text-gray-900">
                  Free
                </span>
              </div>
              <div className="flex justify-between mt-4 border-y py-8 h-[28px] w-[335px] items-center">
                <p className="font-inter text-sm font-normal leading-7 text-gray-900">
                  Total
                </p>
                <span className="font-inter text-xs font-medium leading-6 text-gray-900">
                  $198.00
                </span>
              </div>
              <Button className="w-[335px] h-[60px] mt-5 px-[101px] py-[18px] bg-[rgba(2,159,174,1)] font-inter font-medium text-[15px] items-center">
                Member Checkout
              </Button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
