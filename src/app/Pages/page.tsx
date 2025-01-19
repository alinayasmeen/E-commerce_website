import Footer from "@/components/Footer";
import Wrapper from "@/components/shared/page";
import React from "react";

const Pages = () => {
  const furnitureCategories = [
    "Sofa",
    "Armchair",
    "Park Bench",
    "Wing Chair",
    "Wooden Chair",
    "Desk Chair"
  ];

  return (

    <Wrapper>
    <div className="min-h-full max-w-full bg-[#f0f2f3] p-6">
      <div className="font-inter font-semibold md:font-extrabold flex justify-center items-center text-center text-6xl lg:text-9xl mb-10">
        Furniture Categories
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {furnitureCategories.map((category) => (
          <div key={category} className="bg-white  hover:scale-110 shadow-md rounded-lg p-4 flex flex-col items-center">
            <h2 className="text-xl font-bold mb-2">{category}</h2>
            <p className="text-gray-600">Explore our collection of {category.toLowerCase()}.</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
    </Wrapper>
  );
};

export default Pages;
