import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";

const interFont = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

// metadata
export const metadata: Metadata = {
  title: "Study App",
  description: "For better self-improvement",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${interFont.variable} ${jetbrainsMono.variable} ${jetbrainsMono.className} antialiased`}
        >
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
