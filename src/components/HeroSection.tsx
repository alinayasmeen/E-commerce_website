import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"


const HeroSection = () => {
  return (
    <div>
      <div className="w-[1191px] h-[650px]
    
        mx-20 flex justify-between bg-[rgb(240,242,243)] rounded-bl-[30px] absolute top-[204px]">
    <div className="w-[434px] h-[584px] absolute top-[115px] left-[777px]">
    <Image src="/Product_Image.png" alt="image" width={334} height={484} />
</div>
<div className="w-[557px] h-[337px] sm:h-[300px] sm:top-[600px] top-[209px] left-[70px] rounded-[8px]">
<div className="w-[177px] h-[14px] absolute sm:top-[600px] top-[209px] left-[70px] font-inter text-[14px] font-normal leading-[14px] tracking-[0.12em] text-left text-[rgba(39,35,67,1)]">
  Welcome to chairy
</div>
<div className="w-[557px] h-[198px] absolute sm:top-[630px] top-[247px] left-[70px] font-inter text-[60px] font-bold leading-[66px] text-left text-[rgba(39,35,67,1)]">
  Best Furniture<br />
  Collection for your<br />
  interior.
</div>
<Button className='w-[171px] h-[52px] sm:left-96 sm:top-[800px] bg-[rgba(2,159,174,1)] absolute top-[494px] left-[70px] p-[14px_24px] gap-[20px] rounded-tl-[8px]'>Shop Now 
  <Image
   src="/Right.png" 
   alt="right"
    width={24}
     height={24} />
     </Button>
</div>

  </div>
 

 
  </div>
  )
}

export default HeroSection