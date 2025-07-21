// app/api/razorpay/order/route.ts
import { NextResponse } from 'next/server';
import Razorpay from 'razorpay';

export async function POST(req: Request) {
  const { amount } = await req.json();

  const instance = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID!,
    key_secret: process.env.RAZORPAY_KEY_SECRET!,
  });

  const options = {
    amount: amount * 100, // amount in paisa
    currency: 'INR',
    receipt: 'receipt_order_74394',
  };

  try {
    const order = await instance.orders.create(options);
    return NextResponse.json(order); // ✅ must return valid JSON
  } catch (error) {
    console.error('Razorpay Error:', error);
    return NextResponse.json({ error: 'Order creation failed' }, { status: 500 });
  }
}
