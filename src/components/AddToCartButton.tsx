'use client';

import { useDispatch } from 'react-redux';
import { addToCart } from '@/app/store/CartSlice';
import { Button } from './ui/button';
import { Image as IImage } from 'sanity';
import { useRouter } from "next/navigation";
import { FC } from 'react';

// Define Props Type
interface AddToCartButtonProps {
  product: {
    _id: string;
    title: string;
    price: number;
    image: IImage;
    description: string;
  };
  children: React.ReactNode;
}

const AddToCartButton: FC<AddToCartButtonProps> = ({ children, product }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleAddToCart = () => {
    const cartItem = { ...product, quantity: 1 }; // Add default quantity
    dispatch(addToCart(cartItem));
    console.log('Added to Cart:', cartItem); // Debug log
    router.push("/Cart");
  };

  return (
    <Button
      className="bg-[rgba(2,159,174,1)] relative  p-4 rounded"
      onClick={handleAddToCart}
    >
      {children}
    </Button>
  );
};

export default AddToCartButton;
