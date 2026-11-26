import type { Metadata } from "next";
import "./globals.css";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Dr. Kelkar Physiotherapy Centre | Dr. Dinesh Kelkar (BPT, FCR Apollo, MIAP)",
  description:
    "Leading Physiotherapy & Ergonomic Centre in Noida & Greater Noida West led by Dr. Dinesh Kelkar (22+ Years Experience, UPSMF Regd. No. 8, IAP Regd. No. L-19105). Specialized in Spine, Back & Neck Pain, Post-Op Rehab & Ergonomics.",
  keywords: [
    "Dr. Dinesh Kelkar",
    "Dr Kelkar Physiotherapy Centre",
    "Physiotherapy Noida",
    "Physiotherapy Greater Noida West",
    "Golden I Techzone 4 Physiotherapy",
    "Sector 61 Noida Physiotherapy",
    "Back Pain Doctor Noida",
    "Slip Disc Treatment Noida",
    "Ergonomist Noida",
    "BPT FCR Apollo MIAP",
  ],
  authors: [{ name: "Dr. Dinesh Kelkar" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="stylesheet" href={`${basePath}/css/style.css`} />
      </head>
      <body className="font-sans antialiased bg-slate-50 text-slate-900 selection:bg-teal-700 selection:text-white">
        {children}
      </body>
    </html>
  );
}
