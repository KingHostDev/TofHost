import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req: Request) {
  try {
    const secret = process.env.PAYSTACK_SECRET_KEY!;
    const body = await req.text(); // Get raw body for verification
    
    // 1. Verify the Paystack Signature
    const hash = crypto
      .createHmac('sha512', secret)
      .update(body)
      .digest('hex');

    const signature = req.headers.get('x-paystack-signature');

    if (hash !== signature) {
      return new NextResponse('Invalid Signature', { status: 401 });
    }

    // 2. Parse the Event
    const event = JSON.parse(body);

    // 3. Handle successful payment
    if (event.event === 'charge.success') {
      const { reference, amount, customer, metadata } = event.data;

      console.log(`✅ Payment Securely Received in Escrow: ${reference}`);
      
      // LOGIC: Update your database here
      // await db.order.update({ 
      //   where: { ref: reference }, 
      //   data: { status: 'escrow_held' } 
      // });
    }

    return new NextResponse('Webhook Received', { status: 200 });
  } catch (err) {
    console.error('Webhook Error:', err);
    return new NextResponse('Internal Error', { status: 500 });
  }
}