import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GAN Assurances Paris Vaugirard - Expert Multirisques, Prévoyance & Retraite",
  description: "Agence GAN Assurances à Paris Vaugirard. Spécialiste en assurances multirisques professionnelles, prévoyance et solutions retraite. 15 ans d'expérience, conseils sur-mesure.",
  keywords: "assurance, GAN, Paris, Vaugirard, multirisques, prévoyance, retraite, professionnel, entreprise",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
        <body className={inter.className}>{children}</body>
    </html>
  );
}