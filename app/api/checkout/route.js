import Razorpay from "razorpay";

export async function POST(req) {
  try {
    const { amount } = await req.json();

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    const order = await instance.orders.create({
      amount: amount * 100,        // ₹ → paise
      currency: "INR",
      receipt: "receipt_" + Date.now(),
    });

    return Response.json(order);

  } catch (err) {
    return Response.json({ error: err.message }, { status: 500 });
  }
}
