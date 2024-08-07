import type { Metadata } from "next";
import { AuthProvider } from "@/context";
import { Poppins } from "next/font/google";
import Providers from "./Providers";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Shared Links Custom",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark bg-black">
      <body className={`${poppins.className} relative`}>
        <Providers>
          <AuthProvider>
            <div className="relative">{children}</div>
          </AuthProvider>
        </Providers>
      </body>
    </html>
  );
}
