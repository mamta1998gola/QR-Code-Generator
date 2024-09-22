'use client';

import React, { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const QRCodeGenerator = () => {
  const [inputText, setInputText] = useState('');
  const [qrCodeText, setQRCodeText] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const generateQRCode = () => {
    setQRCodeText(inputText);
  };

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>QR Code Generator</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <Input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Enter text for QR code"
          />
          <Button onClick={generateQRCode} className="w-full">
            Generate QR Code
          </Button>
          {qrCodeText && (
            <div className="flex justify-center">
              <QRCodeSVG value={qrCodeText} size={200} />
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default QRCodeGenerator;
