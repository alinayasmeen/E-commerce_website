import React from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
const Footer = () => {
  return (
    <div className='min-h-[400px] mt-10 max-w-full border-t-2'>
        <div className='xl:mx-20 flex flex-row my-2 xl:my-20 h-[223px]'>
            <div className='w-1/2 gap-1 xl:gap-10 flex flex-row'>
            <div className='w-auto xl:w-[350px] mr-0 ml-1 xl:ml-0 xl:mr-5'>
            <div className='flex flex-row gap-2'>
            <Image src="/Logo-Icon.png" alt="Logo-Icon" width={40} height={40} />
                <div className="text-left font-inter  text-[26px] font-semibold leading-[31.2px] text-[rgba(39,35,67,1)]">
              Comforty
            </div>
            </div>
            <br />
            <div className='font-inter hidden xl:block font-normal mb-4 opacity-[60%] h-[72px] text-base text-[rgba(39,35,67,1)]'>
                Vivamus tristique odio sit amet velit semper,
                <br /> eu posuere turpis interdum.<br />
            Cras egestas purus </div>
            <br />
            <div className='flex flex-row'>
                <div><Image src="/Group 44.png" alt="alt" width={38} height={38} /> </div>
                <div><Image src="/Group 48.png" alt="alt" width={38} height={38} /> </div>
                <div><Image src="/Group 50.png" alt="alt" width={38} height={38} /> </div>
                <div><Image src="/Group 46.png" alt="alt" width={38} height={38} /> </div>
                <div><Image src="/Group 47.png" alt="alt" width={38} height={38} /> </div>
                
            </div>
            <div className='w-[424px] xl:hidden'>
                <div className='font-inter font-medium text-[14px]  text-zinc-300'>
            Newsletter
            </div>
            <br />
            <div className='flex xl:hidden flex-row gap-2'>
            <input placeholder='Your email' className='border h-[35px] w-[200px] items-center px-4' />
            <Button className='w-[85px] h-[35px] bg-[rgba(2,159,174,1)] p-[14px_24px]rounded-[8px]'>
                Subscribe </Button>
                </div>
               
            </div>
            </div>
            <div className='w-[105px] hidden xl:block left-[747px]'>
            <div className='font-inter font-medium text-[14px] text-zinc-300'> Category</div>
            <br />
            <ul className='font-inter font-normal text-[rgba(39,35,67,1)] text-[16px] '>
                <li className='hover:underline hover:text-[rgba(0,117,128,1)]'>sofa</li>
                <li className='hover:underline hover:text-[rgba(0,117,128,1)]'>Armchair</li>
                <li className='hover:underline hover:text-[rgba(0,117,128,1)]'>Wing Chair</li>
                <li className='hover:underline hover:text-[rgba(0,117,128,1)]'>Desk Chair</li>
                <li className='hover:underline hover:text-[rgba(0,117,128,1)]'>wooden Chair</li>
                <li className='hover:underline hover:text-[rgba(0,117,128,1)]'>Park Bench</li>
            </ul>
            </div>
            </div>
            <div className='w-1/2 gap-10 flex flex-row'>
            <div className='w-[156px] h-auto ml-5'>
            <div className='font-inter font-medium text-[14px]  text-zinc-300'>Support </div>
            <br />
            <div className='font-inter font-normal top-40 w-[156px] h-[108px] gap-3 text-[rgba(39,35,67,1)] text-[16px] '>
                <div className='hover:underline hover:text-[rgba(0,117,128,1)]'> 
                    <Link href='/Contact-us'>Help & Support </Link></div>
                <div className='hover:underline hover:text-[rgba(0,117,128,1)]'>Tearms & Conditions</div>
                <div className='hover:underline hover:text-[rgba(0,117,128,1)]'>Privacy Policy</div>
                <div className='hover:underline hover:text-[rgba(0,117,128,1)]'>
                <Link href='/Contact-us'>Help </Link></div>
            </div>
            </div>
            <div className='hidden xl:block w-[424px]'>
                <div className='font-inter font-medium text-[14px]  text-zinc-300'>
            Newsletter
            </div>
            <br />
            <div className='flex flex-row gap-2'>
            <input placeholder='Your email' className='border h-[40px] w-[275px] items-center px-4' />
            <Button className='w-[115px] h-[40px] bg-[rgba(2,159,174,1)] p-[14px_24px]rounded-[8px]'>
                Subscribe </Button>
                </div>
                <br />
                <div className='font-inter font-normal top-40 w-[424px] opacity-[60%] h-[46px] gap-3 text-[rgba(39,35,67,1)] text-[16px] '>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/> Nullam tincidunt erat enim.
                </div>
            </div>
            </div>
            </div>
            <div className='border-t h-[75px] '>
                <div className='lg:mx-20 mx-1 mt-5 flex justify-between items-center'>
                    <div className='flex flex-row gap-[6px]'>
                <footer className="text-left font-poppins text-[7px] lg:text-[14px] opacity-60 font-normal leading-[21px] text-[#272343]">
  @ 2021 - Blogy - Designed & Developed by</footer>
  <span className="font-poppins lg:text-[14px] text-[9px] font-medium opacity-100 leading-[21px] text-[#272343]">
    Zakirsoft
  </span>
  </div>
<div className='opacity-25 h-[10px] w-[130px] flex flex-row gap-2 '>
    <Image src="/Group11.png" alt='payment methods' width={36} height={22}/>
    <Image src="/Group12.png" alt='payment methods' width={56} height={15}/>
    <Image src="/Vector2.png" alt='payment methods' width={50} height={27}/>
    <Image src="/Union.png" alt='payment methods' width={55} height={18}/>
</div>
                </div>
            </div>
            </div>
           
  )
}

export default Footer