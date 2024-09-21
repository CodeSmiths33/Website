import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navigation";
export const metadata: Metadata = {
  title: "CodeSmiths",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="width-full bg-gray-50 text-gray-950 antialiased">
              <Navbar />
              <div className="mx-auto max-w-[700px] px-6 pb-24 pt-10 md:px-6 md:pb-44 md:pt-12">
                {children}
              </div>
          </body>
    </html>
  );
}
