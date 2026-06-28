const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

const app = express();
const PORT = process.env.PORT || 2000;

app.use(cors());
app.use(express.json({ limit: '50kb' }));

app.use(express.static(path.join(__dirname, '../dist/portfolio/browser')));

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'smtp.gmail.com',
  port: parseInt(process.env.SMTP_PORT || '587', 10),
  secure: process.env.SMTP_SECURE === 'true',
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const TO_EMAIL = process.env.CONTACT_EMAIL;
const FROM_EMAIL = process.env.SMTP_USER;

app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, project, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    const projectText = project ? ` - ${project}` : '';
    const mailOptions = {
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: `[Portfolio Contact] New message from ${name}${projectText}`,
      html: `
        <h3>New Contact Form Submission</h3>
        <table style="border-collapse:collapse;width:100%;max-width:600px;">
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;">Name</td><td style="padding:8px 12px;border:1px solid #ddd;">${name}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;">Email</td><td style="padding:8px 12px;border:1px solid #ddd;">${email}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:bold;border:1px solid #ddd;">Project</td><td style="padding:8px 12px;border:1px solid #ddd;">${project || 'N/A'}</td></tr>
        </table>
        <h4>Message:</h4>
        <p style="white-space:pre-wrap;">${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending failed:', error);
    res.status(500).json({ error: 'Failed to send email. Please try again later.' });
  }
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/portfolio/browser/index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
