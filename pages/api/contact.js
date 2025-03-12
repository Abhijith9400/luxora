import nodemailer from 'nodemailer';

const handler = async (req, res) => { // No TypeScript-specific types here
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, phone, packageType, message } = req.body;

  if (!name || !email || !phone || !packageType || !message) {
    return res.status(400).json({ message: 'Please fill all the fields.' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      subject: `Message from ${name}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Package:</strong> ${packageType}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Error sending email:');
    res.status(500).json({ message: 'Something went wrong. Try again later.' });
  }
};

export default handler;
