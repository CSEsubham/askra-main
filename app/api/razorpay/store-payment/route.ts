// app/api/razorpay/store-payment/route.ts
import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY! // ⚠️ Use SERVICE ROLE key (server-side only)
);

export async function POST(req: Request) {
  const body = await req.json();
  const {
    user_id,
    status,
    plan,
    razorpay_order_id,
    razorpay_payment_id,
  } = body;

  const { data, error } = await supabase.from('payments').insert([
    {
      user_id,
      status,
      plan,
      razorpay_order: razorpay_order_id,
      razorpay_payment_id,
    },
  ]);

  if (error) {
    console.error('Supabase Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ message: 'Payment saved successfully', data });
}
