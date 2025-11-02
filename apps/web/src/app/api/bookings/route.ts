import { NextRequest, NextResponse } from 'next/server';

/**
 * Bookings API - Vercel-compatible version
 * 
 * Since Vercel is serverless and read-only filesystem, we:
 * 1. Log bookings to console (accessible in Vercel logs)
 * 2. Send data to WhatsApp (handled client-side)
 * 3. Can integrate with external services (email, database, webhooks)
 * 
 * For production, integrate with:
 * - Email service (SendGrid, Resend)
 * - Database (Supabase, PostgreSQL)
 * - CRM webhook (Zapier, Make.com)
 * - Google Sheets API
 */
export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Validate required fields
    if (!data.id || !data.contact?.name || !data.contact?.phone) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log booking data (accessible in Vercel logs)
    console.log('âœ… NEW BOOKING RECEIVED:', JSON.stringify({
      timestamp: new Date().toISOString(),
      bookingId: data.id,
      name: data.contact.name,
      phone: data.contact.phone,
      email: data.contact.email,
      specialty: data.concern?.specialty,
      city: data.preference?.city,
      date: data.preference?.preferredDate,
      time: data.preference?.preferredTime,
      items: data.items?.map((item: any) => item.code),
    }, null, 2));

    // TODO: Add external integrations here
    // Example: Send to email service
    // await sendEmail({
    //   to: 'bookings@doqor.com',
    //   subject: `New Booking: ${data.id}`,
    //   body: JSON.stringify(data, null, 2),
    // });

    // Example: Send to webhook/CRM
    // await fetch(process.env.WEBHOOK_URL, {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });

    return NextResponse.json(
      { 
        success: true, 
        bookingId: data.id,
        message: 'Booking received successfully. Check WhatsApp for confirmation.' 
      },
      { status: 201 }
    );

  } catch (error) {
    console.error('â Booking API error:', error);
    return NextResponse.json(
      { error: 'Failed to process booking' },
      { status: 500 }
    );
  }
}

// GET method info
export async function GET() {
  return NextResponse.json(
    { 
      message: 'Doqor Bookings API - Vercel Compatible',
      note: 'Bookings are logged to console and sent via WhatsApp. For database integration, add webhook or email service.',
      methods: ['POST'],
    },
    { status: 200 }
  );
}
