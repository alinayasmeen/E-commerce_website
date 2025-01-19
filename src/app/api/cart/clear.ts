import { kv } from '@vercel/kv';
import { NextApiRequest, NextApiResponse } from 'next';

// Define response structure
interface ResponseData {
  success: boolean;
  message: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
): Promise<void> {
  const { method, body } = req;

  // Destructure `userId` from the request body
  const { userId } = body as { userId: string };

  try {
    if (method === 'DELETE') {
      // Clear the cart
      await kv.set(`cart:${userId}`, []); // Reset the cart to an empty array
      res.status(200).json({ success: true, message: 'Cart cleared' });
    } else {
      // Handle unsupported HTTP methods
      res.setHeader('Allow', ['DELETE']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  } catch (error) {
    // Handle errors gracefully and log the error
    console.error(error); // Log the error for debugging
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
    });
  }
}