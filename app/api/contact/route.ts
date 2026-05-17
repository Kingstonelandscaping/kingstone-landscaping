import { NextResponse } from 'next/server';
import { COMPANY } from '@/lib/constants';

interface ContactBody {
  name: string;
  email: string;
  phone: string;
  service?: string;
  message?: string;
  website?: string;
}

export async function POST(request: Request) {
  try {
    const body: ContactBody = await request.json();

    if (body.website) {
      return NextResponse.json({ success: true });
    }

    if (!body.name?.trim() || !body.email?.trim() || !body.phone?.trim()) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required.' },
        { status: 400 },
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(body.email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 });
    }

    const toEmail = process.env.CONTACT_TO_EMAIL || COMPANY.email;
    const subject = `New inquiry from ${body.name} — Kingstone Landscaping`;
    const text = [
      `Name: ${body.name}`,
      `Email: ${body.email}`,
      `Phone: ${body.phone}`,
      `Service: ${body.service || 'Not specified'}`,
      '',
      'Message:',
      body.message || '(No message provided)',
    ].join('\n');

    const resendKey = process.env.RESEND_API_KEY;

    if (resendKey) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.CONTACT_FROM_EMAIL || 'Kingstone Landscaping <onboarding@resend.dev>',
          to: [toEmail],
          reply_to: body.email,
          subject,
          text,
        }),
      });

      if (!res.ok) {
        const err = await res.text();
        console.error('Resend error:', err);
        return NextResponse.json(
          { error: 'Failed to send message. Please call us directly.' },
          { status: 500 },
        );
      }
    } else if (process.env.SMTP_HOST) {
      const nodemailer = await import('nodemailer');
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT || 587),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });
      await transporter.sendMail({
        from: process.env.CONTACT_FROM_EMAIL || COMPANY.email,
        to: toEmail,
        replyTo: body.email,
        subject,
        text,
      });
    } else {
      console.log('Contact form submission (no email provider configured):', text);
      return NextResponse.json(
        {
          error:
            'Email is not configured yet. Please call (770) 330-9282 or book via Calendly.',
        },
        { status: 503 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact API error:', error);
    return NextResponse.json(
      { error: 'Something went wrong. Please try calling us directly.' },
      { status: 500 },
    );
  }
}
