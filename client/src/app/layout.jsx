import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/section/Header";
import Footer from "@/components/section/Footer";
import { Toaster } from "@/components/ui/sonner";
import StoreProveder from "@/providers/StoreProvider";
import AuthProvider from "@/providers/AuthProvider";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "NextPlay",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={roboto.variable}>
      <body className="min-h-screen flex flex-col">
        <StoreProveder>
          <AuthProvider>
            <Header />
            <main className="grow bg-black/90 mt-20">{children}</main>
            <Toaster />
            <Footer />
          </AuthProvider>
        </StoreProveder>
      </body>
    </html>
  );
}
