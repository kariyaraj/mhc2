'use client';
import { ClerkProvider } from "@clerk/nextjs";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense, type PropsWithChildren } from "react";
import { siteConfig } from "@/config";
import { ModalProvider } from "@/providers/modal-provider";
import { ToasterProvider } from "@/providers/toaster-provider";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = siteConfig;

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
    <ClerkProvider
      appearance={{
        variables: {
          colorPrimary: "#6F5AF6",
        },
        layout: {
          logoPlacement: "none",
        },
      }}
    >
      
      <html lang="en">
        {/* <CrispProvider /> */}
        {/* <WebChatContainer config={webChatOptions}/> */}
        <body className={inter.className}>
          
          <ModalProvider />
          <ToasterProvider />
          {children}
        </body>
        
      </html>
    </ClerkProvider>
    </Suspense>
  );
}
