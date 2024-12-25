import React from "react";
import Image from "next/image";
const CompanyLogo = () => {
  return (
    <div>
      <div className=" xl:w-[1181px] md:h-[139px] sm:w-full lg:mx-[10%] lg:w-[80%] xl:m-20 hidden absolute top-[907px] md:mx-0 sm:flex sm:justify-between">
        <Image
          src="/Logo.png"
          alt="alt"
          width={95}
          height={97}
          className="sm:w-[70px] sm:mt-6 sm:h-[70px]"
        />
        <Image src="/Logo1.png" alt="alt" width={95} height={100} />
        <Image src="/Logo2.png" alt="alt" width={105} height={109} />
        <Image src="/Logo3.png" alt="alt" width={53} height={35} />
        <Image src="/Logo4.png" alt="alt" width={88} height={81} />
        <Image src="/Logo5.png" alt="alt" width={103} height={105} />
        <Image src="/Logo6.png" alt="alt" width={54} height={57} />
      </div>
      <div className="sm:hidden absolute mx-10 gap-3 top-[907px] grid grid-cols-4 grid-rows-2 ">
        <Image src="/Logo.png" alt="alt" width={95} height={97} className="sm:w-[70px] sm:mt-8 sm:h-[70px]"/>
        <Image src="/Logo1.png" alt="alt" width={95} height={100} />
        <Image src="/Logo2.png" alt="alt" width={105} height={109} />
        <Image src="/Logo3.png" alt="alt" width={53} height={35} className=""/>
        <Image src="/Logo4.png" alt="alt" width={88} height={81} />
        <Image src="/Logo5.png" alt="alt" width={103} height={105} />
        <Image src="/Logo6.png" alt="alt" width={54} height={57} className="" />
      </div>
    </div>
  );
};

export default CompanyLogo;
