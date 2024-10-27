import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./github-markdown.css"; // Add this line

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "M2J",
  description: "Markdown to Jira",
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
