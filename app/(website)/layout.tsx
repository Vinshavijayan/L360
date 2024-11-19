import type { Metadata } from "next";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer/footer";

export const metadata: Metadata = {
  title: "Lumo 360",
  description: "Your Gateway to Global Education",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
