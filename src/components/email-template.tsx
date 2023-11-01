import * as React from "react";

interface EmailTemplateProps {
  name: string;
  email: string;
  brief: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  brief,
}) => (
  <div>
    <h1>Bibi, tu as reçu un nouveau message</h1>
    <p>de : {name}</p>
    <p>{email}</p>
    <p>{brief}</p>
  </div>
);
