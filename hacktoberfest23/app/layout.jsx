import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";
import { JetBrains_Mono } from "next/font/google";
import Head from "next/head";

const jetBrains_mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700", "800"],
});

export const metadata = {
  title: "Hacktoberfest'23 | COSC",
  description: "CBIT Hacktoberfest Hackathon 2023",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body className={jetBrains_mono.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
