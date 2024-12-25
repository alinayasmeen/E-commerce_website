import React from 'react';
import Image from 'next/image';

const HotCategories = () => {
  return (
    <div className="xl:min-h-[528px] h-full xl:top-[2184px] md:top-[3300px] top-[4000px] xl:max-w-[1200px] lg:mx-20 relative">
      {/* Rotated Heading */}
      <div className="absolute -left-12 top-0 ml-16 sm:ml-20 xl:mt-[540px] mt-[300px] mr-0 -rotate-90 origin-left text-left font-roboto sm:mt-[500px] sm:text-3xl text-lg xl:text-4xl font-medium">
        Explore New and Popular Styles
      </div>

      {/* Grid Layout */}
      <div className="grid xl:grid-rows-2 lg:ml-20 md:ml-14 sm:ml-12 ml-8 w-full lg:mx-24 xl:grid-cols-[auto_1fr_1fr_1fr] xl:gap-4">
    
        
        {/* Main Large Image */}
        <div className='h-[516px] w-[320px]  sm:w-[556px] pb-5'>
          <Image src="/item-category1.png" 
          alt="Category 1"
           width={556} 
           height={526}
           className='hover:scale-110 shadow-2xl ' />
          
        </div>

        {/* Top Right Images */}
        <div className="xl:flex h-[506px] sm:hidden w-[270px] ml-10 xl:ml-0 xl:flex-col gap-4">
          <Image src="/img/item-category-2.png" alt="Category 2" width={270} height={250} className='hover:scale-110 shadow-2xl' />
          <Image src="/img/item-category.png" alt="Category 3" width={270} height={250} className='hover:scale-110 mt-4 shadow-2xl' />
        </div>

        {/* Bottom Right Images */}
        <div className="xl:flex xl:flex-col h-[516px] sm:hidden top-10 w-[270px] gap-4">
          <Image src="/img/item-category-3.png" alt="Category 4" width={270} height={250} className='hover:scale-110 hidden xl:block shadow-2xl' />
          <Image src="/img/item-category-3.png" alt="Category 5" width={270} height={250} className='hover:scale-110 mt-20 ml-10 xl:mt-0 xl:ml-0 shadow-2xl' />
        </div>
        <div className='hidden xl:hidden sm:flex mt-10 gap-5 sm:flex-row mx-3'>
          {/* Top Right Images */}
          <div className="flex h-[506px] w-[270px] flex-col">
          <Image src="/img/item-category-2.png" alt="Category 2" width={270} height={250} className='hover:scale-110 mt-5 shadow-2xl' />
          <Image src="/img/item-category.png" alt="Category 3" width={270} height={250} className='hover:scale-110 mt-5 shadow-2xl' />
        </div>

        {/* Bottom Right Images */}
        <div className="flex flex-col h-[516px]  w-[270px] ">
          <Image src="/img/item-category-3.png" alt="Category 4" width={270} height={250} className='hover:scale-110 mt-5 shadow-2xl' />
          <Image src="/img/item-category-3.png" alt="Category 5" width={270} height={250} className='hover:scale-110 mt-5 shadow-2xl' />
        </div>
        </div>
      </div>
    </div>
  );
};

export default HotCategories;
