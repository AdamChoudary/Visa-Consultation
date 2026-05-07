"use server";

import nodemailer from 'nodemailer';

export async function sendEmailAction(formData: FormData) {
  // Capture all fields from FormData
  const allFields: Record<string, string> = {};
  formData.forEach((value, key) => {
    if (typeof value === 'string' && value.trim() !== '') {
      // Clean up key names for display (e.g., full_name -> Full Name)
      const label = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
      allFields[label] = value;
    }
  });

  const fullName = allFields['Full Name'] || 'Applicant';
  const email = allFields['Email'] || '';
  const visaType = allFields['Visa Type'] || 'General Enquiry';

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

  // Prepare email text body with all fields
  const fieldsText = Object.entries(allFields)
    .map(([key, value]) => `${key}: ${value}`)
    .join('\n        ');

  try {
    // 1. Send Email to Admin
    await transporter.sendMail({
      from: `"The Visa Consultancy" <${process.env.SMTP_USER || 'info@thevisaconsultancy.com'}>`,
      to: "info@thevisaconsultancy.com",
      subject: `New Visa Application - ${visaType} (${fullName})`,
      text: `
        New Visa Application Received
        ====================================
        ${fieldsText}
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
