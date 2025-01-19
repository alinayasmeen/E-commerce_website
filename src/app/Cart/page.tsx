'use client';

import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '@/app/store/store';
import { removeFromCart, clearCart } from '@/app/store/CartSlice';
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import Wrapper from "@/components/shared/page";
import { Image as IImage } from 'sanity';
import { urlFor } from '@/sanity/lib/image';

interface CartItem {
  _id: string;
  title: string;
  price: number;
  description: string;
  image: IImage | string;
  quantity: number;
}

const Cart = () => {
  const cart = useSelector((state: RootState) => state.cart) as CartItem[];
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating an async operation (e.g., fetching cart data)
    setTimeout(() => setLoading(false), 1000);
  }, []);

  const handleRemove = (_id: string) => {
    dispatch(removeFromCart({ _id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const subtotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (loading) {
    return (
      <Wrapper>
        <div className="flex justify-center items-center h-full">
          <p className="text-gray-500 flex justify-center items-center">Loading your cart...</p>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="xl:min-h-[835px] h-auto bg-white flex flex-col lg:flex-row gap-20 p-5">
        {/* Cart Items Section */}
        <div className="flex-1 lg:mx-20">
          <h1 className="font-inter mt-10 font-medium text-[22px] text-black">
            Cart
          </h1>

          {cart.length === 0 ? (
            <p className="mt-5 text-gray-600">Your cart is empty.</p>
          ) : (
            <div className="mt-5">
              {cart.map((item) => (
                <div
                  key={item._id || Math.random()}
                  className="h-auto my-10 w-full xl:w-[783px] flex flex-col lg:flex-row items-center gap-5 border-b pb-5"
                >
                  {/* Product Image */}
                  <div>
                    <Image
                      src={
                        typeof item.image === 'string'
                          ? item.image
                          : item.image
                          ? urlFor(item.image).url()
                          : '/img/default.png' // Fallback for missing images
                      }
                      alt={item.title || "Product Image"}
                      width={200}
                      height={200}
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-center">
                      <h2 className="font-inter text-[16px] font-normal text-[rgba(39,35,67,1)]">
                        {item.title || "Unnamed Product"}
                      </h2>
                      <p className="font-inter text-[15px] font-medium text-black">
                        MRP: ${item.price || "0.00"}
                      </p>
                    </div>
                    <p className="font-inter text-[15px] mt-2 text-gray-600">
                      {item.description || "No description available"}
                    </p>
                    <div className="flex flex-row gap-10 mt-3">
                      <p className="font-inter text-[15px] text-gray-600">
                        Quantity: {item.quantity || "1"}
                      </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-row gap-5 mt-5 items-center">
                      <Button
                        onClick={() => handleRemove(item._id)}
                        className="flex bg-white items-center"
                      >
                        <Image
                          src="/img/Frame1.png"
                          alt="Remove"
                          width={24}
                          height={24}
                        />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Summary Section */}
        <div className="lg:w-[350px] lg:mt-14">
          <h3 className="font-inter text-xl font-medium leading-8 text-gray-900">
            Summary
          </h3>
          <div className="flex justify-between mt-5 items-center">
            <p className="font-inter text-sm font-normal text-gray-900">
              Subtotal
            </p>
            <span className="font-inter text-xs font-medium text-gray-900">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <div className="flex justify-between mt-3 items-center">
            <p className="font-inter text-sm font-normal text-gray-900">
              Estimated Delivery & Handling
            </p>
            <span className="font-inter text-xs font-medium text-gray-900">
              Free
            </span>
          </div>
          <div className="flex justify-between mt-4 border-y py-8 items-center">
            <p className="font-inter text-sm font-normal text-gray-900">
              Total
            </p>
            <span className="font-inter text-xs font-medium text-gray-900">
              ${subtotal.toFixed(2)}
            </span>
          </div>
          <Button className="w-full h-[60px] mt-5 bg-[rgba(2,159,174,1)] font-inter font-medium text-[15px]">
            Member Checkout
          </Button>
          <Button
            onClick={handleClearCart}
            className="w-full mt-3 h-[60px] bg-[rgba(2,159,174,1)] font-inter font-medium text-[15px]"
          >
            Clear Cart
          </Button>
        </div>
      </div>
      <Footer />
    </Wrapper>
  );
};

export default Cart;
