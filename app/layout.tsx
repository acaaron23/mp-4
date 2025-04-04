import Header from "@/app/components/header";
import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import React from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Phone Number Validator",
    description: "App meant to allow users to check the validity of phone numbers.",
};
export default function RootLayout({children,}: Readonly<{
    children: React.ReactNode;}>) {
    return (
        <html lang = "en">
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-200`}>
                <Header />
                {children}
            </body>
        </html>
    );
}