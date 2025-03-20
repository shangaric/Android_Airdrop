import React, { useState } from "react";
import { Button, TextField as Input, Card, CardContent } from "@mui/material";



const ContactShare = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const generateVCF = () => {
    const vCard = `BEGIN:VCARD\nVERSION:3.0\nFN:${name}\nTEL:${phone}\nEMAIL:${email}\nEND:VCARD`;
    const blob = new Blob([vCard], { type: "text/vcard" });
    return blob;
  };

  const downloadVCF = () => {
    const vcfBlob = generateVCF();
    const url = URL.createObjectURL(vcfBlob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contact.vcf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <Card className="p-4 max-w-md mx-auto mt-10">
      <CardContent>
        <h2 className="text-xl font-bold">Download Contact vCard</h2>
        <Input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} className="my-2" />
        <Input placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="my-2" />
        <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="my-2" />
        <Button onClick={downloadVCF} className="mt-4">Download vCard</Button>
      </CardContent>
    </Card>
  );
};

export default ContactShare;
