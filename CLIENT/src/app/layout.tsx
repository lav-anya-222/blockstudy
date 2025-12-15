import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BlockyAssistant } from "@/components/ai/BlockyAssistant";
import { BackToTopButton } from "@/components/ui/BackToTopButton";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BlockStudy - Blockchain Education Platform",
  description: "Master the decentralized future with our immersive platform.",
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <BlockyAssistant />
        <BackToTopButton />
      </body>
    </html>
  );
}
