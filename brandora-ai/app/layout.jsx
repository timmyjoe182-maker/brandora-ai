import "./globals.css";

export const metadata = {
  title: "Brandora AI",
  description: "Premium AI content studio for modern brands.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
