import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendVerficationEmail = async (email, token) => {
    const confirmLink = `http://localhost:3000/auth/new-verification?token=${token}`;

    await resend.emails.send({
        from : "onboarding@resend.dev",
        to : email,
        subject : "Confirm Your Email",
        html : `<P>Click<a href="${confirmLink}"> here </a> to confirm your email </P>`
    })
}