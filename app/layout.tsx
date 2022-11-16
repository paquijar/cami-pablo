import { ReactNode } from "react";
import "../styles/globals.css";
import { Montserrat } from "@next/font/google";

const montserrat = Montserrat({
  variable: "--font-montserrat",
});

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <html lang="es" className={montserrat.variable}>
      <head>
        <title>Cami y Pablo ♥️</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-pink-300 text-gray-900">
        <div className="p-5 py-10">{children}</div>
      </body>
    </html>
  );
};

export default RootLayout;
