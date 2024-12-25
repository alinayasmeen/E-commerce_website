import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
const FeaturedProducts = () => {
  return (
    <div className="xl:min-h-[571px] min-h-full mt-5 absolute mb-10 top-[1050px] mx-10 md:mx-28 sm::mx-20">
      <div className="font-inter mt-10  md:ml-0  text-[32px] font-[550] text-indigo-950 ">
        Featured Products
      </div>
      <div className="xl:flex hidden xl:flex-row gap-3 mt-10">
        <div className="h-[367px]  bg-white w-[292px]">
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
                className="top-[420px] mt-6 bg-[rgba(2,159,174,1)]"
              >
                <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
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
                className="top-[420px]  mt-6 bg-slate-100"
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
                className="top-[420px] mt-7 bg-slate-100"
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
                className="top-[420px] mt-7 bg-slate-100 "
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
        <div className="md:flex hidden lg:ml-10 xl:hidden md:flex-row gap-3 mt-10">
        <div className="h-[367px]  bg-white w-[292px]">
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
                className="top-[420px] mt-6 bg-[rgba(2,159,174,1)]"
              >
                <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
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
                className="top-[420px]  mt-6 bg-slate-100"
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
        <div className="md:flex hidden lg:ml-10 xl:hidden md:flex-row gap-3 mt-10">
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
                className="top-[830px] mt-7 bg-slate-100"
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
                className="top-[830px] mt-7 bg-slate-100 "
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
        <div className="flex md:hidden ml-0 sm:ml-20 flex-col gap-3 mt-10">
        <div className="h-[367px]  bg-white w-[292px]">
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
                className="top-[420px] mt-6 bg-[rgba(2,159,174,1)]"
              >
                <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
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
                className="top-[800px]  mt-6 bg-slate-100"
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
                className="top-[1180px] mt-7 bg-slate-100"
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
                className="top-[1560px] mt-7 bg-slate-100 "
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
    </div>
  );
};

export default FeaturedProducts;
