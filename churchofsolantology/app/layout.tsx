import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Church of Solanatology",
  description: "Official website of the Church of Solanatology, run by l3o and d4v1d",
  icons: {
    icon: [
      {
        url: "/church-building.png",
        sizes: "any",
      },
    ],
    apple: [
      {
        url: "/church-building.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: ["/church-building.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/church-building.png" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
