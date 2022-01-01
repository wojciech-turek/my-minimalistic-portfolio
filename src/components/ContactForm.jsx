import React, { useState } from "react";
import emailjs from "emailjs-com";
import { Alert, TextField } from "@mui/material";
import { LoadingButton } from "@mui/lab";

export default function ContactForm() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  async function sendEmail(e) {
    e.preventDefault();
    setSending(true);
    await emailjs.send(
      "smtp_server",
      "template_6pL0MhU6",
      {
        email: email,
        message: message,
      },
      "user_GtDfjyoxLr4JYwgOTanbi"
    );
    setSending(false);
    setSent(true);
  }

  return (
    <div>
      <form className="contact-form" onSubmit={sendEmail}>
        <div className="inputBg">
          <TextField
            size="small"
            placeholder="Your email"
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            multiline
            fullWidth
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Your message to me"
          />
          <LoadingButton variant="contained" loading={sending} type="submit">
            Send
          </LoadingButton>
          {sent ? <Alert severity="success">Message sent!</Alert> : ""}
        </div>
      </form>
    </div>
  );
}
