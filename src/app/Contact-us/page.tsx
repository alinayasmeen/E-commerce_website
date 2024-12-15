import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <div>
      <div className="h-[1300px] mx-20">
        <h2 className="font-poppins text-5xl flex justify-center mt-20 mb-10 items-center font-semibold leading-9 text-black">
          Get In Touch With Us
        </h2>
        <p className="font-poppins text-base font-normal leading-6 text-center opacity-60 text-gray-950">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us <br /> An Email. Our Staff Always Be There To Help You Out. Do
          Not Hesitate!
        </p>
        <div className="  flex justify-between ">
          <div className="m-10 justify-start">
            <div className=" flex gap-5 mt-10 flex-row">
              <div className="h-[28px] w-[22px] my-5">
                <Image src="/img/Vector.png" alt="alt" width={22} height={28} />
              </div>
              <div>
                <h4 className="font-poppins text-xl mt-5 font-semibold leading-9">
                  Address
                </h4>
                <div className="font-inter font-medium  w-auto  text-base">
                  236 5th SE Avenue, New <br /> York NY10000, United <br />{" "}
                  States
                </div>
              </div>
            </div>
            <div className=" flex gap-5 mt-10 flex-row">
              <div className="w-[22px] my-5 h-[28px]">
                <Image src="/img/phone.png" alt="alt" width={22} height={28} />
              </div>
              <div>
                <h4 className="font-poppins text-xl mt-5 font-semibold leading-9">
                  Phone
                </h4>
                <div className="font-inter font-medium  text-base">
                  Mobile: +(84) 546-6789
                  <br />
                  Hotline: +(84) 456-6789
                </div>
              </div>
            </div>
            <div className=" flex gap-5 mt-10 flex-row">
              <div className="h-[28px] w-[22px] my-5">
                <Image src="/img/clock.png" alt="alt" width={22} height={20} />
              </div>
              <div>
                <h4 className="font-poppins text-xl mt-5 font-semibold leading-9">
                  Working Time
                </h4>
                <div className="font-inter font-medium text-base">
                  Monday-Friday: 9:00 -
                  <br />
                  22:00
                  <br />
                  Saturday-Sunday: 9:00 -
                  <br />
                  21:00
                </div>
              </div>
            </div>
          </div>
          <div className="m-10 flex flex-col h-[741px] w-[532px] ">
            <div className="text-[16px] mt-10  leading-[24px] font-poppins  font-semibold">
              Your name
            </div>
            <div>
              <input
                placeholder="Abc"
                className="border rounded-[10px] font-poppins font-normal text-[16px] h-[75px] mt-5 w-[530px] items-center px-4"
              />
            </div>
            <div className="text-[16px] mt-10  leading-[24px] font-poppins  font-semibold">
              Email address
            </div>
            <div>
              <input
                placeholder="Abc@def.com"
                className="border h-[75px] font-poppins rounded-[10px] font-normal text-[16px] mt-5 w-[530px] items-center px-4"
              />
            </div>
            <div className="text-[16px] mt-10  leading-[24px] font-poppins  font-semibold">
              Subject
            </div>
            <div>
              <input
                placeholder="This is an optional"
                className="border h-[75px] mt-5 -[10px] rounded-[10px] font-normal text-[16px] w-[530px] items-center px-4"
              />
            </div>
            <div className="text-[16px] mt-10  leading-[24px] font-poppins  font-semibold">
              Message
            </div>
            <div>
              <input
                placeholder="Hi! i’d like to ask about"
                className="border h-[120px] mt-5 rounded-[10px] font-normal text-[16px] w-[530px] items-center px-4"
              />
            </div>
            <Button className="w-[237px] h-[55px] text-white mt-10 font-poppins text-[16px] font-normal leading-[24px] bg-[rgba(2,159,174,1)] p-[14px_24px] rounded-[1px]">
              Submit{" "}
            </Button>
          </div>
        </div>
        <div className="w-auto items-center h-[270px] absolute mt-3 top-[1347px] pt-[100px] pb-[100px] bg-[#f4f4f4]">
          <div className="flex flex-row gap-10 ">
            <div className="flex flex-row ml-14  gap-5">
              <div className="h-[60px] w-[60px] ">
                <Image
                  src="/img/Vector_4.png"
                  alt="alt"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h4 className="font-poppins text-2xl  font-semibold leading-9">
                  High Quality
                </h4>
                <div className="font-inter font-medium  w-auto opacity-60 text-xl">
                  crafted from top materials
                </div>
              </div>
            </div>
            <div className="flex flex-row ml-10  gap-5">
              <div className="h-[60px] w-[60px] ">
                <Image
                  src="/img/Vector_3.png"
                  alt="alt"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h4 className="font-poppins text-2xl  font-semibold leading-9">
                  Warranty Protection
                </h4>
                <div className="font-inter font-medium  opacity-60 w-auto  text-xl">
                  Over 2 years
                </div>
              </div>
            </div>
            <div className="flex flex-row mx-14 gap-5">
              <div className="h-[60px] w-[60px] ">
                <Image
                  src="/img/Vector_2.png"
                  alt="alt"
                  width={60}
                  height={60}
                />
              </div>
              <div>
                <h4 className="font-poppins text-2xl  font-semibold leading-9">
                  24 / 7 Support
                </h4>
                <div className="font-inter font-medium  opacity-60 w-auto  text-xl">
                  Dedicated support
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
