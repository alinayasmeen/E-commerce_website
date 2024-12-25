import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';


const Header = () => {
  return (
    <div >
        <div className="min-h-[45px] sm:h-[45px] md:min-w-full xl:min-w-full lg:min-w-full min-w-full sm:min-w-full  md:px-20 lg:px-20 xl:px-20 flex justify-center sm:justify-between font-inter items-center bg-[rgba(39,35,67,1)]">
          <div className='flex gap-2 ml-0 pl-0 justify-start flex-row'>
        <div className='text-white items-center top-10'>
      <Image src="/vector.png" alt="Logo" width={10.67} height={7.33} 
      className='items-center '/>
      </div>
      <div className="w-[231px] h-[14px] inter text-[13px] font-normal text-white leading-[14.3px] text-left">
  Free shipping on all orders over $50
</div>
</div>
<div className="sm:w-[202px] sm:h-[17px] hidden justify-end sm:left-[60px] sm:flex-row sm:flex sm:gap-[14px] gap-[24px] opacity-70">
<div className="w-[24px] h-[17px] sm:h-[14px] sm:w-[16px] sm:text-[11px] text-center font-inter text-[13px] font-normal leading-[16.9px] text-white relative">
  Eng
  <div className="absolute w-[7px] h-[3.5px] top-[6.75px] sm:left-[22px] left-[30px] border-t border-white">
    <Image src="/Vector1.png" alt="dropDown" width={7} height={3.5} />
  </div>
</div>
<div className='w-[30px] h-[17px] text-center font-inter text-[13px] font-normal leading-[16.9px] text-white'>
  <Link href="/Faqs" className='w-[30px] h-[17px] sm:ml-2 sm:h-[14px] sm:w-[16px] sm:text-[11px] text-center font-inter text-[13px] font-normal leading-[16.9px] text-white'>Faqs</Link>
</div>
<div className="w-[87px] sm:w-[77px] sm:left-32 sm:h-[14px] sm:mt-[2px] sm:text-[9px] h-[17px] flex gap-[6px]">
 <Image src="/alert-circle.png" alt="Alert" width={16} height={16} className='sm:left-[24px]' />
 <div className="text-center sm:w-auto sm:h-[14px] sm:left-32 sm:text-[11px] text-white font-inter text-[13px] font-normal leading-[16.9px]">
  Need Help
</div>
</div>
</div>

</div>
<div className='min-h-[85px] top-[45px]  min-w-full md:min-w-full sm:min-w-full bg-slate-100 md:px-20 flex justify-between items-center'>
  <div className='flex items-center flex-row gap-2'>
    <Image src="/Logo-Icon.png" alt="Logo-Icon" width={40} height={40} />
    <div className="text-left font-inter  text-[26px] font-medium leading-[31.2px] text-[rgba(39,35,67,1)]">
  Comforty
</div>
</div>
<div className='gap-3  sm:w-[120px] md:w-[120px] lg:w-[120px] h-[44px] p-[11px_16px] rounded-[8px] bg-white flex items-center flex-row'>
  <Link href="/Cart">
  <Image src="/buy.png" alt="buy" width={22} height={22} /></Link>
  <div className="h-[22px] hidden sm:block font-inter text-[15px] font-medium ">
  Cart
</div>
<Image src="/No.png" alt="alt" width={20} height={20} />
</div>
</div>
<div className='min-h-[74px]  top-[130] border-b md:px-20 flex justify-between md:min-w-full min-w-full sm:min-w-full items-center bg-white'>
  <div className='md:gap-8 md:flex md:flex-row hidden sm:hidden md:font-inter'>
   <div>
     <Link href="./" className='w-[40px] h-[15px] text-[rgba(0,117,128,1)] text-left font-[500] text-[14px] leading-[15.4px] '>Home</Link>
     </div>
     <div>
    <Link href="/AllProducts" className='w-[40px] h-[15px] text-[rgba(99, 98, 112, 1)] text-left font-[500] text-[14px] leading-[15.4px] '>Shop</Link>
    </div>
    <div>
    <Link href="/SingleProduct" className='w-[40px] h-[15px] text-[rgba(99, 98, 112, 1)] text-left font-[500] text-[14px] leading-[15.4px] '>Product</Link>
    </div>
    <div>
    <Link href="/PageUnderConstruction" className='w-[40px] h-[15px] text-[rgba(99, 98, 112, 1)]text-left font-[500] text-[14px] leading-[15.4px] '>Pages</Link>
    </div>
    <div>
    <Link href="/About" className='w-[40px] h-[15px] text-[rgba(99, 98, 112, 1)] text-left font-[500] text-[14px] leading-[15.4px] '>About</Link>
    </div>

    </div>
    <div className='md:hidden '>
    <Sheet >
  <SheetTrigger><Menu/></SheetTrigger>
  <SheetContent>
  <ul className=" bg-white gap-5">
            <li className="cursor-pointer">
            
     <Link href="./" className=' text-[rgba(0,117,128,1)] font-[500] text-[14px] leading-[15.4px] '>Home</Link>
    
            </li>
            <li className="cursor-pointer">
            
    <Link href="/AllProducts" className='ext-[rgba(99, 98, 112, 1)] text-left font-[500] text-[14px] leading-[15.4px] '>Shop</Link>
            </li>
            <li className="cursor-pointer">
            
    <Link href="/SingleProduct" className='text-[rgba(99, 98, 112, 1)] text-left font-[500] text-[14px] leading-[15.4px] '>Product</Link>
   
            </li>
            <li className="cursor-pointer">
            
    <Link href="/PageUnderConstruction" className='w-[40px] h-[15px] text-[rgba(99, 98, 112, 1)]text-left font-[500] text-[14px] leading-[15.4px] '>Pages</Link>
            </li>
            <li className='cursor-pointer'>
            
    <Link href="/About" className='w-[40px] h-[15px] text-[rgba(99, 98, 112, 1)] text-left font-[500] text-[14px] leading-[15.4px] '>About</Link>
            </li>
            <li className="cursor-pointer font-inter text-[13px] font-normal leading-[16.9px]">
            <Link href="/Faqs" className='text-center font-inter text-[13px] font-normal leading-[16.9px]'>Faqs</Link>
            </li>
          </ul>
   
  </SheetContent>
</Sheet>
</div>
    <div className='h-[15px] flex flex-row items-center gap-2'>
    <div className="w-[57px] h-[15px] text-[rgba(99,98,112,1)] font-inter text-[14px] font-normal ">
  Contact:
</div>
<div className='h-[15px] w-[103px] font-inter font-medium text-[rgba(39, 35, 67, 1)] text-[14px]'>
(808) 555-0111
</div>
    </div>
</div>
</div>
  )
}

export default Header