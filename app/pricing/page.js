"use client";
import React, { useState } from "react";
import { Check } from "lucide-react";

const pricingPlans = [
  {
    key: "Free",
    plan: "Free Plan",
    features: [
      "⏳ Daily solve limits",
      "🔒 Advanced tools locked",
      "🧮 Basic solver access",
      "📩 Email support",
      "🚫 Ads included",
    ],
  },
  {
    key: "Standard",
    plan: "Weekly Premium",
    isPopular: true,
    features: [
      "♾️ Unlimited math solves",
      "📘 Step-by-step premium solutions",
      "📊 3D interactive graphs",
      "📄 Export to PDF (no watermark)",
      "🎧 Priority AI support",
    ],
  },
  {
    key: "Pro",
    plan: "Monthly Premium",
    features: [
      "Everything in Weekly",
      "⚡ Faster problem solving",
      "🎯 Personalized explanations",
      "🧠 Smart error detection",
      "🚫 Ad-free experience",
    ],
  },
];

const pricingData = {
  weekly: {
    Free: "Free",
    Standard: "19",
    Pro: "29",
  },
  monthly: {
    Free: "Free",
    Standard: "49",
    Pro: "79",
  },
};

export default function PricingBlock() {
  const [billing, setBilling] = useState("weekly");

  const loadRazorpay = () => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (amount) => {
    const loaded = await loadRazorpay();
    if (!loaded) return alert("Failed to load Razorpay SDK");

    const orderReq = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount }),
    });

    const order = await orderReq.json();
    if (!order.id) return alert("Order creation failed");

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: "INR",
      name: "MathsBuddy Premium",
      description: "Subscription Payment",
      order_id: order.id,
      theme: { color: "#3b82f6" },
      handler: function (response) {
        alert("Payment Successful! 🎉");
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  return (
    <div className="min-h-[80vh] text-white overflow-y-hidden p-6">
      <div className="max-w-6xl mx-auto w-full">
        <div className="text-center mb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-600">MathsBuddy</span>{" "}
            <span className="text-black">Pricing</span>
          </h1>

          <div className="inline-flex items-center gap-2 bg-blue-600 p-1 rounded-full">
            <button
              onClick={() => setBilling("weekly")}
              className={`px-3 md:px-4 py-2 rounded-full text-sm ${
                billing === "weekly" ? "bg-white text-blue-600" : "text-white"
              }`}
            >
              Weekly
            </button>

            <button
              onClick={() => setBilling("monthly")}
              className={`px-3 md:px-4 py-2 rounded-full text-sm ${
                billing === "monthly" ? "bg-white text-blue-600" : "text-white"
              }`}
            >
              Monthly
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {pricingPlans.map((plan) => {
            const amount =
              pricingData[billing][plan.key] === "Free"
                ? 0
                : Number(pricingData[billing][plan.key]);

            return (
              <div
                key={plan.key}
                className={`bg-white rounded-3xl p-8 flex flex-col h-full border shadow-md 
                  transition-all duration-300 cursor-pointer hover:scale-[1.03]
                  ${
                    plan.isPopular
                      ? "border-blue-600 shadow-blue-500/30"
                      : "border-gray-200"
                  }
                `}
              >
                <div className="mb-3">
                  <p className="text-gray-600 mb-2">{plan.plan}</p>

                  <h2 className="text-4xl font-extrabold text-blue-600 flex items-end gap-2">
                    {pricingData[billing][plan.key] === "Free"
                      ? "Free"
                      : `₹${pricingData[billing][plan.key]}`}
                    {pricingData[billing][plan.key] !== "Free" && (
                      <span className="text-xl text-gray-600">
                        /{billing === "weekly" ? "week" : "month"}
                      </span>
                    )}
                  </h2>
                </div>

                <div className="grow">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-500/10 rounded-full p-1">
                        <Check size={16} className="text-blue-600" />
                      </div>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => {
                    if (amount === 0) return alert("Free plan selected");
                    handlePayment(amount);
                  }}
                  className={`mt-8 py-3 px-6 rounded-full text-sm 
                    ${
                      plan.isPopular
                        ? "bg-blue-600 text-white"
                        : "bg-blue-100 text-blue-700"
                    }
                  `}
                >
                  Get Started
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}