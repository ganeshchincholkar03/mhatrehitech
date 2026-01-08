// app/layout.tsx
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { DonationProvider } from "./context/donationContext";
import NextTopLoader from "nextjs-toploader";
import type { ReactNode } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} opacity-[1] bg-slate-50 text-slate-800 antialiased`}
      >
        <NextTopLoader color="#FF4D7E" />

        <DonationProvider>
          <ThemeProvider attribute="class">
            <Aoscompo>
              <Header />
              {children}
              <Footer />
            </Aoscompo>
            <ScrollToTop />
          </ThemeProvider>
        </DonationProvider>
      </body>
    </html>
  );
}
