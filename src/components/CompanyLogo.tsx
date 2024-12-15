import React from "react";
import Image from "next/image";
const CompanyLogo = () => {
  return (
    <div>
      <div className="w-[1181px] h-[139px] sm:top-[1150px] sm:mx-20 sm:w-[650px] absolute top-[907px] mx-20 flex justify-between">
        <Image
          src="/Logo.png"
          alt="alt"
          width={95}
          height={97}
          className="sm:w-[70px] mt-8 sm:h-[70px]"
        />
        <Image src="/Logo1.png" alt="alt" width={95} height={100} />
        <Image src="/Logo2.png" alt="alt" width={105} height={109} />
        <Image src="/Logo3.png" alt="alt" width={53} height={35} />
        <Image src="/Logo4.png" alt="alt" width={88} height={81} />
        <Image src="/Logo5.png" alt="alt" width={103} height={105} />
        <Image src="/Logo6.png" alt="alt" width={54} height={57} />
      </div>
    </div>
  );
};

export default CompanyLogo;
