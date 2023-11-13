import "./globals.css";
import type { Metadata } from "next";
import { Cinzel } from "@next/font/google";
import { CartProvider } from "./context/CartContext";
// import { Inter } from 'next/font/google'
// const inter = Inter({ subsets: ['latin'] })
import toast, { Toaster } from "react-hot-toast";

const cinzel = Cinzel({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Clothing store",
  description: "Clothing store",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CartProvider>
      <html lang="en">
        <body className={cinzel.className}>
          {children}
          <Toaster />
        </body>
      </html>
    </CartProvider>
  );
}
