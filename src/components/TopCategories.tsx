import React from 'react'
import Image from 'next/image'
const TopCategories = () => {
  return (
    <div>
      <div className="min-h-[508px] absolute top-[2800px]  lg:mx-32 md:top-[2020px] xl:ml-20 sm:mx-20 mt-0 xl:top-[1647px] ">
  <h2 className="font-inter text-3xl font-semibold mb-16 mx-10 leading-tight text-left text-gray-700">Top Categories</h2>
  
  <div className='flex flex-col w-[350px] xl:w-auto sm:w-[404px] mx-0 lg:ml-10 xl:ml-0 xl:mx-0 xl:flex-row gap-3'>
  <div className="w-[350px] mx-[5px] sm:mx-0 sm:w-[404px] h-[404px] rounded-lg relative">
  <Image src="/Image5.png" alt="Product Image" height={404} width={404} className="w-full h-full rounded-lg object-cover" />
  <div className="absolute bottom-0 w-full bg-black opacity-0 hover:opacity-75 rounded-b-lg p-4 flex flex-col gap-4">
    <h2 className="text-white font-inter text-2xl leading-tight">Wing Chair</h2>
    <p className="text-white font-inter text-sm font-normal">3,584 Products</p>
  </div>
  </div>
  <div className="w-[350px] mx-[5px] sm:mx-0 sm:w-[404px] h-[404px] rounded-lg relative">
  <Image src="/Image6.png" alt="Product Image" height={404} width={404} className="w-full h-full rounded-lg object-cover" />
  <div className="absolute bottom-0 w-full bg-black opacity-0 hover:opacity-75 rounded-b-lg p-4 flex flex-col gap-4">
    <h2 className="text-white font-inter text-2xl leading-tight">Wooden Chair</h2>
    <p className="text-white font-inter text-sm font-normal">157 Products</p>
  </div>
  </div>
  <div className="w-[350px] mx-[5px] sm:mx-0 sm:w-[404px] h-[404px] rounded-lg relative">
  <Image src="/Image7.png" alt="Product Image" height={404} width={404} className="w-full h-full rounded-lg object-cover" />
  <div className="absolute bottom-0 w-full bg-black opacity-0 hover:opacity-75 rounded-b-lg p-4 flex flex-col gap-4">
    <h2 className="text-white font-inter text-2xl leading-tight">Desk Chair</h2>
    <p className="text-white font-inter text-sm font-normal">154 Products</p>
  </div>
</div>
</div>
</div>
</div>
  )
}

export default TopCategories