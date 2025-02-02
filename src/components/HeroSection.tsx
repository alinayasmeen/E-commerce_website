import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const HeroSection = () => {
  return (
    <div>
      <div className="xl:w-[1191px] lg:w-[864px] w-full h-[650px] md:mx-0 lg:mx-20 flex justify-center xl:justify-between bg-[#f0f2f3]  sm:rounded-bl-[30px] absolute top-[204px]">
    <div className="w-[434px] hidden xl:block h-[584px] absolute top-[115px] left-[777px]">
    <Image src="/Product_Image.png" alt="image" width={334} height={484} />
</div>
<div className="w-[557px] h-[337px]  top-[209px] px-5 sm:left-[70px] rounded-[8px]">
<div className="w-[177px] h-[14px] absolute top-[130px] sm:top-[170px] md:top-[209px] sm:left-[70px] font-inter text-[14px] font-normal leading-[14px] tracking-[0.12em] sm:text-left text-[rgba(39,35,67,1)]">
  Welcome to chairy
</div>
<div className=" w-auto md:w-[557px] h-[198px] absolute top-[160px] sm:top-[200px] md:top-[247px] md:left-[70px] font-inter text-[60px] font-bold leading-[66px] sm:text-left text-[rgba(39,35,67,1)]">
  Best Furniture<br />
  Collection for your<br />
  interior.
</div>
<Link href="/AllProducts">
<Button className='w-[171px] h-[52px]  bg-[rgba(2,159,174,1)] absolute top-[494px] sm:left-[70px] p-[14px_24px] gap-[20px] rounded-tl-[8px]'>Shop Now 
  <Image
   src="/Right.png" 
   alt="right"
    width={24}
     height={24} />
     </Button>
     </Link>
</div>

  </div>
 

 
  </div>
  )
}

export default HeroSection