'use client';

import { useUser } from '@clerk/nextjs';
import { useEffect } from 'react';

interface RazorpayButtonProps {
  amount: number;
  planName: string;
}

export default function RazorpayButton({ amount, planName }: RazorpayButtonProps) {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    if (!user) return;

    try {
      const res = await fetch('/api/razorpay/order', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          userId: user.id,
          name: user.fullName,
          email: user.primaryEmailAddress?.emailAddress,
          plan: planName,
        }),
      });

      const data = await res.json();
      if (!data.id) {
        console.error("❌ Razorpay order creation failed");
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID!,
        amount: data.amount,
        currency: 'INR',
        name: 'AskRa AI',
        description: `${planName} Plan - ₹${amount}`,
        order_id: data.id,
        handler: function (response: any) {
          alert(`✅ Payment Successful!\nPayment ID: ${response.razorpay_payment_id}`);
        },
        prefill: {
          name: user.fullName || '',
          email: user.primaryEmailAddress?.emailAddress || '',
          contact: '', // optionally collect phone
        },
        notes: {
          plan: planName,
          userId: user.id,
        },
        theme: {
          color: '#7c3aed',
        },
      };

      const razorpay = new (window as any).Razorpay(options);
      razorpay.open();
    } catch (err) {
      console.error("Payment error:", err);
    }
  };

  if (!isSignedIn) {
    return (
      <p className=" font-semibold animate-pulse text-red-500">Please sign in to subscribe to a plan.</p>
    );
  }

  return (
    <button
      onClick={handlePayment}
      className="bg-purple-600 cursor-pointer animate-bounce hover:bg-pink-600 text-white px-4 py-2 rounded-4xl"
    >
      Subscribe 
    </button>
  );
}
