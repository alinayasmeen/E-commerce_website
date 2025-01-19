import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react';
import Wrapper from '@/components/shared/page';


const Header = () => {
  return (
    <Wrapper>
    <div className="w-full">
        <div className=" h-[30px] sm:h-[45px] flex flex-col sm:flex-row justify-between items-center bg-[rgba(39,35,67,1)] px-4 sm:px-20">
          <div className='flex gap-2 items-center'>
            <Image src="/vector.png" alt="Logo" width={10.67} height={7.33} />
            <div className="text-white text-[13px] leading-[14.3px]">
              Free shipping on all orders over $50
            </div>
          </div>
          <div className="hidden items-center sm:flex gap-4 ">
            <div className="flex items-center text-white text-[13px]">
              Eng
              <div className="relative">
                <Image src="/Vector1.png" alt="dropDown" width={7} height={3.5} className="left-2 ml-1 font-bold top-1" />
              </div>
            </div>
            <Link href="/Faqs" className='text-white text-[13px]'>Faqs</Link>
            <div className="flex items-center text-white">
              <Image src="/alert-circle.png" alt="Alert" width={16} height={16} className='left-2 mr-1 font-bold '/>
              <div className="text-[13px]">Need Help</div>
            </div>
          </div>
        </div>
        <div className='min-h-[85px] bg-slate-100 flex justify-between items-center px-4 sm:px-20'>
          <div className='flex items-center gap-2'>
            <Image src="/Logo-Icon.png" alt="Logo-Icon" width={40} height={40} />
            <div className="text-[26px] font-medium text-[rgba(39,35,67,1)]">Comforty</div>
          </div>
          <div className='flex bg-white p-1 rounded-md items-center gap-3'>
            <Link href="/Cart">
              <Image src="/buy.png" alt="buy" width={22} height={22} />
            </Link>
            <div className="hidden sm:block text-[15px] font-medium">Cart</div>
            {/* <Image src="/No.png" alt="alt" width={20} height={20} /> */}
            <span className='h-7 w-7 font-bold text-sm bg-[rgba(2,159,174,1)] rounded-full text-white items-center flex justify-center'>0</span>
          </div>
        </div>
        <div className='min-h-[74px] border-b bg-white flex justify-between items-center px-4 sm:px-20'>
          <div className='hidden md:flex gap-8'>
            <Link href="./" className='text-[rgba(0,117,128,1)] text-[14px]'>Home</Link>
            <Link href="/AllProducts" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>Shop</Link>
            <Link href="/SingleProduct" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>Product</Link>
            <Link href="/Pages" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>Pages</Link>
            <Link href="/About" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>About</Link>
          </div>
          <div className='md:hidden'>
            <Sheet>
              <SheetTrigger><Menu /></SheetTrigger>
              <SheetContent>
                <ul className="bg-white gap-5">
                  <li className="cursor-pointer">
                    <Link href="./" className='text-[rgba(0,117,128,1)] text-[14px]'>Home</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/AllProducts" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>Shop</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/SingleProduct" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>Product</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/Pages" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>Pages</Link>
                  </li>
                  <li className='cursor-pointer'>
                    <Link href="/About" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>About</Link>
                  </li>
                  <li className="cursor-pointer">
                    <Link href="/Faqs" className='text-[rgba(99, 98, 112, 1)] text-[14px]'>Faqs</Link>
                  </li>
                </ul>
              </SheetContent>
            </Sheet>
          </div>
          <div className='flex items-center gap-2'>
            <div className="text-[rgba(99,98,112,1)] text-[14px]">Contact:</div>
            <div className='text-[rgba(39, 35, 67, 1)] text-[14px]'>(808) 555-0111</div>
          </div>
        </div>
    </div>
    </Wrapper>
  )
}

export default Header