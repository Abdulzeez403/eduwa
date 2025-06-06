import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import { Toaster } from "@/components/ui/toaster";
import { PromoModal } from "@/components/promo-modal";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Eduwa - Software Development Company",
  description:
    "Eduwa specializes in website development, mobile app development, embedded systems, and end-to-end digital product solutions.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Header />
        <Providers>
          {children}
          {/* <PromoModal /> */}
          <Toaster />
        </Providers>
        <Footer />
      </body>
    </html>
  );
}
