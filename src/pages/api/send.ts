import { EmailTemplate } from "@/components/email-template";
import type { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, brief } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
      to: ["a.pires130@gmail.com"],
      subject: "Hello world",
      text: "Votre version texte de l'email ici",
      react: EmailTemplate({ name, email, brief }),
    });

    res.status(200).json(data); // Correction ici
  } catch (error) {
    res.status(500).json({ error }); // Correction ici
  }
}
