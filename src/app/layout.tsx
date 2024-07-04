import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Perfil de Usuario - Security and System",
  description:
    "Página de perfil de usuario creada como prueba técnica para el puesto de desarrollador frontend en Security and System. Incluye información básica, intereses y una sección de contacto.",
  authors: [{ name: "Lucas Quiroga" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
