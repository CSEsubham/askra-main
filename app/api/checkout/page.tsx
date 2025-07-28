'use client';
import { useEffect, useState } from 'react';
import  supabase  from '../../utils/supabaseClient';

declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function CheckoutPage() {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUserId(user?.id ?? null);
    };
    getUser();
  }, []);

  const handlePayment = async () => {
    const amount = 99; // ₹99
    const plan = 'elite';

    const res = await fetch('/api/razorpay/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount }),
    });

    const order = await res.json();

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
      amount: order.amount,
      currency: 'INR',
      name: 'AskRa Subscriptions',
      description: `Plan: ${plan}`,
      order_id: order.id,
      handler: async function (response: any) {
        await fetch('/api/razorpay/store-payment', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            user_id: userId,
            status: 'paid',
            plan,
            razorpay_order_id: order.id,
            razorpay_payment_id: response.razorpay_payment_id,
          }),
        });
        alert('Payment successful!');
      },
      prefill: {
        name: 'Saran Kumar',
        email: 'saran@example.com',
        contact: '9999999999',
      },
      theme: {
        color: '#F37254',
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold mb-4">Subscribe to Elite Plan</h1>
      <button
        onClick={handlePayment}
        className="bg-purple-600 text-white px-4 py-2 rounded-md"
      >
        Pay ₹99
      </button>
    </div>
  );
}
