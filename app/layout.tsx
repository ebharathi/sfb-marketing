import type { Metadata } from "next";
import { Anton, Instrument_Sans } from "next/font/google";
import "./globals.css";

const display = Anton({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "SFB | Snaxzastic & Crespology",
  description:
    "Slayd Foods Bharat: Snaxzastic (Snacking Anywhere) and Crespology (Crispy Vibes Only). Roasted and crafted-crunch snacks, and a home for our trade partners.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
