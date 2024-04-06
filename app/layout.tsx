import type { Metadata } from "next";
import Navigation from "@/components/Navigation";
import "./globals.css";

// import DropdownMenu from "@/components/DropdownMenu";



export const metadata: Metadata = {
  title: "Rwanda Policies",
  description: "Find Policies in Rwanda",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='relative'>
        
        <Navigation />
        {children}

        
        </body>
    </html>
  );
}
