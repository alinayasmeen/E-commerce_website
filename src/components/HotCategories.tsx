import React from 'react';
import Image from 'next/image';

const HotCategories = () => {
  return (
    <div className="min-h-[528px] top-[2184px] max-w-[1200px] mx-20 relative">
      {/* Rotated Heading */}
      <div className="absolute -left-12 top-0 ml-20 mt-[540px]  mr-0 -rotate-90 origin-left text-left font-roboto text-4xl font-medium">
        Explore New and Popular Styles
      </div>

      {/* Grid Layout */}
      <div className="grid grid-rows-2 mx-24 grid-cols-[auto_1fr_1fr_1fr] gap-4">
    
        
        {/* Main Large Image */}
        <div className='h-[516px] w-[556px] pb-5'>
          <Image src="/item-category1.png" alt="Category 1" width={556} height={526} className='hover:scale-110 shadow-2xl' />
          
        </div>

        {/* Top Right Images */}
        <div className="flex h-[506px] w-[270px] flex-col gap-4">
          <Image src="/img/item-category-2.png" alt="Category 2" width={270} height={250} className='hover:scale-110 shadow-2xl' />
          <Image src="/img/item-category.png" alt="Category 3" width={270} height={250} className='hover:scale-110 shadow-2xl' />
        </div>

        {/* Bottom Right Images */}
        <div className="flex flex-col h-[516px] w-[270px] gap-4">
          <Image src="/img/item-category-3.png" alt="Category 4" width={270} height={250} className='hover:scale-110 shadow-2xl' />
          <Image src="/img/item-category-3.png" alt="Category 5" width={270} height={250} className='hover:scale-110 shadow-2xl' />
        </div>
      </div>
    </div>
  );
};

export default HotCategories;
