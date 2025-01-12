


import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req = NextApiRequest, res = NextApiResponse) {
  if (req.method === "POST") {
    try {
      const { items } = req.body;

      const formattedItems = items.map((item) => ({
        price_data: {
          currency: "usd",
          product_data: {
            name: item.name,
            images: [item.image],
          },
          unit_amount: item.unit_price * 100,
        },
        quantity: item.quantity,
      }));

      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: formattedItems,
        mode: "payment",
        success_url:` ${req.headers.origin}/success?session_id={CHECKOUT_SESSION_ID},
        cancel_url: ${req.headers.origin}/checkout`,
      });

      res.status(200).json({ id: session.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).end("Method Not Allowed");
}
}



