import React from 'react';
import type { Metadata } from 'next';
import { Heebo } from 'next/font/google';
import './globals.css';

const heebo = Heebo({
  subsets: ['latin'],
  weight: ['400','700'],
  variable: '--font-heebo',
  display: 'swap',
});


export const metadata: Metadata = {
  title: 'Memorama',
  description:
    "Bienvenue sur Memorama, une plateforme web innovante où vous pouvez publier, lire et vérifier des mémoires et des rapports de stage. Profitez de nos fonctionnalités avancées de vérification du plagiat pour garantir l'intégrité académique de vos documents."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={heebo.className}>{children}</body>
    </html>
  );
}
