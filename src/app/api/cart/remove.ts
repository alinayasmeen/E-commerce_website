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
  res: NextApiResponse<ResponseData>
): Promise<void> {
  const { method, body } = req;
  const { userId, productId } = body as { userId: string; productId: string };

  if (method === 'DELETE') {
    try {
      // Retrieve the cart for the user or initialize it as an empty array
      let cart: CartItem[] = (await kv.get<CartItem[]>(`cart:${userId}`)) || [];
      // Filter out the product with the specified ID
      cart = cart.filter((item) => item.id !== productId);
      // Update the cart in the database
      await kv.set(`cart:${userId}`, cart);

      // Respond with success and the updated cart
      res.status(200).json({ success: true, cart });
    } catch (error) {
      // Log the error for debugging
      console.error('Error deleting item from cart:', error);
      // Handle errors
      res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
  } else {
    // Handle unsupported HTTP methods
    res.setHeader('Allow', ['DELETE']);
    res.status(405).end(`Method ${method} Not Allowed`);
  }
}