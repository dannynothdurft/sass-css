import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SCSS / CSS",
  description: "Syteles",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body>{children}</body>
    </html>
  );
}
