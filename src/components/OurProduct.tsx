import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
const OurProduct = () => {
  return (
    <div className='min-h-[919px] w-auto top-[1825px] relative mx-20'>
        <p className="font-sans flex justify-center items-center text-[32px] font-semibold leading-[35.2px] text-[#272343]">
    Our Product
  </p>
  <div className='grid mt-20 grid-cols-4 gap-4 grid-rows-2'>
           <div className="h-[367px] bg-white w-[292px]">
               
               <div style={{ backgroundImage: `url(/Image.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
                   <Button variant={'secondary'} size={'lg'} className='mt-3 ml-3 text-white'>New</Button>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-[rgba(0,117,128,1)]">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   
                   <div>
                       <Button variant={'outline'} size={'sm'} className=' mt-28 bg-[rgba(2,159,174,1)]'>
                           <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   </div>
               </div>
           </div>
           <div className="h-[367px]  bg-white w-[292px]">
           <div style={{ backgroundImage: `url(/Image1.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
                   <Button variant={'secondary'} size={'lg'} className='mt-3 ml-3  bg-orange-500 text-white'>Sale</Button>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   
                   <div>
                       <Button variant={'outline'} size={'sm'} className='mt-28 bg-slate-100'>
                           <Image src="/Group_1.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   
           </div>
           </div>
           </div>
           <div className="h-[367px] bg-white w-[292px]">
           <div style={{ backgroundImage: `url(/Image2.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   <div>
                       <Button variant={'outline'} size={'sm'} className='mt-28 bg-slate-100'>
                           <Image src="/Group_1.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   </div>
           </div>
           </div>
           <div className="h-[367px]  bg-white w-[292px]">
           <div style={{ backgroundImage: `url(/Image3.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   <div>
                       <Button variant={'outline'} size={'sm'} className='mt-28 bg-slate-100 '>
                           <Image src="/Group_1.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   </div>
                   </div>
           </div>
           <div className="h-[367px] mt-2 bg-white w-[292px]">
               
               <div style={{ backgroundImage: `url(/Image_8.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
                   <Button variant={'secondary'} size={'lg'} className='mt-3 ml-3 text-white'>New</Button>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-[rgba(0,117,128,1)]">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   
                   <div>
                       <Button variant={'outline'} size={'sm'} className='mt-[510px] bg-[rgba(2,159,174,1)]'>
                           <Image src="/Group.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   </div>
               </div>
           </div>
           <div className="h-[367px] mt-2 bg-white w-[292px]">
           <div style={{ backgroundImage: `url(/img/item-category-2.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
                   <Button variant={'secondary'} size={'lg'} className='mt-3 ml-3  bg-orange-500 text-white'>Sale</Button>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   
                   <div>
                       <Button variant={'outline'} size={'sm'} className='mt-[510px] bg-slate-100'>
                           <Image src="/Group_1.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   
           </div>
           </div>
           </div>
           <div className="h-[367px] mt-2 bg-white w-[292px]">
           <div style={{ backgroundImage: `url(/Image8.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   <div>
                       <Button variant={'outline'} size={'sm'} className='mt-[510px] bg-slate-100'>
                           <Image src="/Group_1.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   </div>
           </div>
           </div>
           <div className="h-[367px] mt-2 bg-white w-[292px]">
           <div style={{ backgroundImage: `url(/img/item-category-3.png)`}}
               className='h-[312px] hover:scale-x-110 hover:scale-y-105 w-[292px] rounded-[6px]'>
               </div>
               <div className='flex flex-row gap-[114px] mt-[10px]'>
                   <div>
                   <div className="font-inter text-[16px] font-normal leading-[20.8px] text-left text-black">
                     Library Stool Chair
                   </div>
                   <div className="font-inter text-[18px] leading-[19.8px] mt-2 text-left text-[rgba(39,35,67,1)]">
                     $20
                   </div>
                   </div>
                   <div>
                       <Button variant={'outline'} size={'sm'} className='mt-[510px] bg-slate-100 '>
                           <Image src="/Group_1.png" alt="Cart" width={18.5} height={18.4} />
                       </Button>
                   </div>
                   </div>
           </div>
  </div>
  
  
  
  
  </div>
  )
}

export default OurProduct