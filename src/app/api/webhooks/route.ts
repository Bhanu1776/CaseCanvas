import { db } from '@/db';
import { stripe } from '@/lib/stripe';
import { headers } from 'next/headers';
import { NextResponse } from 'next/server';
import Stripe from 'stripe';

//* This api acts as a webhook, once the user is done with payment checkout, stripe sends us webhook which will be connected to this api
export async function POST(req: Request) {
  try {
    const body = await req.text();
    // Stripe always sends a signature, we need to verify it
    const signature = headers().get('stripe-signature');

    if (!signature) {
      return new Response('Invalid signature', { status: 400 });
    }

    // Validating that stripe only sends the request, not by any random user
    //* To test the webhook we generally use "ngrok" which forwards localhost to an actual website
    const event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET!,
    );

    //* This is the event to which we are listening with the help of webhooks:
    if (event.type === 'checkout.session.completed') {
      if (!event.data.object.customer_details?.email) {
        throw new Error('Missing user email');
      }

      const session = event.data.object as Stripe.Checkout.Session;

      const { userId, orderId } = session.metadata || {
        userId: null,
        orderId: null,
      };

      if (!userId || !orderId) {
        throw new Error('Invalid request metadata');
      }

      const shippingAddress = session.shipping_details!.address;
      const billingAddress = session.customer_details!.address;

      const updatedOrder = await db.order.update({
        where: {
          id: orderId,
        },
        data: {
          isPaid: true,
          shippingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: shippingAddress!.city!,
              country: shippingAddress!.country!,
              postalCode: shippingAddress!.postal_code!,
              street: shippingAddress!.line1!,
              state: shippingAddress!.state,
            },
          },
          billingAddress: {
            create: {
              name: session.customer_details!.name!,
              city: billingAddress!.city!,
              country: billingAddress!.country!,
              postalCode: billingAddress!.postal_code!,
              street: billingAddress!.line1!,
              state: billingAddress!.state,
            },
          },
        },
      });
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (err) {
    console.error(err); //* Or we can send this to "sentry" - which is an error logging tool

    return NextResponse.json(
      { message: 'Something went wrong', ok: false },
      { status: 500 },
    );
  }
}
