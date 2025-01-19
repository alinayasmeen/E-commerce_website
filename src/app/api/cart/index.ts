import { kv } from '@vercel/kv';
import { NextApiRequest, NextApiResponse } from 'next';

// Define types for the cart item and the response
interface CartItem {
  id: string;
  title: string;
  price: number;
  quantity: number;
}

interface ResponseData {
  success: boolean;
  cart?: CartItem[];
  message?: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData | CartItem[] | { message: string }>
): Promise<void> {
  const { method, body } = req;

  // Destructure userId and product from the request body
  const { userId, product } = body as { userId: string; product: CartItem };

  try {
    if (method === 'POST') {
      // Add product to the cart
      const cart: CartItem[] = (await kv.get<CartItem[]>(`cart:${userId}`)) || [];
      cart.push(product);
      await kv.set(`cart:${userId}`, cart);

      res.status(200).json({ success: true, cart });
    } else if (method === 'GET') {
      // Fetch cart data
      const cart: CartItem[] = (await kv.get<CartItem[]>(`cart:${userId}`)) || [];
      res.status(200).json(cart);
    } else {
      // Handle unsupported HTTP methods
      res.setHeader('Allow', ['GET', 'POST']);
      res.status(405).json({ message: `Method ${method} Not Allowed` });
    }
  } catch (error) {
    // Log the error for debugging purposes
    console.error(error);
    // Handle errors and respond with a 500 status
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
}