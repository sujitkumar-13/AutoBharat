import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TheAutoBharat - India's Auto Infotainment Hub",
  description: "India's premier automotive content creator bringing you the latest in supercars, reviews, and racing culture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@4.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
