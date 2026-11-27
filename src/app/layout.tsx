import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";

export const metadata: Metadata = {
  title: "Exeter Circular Business Network | Local business. Less waste.",
  description:
    "A nonprofit student initiative connecting Exeter businesses to share surplus resources, reduce waste and keep useful things in circulation. Completely free membership, now and always.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
