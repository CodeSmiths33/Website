import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
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
      <body className="width-full bg-primary flex justify-center text-primary">
          <div className="w-[50%]">
            <Navbar />
            {children}
          </div>
      </body>
    </html>
  );
}
