// API Route — modtager kontaktformular-data og sender en mail.
//
// Denne fil kører på SERVEREN (ikke i browseren), hvilket er sikkert fordi:
// - Dine mail-credentials (adgangskode) er aldrig synlige for besøgende
// - Den læser fra .env.local som kun eksisterer på din server
//
// Sådan bruger du Simply's SMTP:
// 1. Log ind på simply.com → "Hosting" → "E-mail" → "Konfiguration"
// 2. Find SMTP-indstillingerne (host, port, brugernavn, adgangskode)
// 3. Kopier dem ind i din .env.local fil

import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    // 1. Hent formular-data fra anmodningen
    const body = await request.json();
    const { navn, virksomhed, instagram, email, telefon, besked } = body;

    // 2. Simpel validering — tjek at de vigtigste felter er udfyldt
    if (!navn || !email || !telefon) {
      return NextResponse.json(
        { fejl: "Udfyld venligst navn, email og telefon." },
        { status: 400 }
      );
    }

    // 3. Opret en nodemailer "transporter" med Simply SMTP
    //    Disse værdier hentes fra din .env.local fil
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,       // f.eks. "smtp.simply.com"
      port: Number(process.env.EMAIL_PORT) || 587,
      secure: false,                       // false = bruger STARTTLS på port 587
      auth: {
        user: process.env.EMAIL_USER,      // din Simply e-mailadresse
        pass: process.env.EMAIL_PASS,      // dit Simply mailkodeord
      },
      tls: {
        rejectUnauthorized: false,         // tillader self-signed certifikater
      },
    });

    // 4. Definer mail-indholdet
    const mailIndstillinger = {
      from: `"JalalVisuals Kontaktformular" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,            // info@jalalvisuals.dk
      replyTo: email,                      // så du kan svare direkte til kunden
      subject: `Ny henvendelse fra ${navn}${virksomhed ? ` – ${virksomhed}` : ""}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: #DC2626; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 20px;">
              Ny henvendelse via JalalVisuals.dk
            </h2>
          </div>
          <div style="background: #f8f9fa; padding: 24px; border-radius: 0 0 8px 8px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; width: 140px; font-weight: bold;">Navn</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${navn}</td>
              </tr>
              ${virksomhed ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-weight: bold;">Virksomhed</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${virksomhed}</td>
              </tr>` : ""}
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-weight: bold;">Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${telefon ? `
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0; color: #666; font-weight: bold;">Telefon</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #e0e0e0;">${telefon}</td>
              </tr>` : ""}
            </table>
            <div style="margin-top: 20px;">
              <p style="color: #666; font-weight: bold; margin-bottom: 8px;">Besked / Opgavebeskrivelse:</p>
              <div style="background: white; padding: 16px; border-radius: 6px; border: 1px solid #e0e0e0; white-space: pre-wrap; line-height: 1.6;">
                ${besked.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
              </div>
            </div>
          </div>
        </div>
      `,
    };

    // 5. Send mailen
    await transporter.sendMail(mailIndstillinger);

    // 6. Skriv til Google Sheets (fejler lydløst hvis URL mangler)
    if (process.env.GOOGLE_SHEETS_URL) {
      try {
        const sheetsRes = await fetch(process.env.GOOGLE_SHEETS_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ navn, virksomhed, instagram, email, telefon, besked }),
          redirect: "follow",
        });
        const sheetsData = await sheetsRes.text();
        console.log("Sheets svar:", sheetsData);
      } catch (sheetsErr) {
        console.error("Google Sheets fejl:", sheetsErr);
      }
    }

    return NextResponse.json({ success: true });
  } catch (fejl) {
    // Log fejlen på serveren (vises i terminalen under npm run dev)
    console.error("Mail-fejl:", fejl);
    return NextResponse.json(
      { fejl: "Der opstod en fejl. Prøv igen eller kontakt os direkte." },
      { status: 500 }
    );
  }
}
