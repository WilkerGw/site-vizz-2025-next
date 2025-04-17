import React from 'react';
import '../styles/global.css'; 
export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Ótica Vizz</title>
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}