import Footer from "@/components/Footer";
import React from "react";
import Image from "next/image";
import Wrapper from "@/components/shared/page";

const Faqs = () => {
  return (
    <Wrapper>
      <div className="xl:min-h-[750px] h-full lg:mx-20">
        <div className="font-helvetica flex justify-center mt-10 text-[48px] font-bold leading-[56px] text-[#333333]">
          Questions Looks Here
        </div>
        <p className="font-inter flex justify-center lg:mx-0 mx-1 mt-5 font-normal text-[16px]  text-[#4F4F4F]">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
        <div className="w-full xl:h-[558px] mt-10 grid grid-rows-6 grid-cols-1 xl:grid-cols-2 xl:grid-rows-3 gap-5">
          <div className="bg-[#F7F7F7] h-auto sm:h-[170px] rounded-[8px]">
            <div className="flex justify-between h-[26px] mb-10 mt-5 mx-3">
              <div className="font-inter font-bold text-[18px]">
                What types of chairs do you offer?
              </div>
              <div className="h-6 w-6">
                <Image src="/Plus.png" alt="Plus" width={24} height={24} />
              </div>
            </div>
            <div className="font-inter font-normal text-[#4F4F4F] mt-5 mx-3 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </div>
          </div>
          <div className="bg-[#F7F7F7] h-auto sm:h-[170px] rounded-[8px]">
            <div className="flex justify-between h-[26px] mb-10 mt-5 mx-3">
              <div className="font-inter font-bold text-[18px]">
                Do your chairs come with a warranty?
              </div>
              <div className="h-6 w-6">
                <Image src="/Plus.png" alt="Plus" width={24} height={24} />
              </div>
            </div>
            <div className="font-inter font-normal text-[#4F4F4F] mt-5 mx-3 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </div>
          </div>
          <div className="bg-[#F7F7F7] h-auto sm:h-[170px] rounded-[8px]">
            <div className="flex justify-between h-[26px] mb-10 mt-5 mx-3">
              <div className="font-inter font-bold text-[18px]">
                Can I try a chair before purchasing?
              </div>
              <div className="h-6 w-6">
                <Image src="/Plus.png" alt="Plus" width={24} height={24} />
              </div>
            </div>
            <div className="font-inter font-normal text-[#4F4F4F] mt-5 mx-3 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </div>
          </div>
          <div className="bg-[#F7F7F7] h-auto sm:h-[170px] rounded-[8px]">
            <div className="flex justify-between h-[26px] mb-10 mt-5 mx-3">
              <div className="font-inter font-bold text-[18px]">
                How can we get in touch with you?
              </div>
              <div className="h-6 w-6">
                <Image src="/Plus.png" alt="Plus" width={24} height={24} />
              </div>
            </div>
            <div className="font-inter font-normal text-[#4F4F4F] mt-5 mx-3 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </div>
          </div>
          <div className="bg-[#F7F7F7] h-auto sm:h-[170px] rounded-[8px]">
            <div className="flex justify-between h-[26px] mb-10 mt-5 mx-3">
              <div className="font-inter font-bold text-[18px]">
                What will be delivered? And When?
              </div>
              <div className="h-6 w-6">
                <Image src="/Plus.png" alt="Plus" width={24} height={24} />
              </div>
            </div>
            <div className="font-inter font-normal text-[#4F4F4F] mt-5 mx-3 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </div>
          </div>
          <div className="bg-[#F7F7F7] h-auto sm:h-[170px] rounded-[8px]">
            <div className="flex justify-between h-[26px] mb-10 mt-5 mx-3">
              <div className="font-inter font-bold text-[18px]">
                How do I clean and maintain my Comforty chair?
              </div>
              <div className="h-6 w-6">
                <Image src="/Plus.png" alt="Plus" width={24} height={24} />
              </div>
            </div>
            <div className="font-inter font-normal text-[#4F4F4F] mt-5 mx-3 text-[16px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi quis
              modi ullam amet debitis libero veritatis enim repellat optio natus
              eum delectus deserunt, odit expedita eos molestiae ipsa totam
              quidem?
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Faqs;
