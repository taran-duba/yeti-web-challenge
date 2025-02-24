import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "YETI Web Challenge",
  description: "YETI Web Challenge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
