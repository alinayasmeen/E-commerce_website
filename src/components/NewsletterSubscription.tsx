import React from "react";

const NewsletterSubscription = () => {
  return (
    <div className="h-[824px] mt-28 w-full bg-gray-100 py-[80px]">
      <h2 className="text-center text-3xl sm:text-4xl font-medium mb-5">Subscribe to the Newsletter</h2>
      <div className="flex justify-center items-center gap-5">
        <input
          type="email"
          placeholder="Email Address..."
          className="w-[643px] h-[50px] bg-gray-100 border-b-2 border-black p-[10px]"
        />
        <button className="h-[32px] w-[91px] border text-lg font-normal">SUBMIT</button>
      </div>
    </div>
  );
};

export default NewsletterSubscription;
