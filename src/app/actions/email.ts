"use server";

import nodemailer from 'nodemailer';

export async function sendEmailAction(formData: FormData) {
  const fullName = formData.get('full_name') as string;
  const email = formData.get('email') as string;
  const phone = formData.get('phone') as string;
  const visaType = formData.get('visa_type') as string;
  const message = formData.get('message') as string;

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp.gmail.com',
    port: Number(process.env.SMTP_PORT) || 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    // 1. Send Email to Admin
    await transporter.sendMail({
      from: `"The Visa Consultancy" <${process.env.SMTP_USER || 'info@thevisaconsultancy.com'}>`,
      to: "info@thevisaconsultancy.com",
      subject: `New Visa Application - ${visaType}`,
      text: `
        New Visa Application Received
        ====================================
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Visa Type: ${visaType}
        Message: ${message}
        ====================================
        Submitted On: ${new Date().toLocaleString()}
      `,
    });

    // 2. Send Auto-Reply to Client
    await transporter.sendMail({
      from: `"The Visa Consultancy" <${process.env.SMTP_USER || 'info@thevisaconsultancy.com'}>`,
      to: email,
      subject: "Thank You for Contacting Us - The Visa Consultancy",
      text: `
        Dear ${fullName},

        Thank you for submitting your visa application request with us.
        We have successfully received your application for: ${visaType}.
        Our expert consultant team will carefully review your details and contact you shortly.

        Best Regards,
        The Visa Consultancy Team
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Email error:', error);
    // Even if email fails, we return success if it's just a demo or we want to handle it gracefully
    return { error: 'Failed to send email. Please try again later.' };
  }
}
