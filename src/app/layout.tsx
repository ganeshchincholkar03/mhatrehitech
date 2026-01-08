// app/layout.tsx
import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import { ThemeProvider } from "next-themes";
import ScrollToTop from "@/components/ScrollToTop";
import Aoscompo from "@/utils/aos";
import { DonationProvider } from "./context/donationContext";
import SessionProviderComp from "@/components/nextauth/SessionProvider";
import { AuthDialogProvider } from "./context/AuthDialogContext";
import NextTopLoader from "nextjs-toploader";
import { getServerSession } from "next-auth"; // if using next-auth
import type { ReactNode } from "react";

const montserrat = Montserrat({ subsets: ["latin"] });

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  // Fetch the session here
  const session = await getServerSession(); // replace with your next-auth config if needed

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${montserrat.className} opacity-[1] bg-slate-50 text-slate-800 antialiased`}
      >
        <NextTopLoader color="#FF4D7E" />

        <DonationProvider>
          <AuthDialogProvider>
            <SessionProviderComp session={session}>
              <ThemeProvider
                attribute="class"
                enableSystem
                defaultTheme="system"
              >
                <Aoscompo>
                  <Header />
                  {children}
                  <Footer />
                </Aoscompo>
                <ScrollToTop />
              </ThemeProvider>
            </SessionProviderComp>
          </AuthDialogProvider>
        </DonationProvider>
      </body>
    </html>
  );
}
