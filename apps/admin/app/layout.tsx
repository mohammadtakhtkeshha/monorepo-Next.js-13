import type { Metadata } from "next";
import "ui/styles.css";

export const metadata: Metadata = {
  title: "Create Turborepo",
  description: "Generated by create turbo",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className="bg-red-900">{children}</body>
    </html>
  );
}
