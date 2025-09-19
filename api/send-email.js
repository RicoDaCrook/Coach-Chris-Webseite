import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, phone, message, isAnonymous } = req.body;

  // Gmail SMTP Setup
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'kontakt@coachchrisberatung.de',
      pass: 'dein-app-passwort' // Nicht dein normales Passwort!
    }
  });

  try {
    await transporter.sendMail({
      from: 'kontakt@coachchrisberatung.de',
      to: 'kontakt@coachchrisberatung.de',
      subject: `Neue Nachricht von ${isAnonymous ? 'Anonym' : name}`,
      html: `
        <h2>Neue Kontaktanfrage</h2>
        <p><strong>Name:</strong> ${isAnonymous ? 'Anonym' : name}</p>
        <p><strong>Email:</strong> ${email || 'Nicht angegeben'}</p>
        <p><strong>Telefon:</strong> ${phone || 'Nicht angegeben'}</p>
        <h3>Nachricht:</h3>
        <p>${message}</p>
      `
    });

    res.status(200).json({ success: true });
  } catch (error) {
    res.status(500).json({ error: 'Email konnte nicht gesendet werden' });
  }
}
