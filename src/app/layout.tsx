import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";

import { siteConfig } from "@/config";
import Header from "@/components/Header/Header";
import HotjarScript from "@/components/HotjarScript/HotjarScript";
import GoogleScript from "@/components/GoogleScript/GoogleScript";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: `%s | ${siteConfig.title}`,
    default: siteConfig.title,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <HotjarScript />
      <GoogleScript />
      <body className={inter.className}>
        <Providers>
          <Header />
          {children}
        </Providers>
      </body>
    </html>
  );
}
