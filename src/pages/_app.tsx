// import Footer from "@/Components/footer";
import Header from "@/Components/header";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { Lexend, Caveat } from "next/font/google";

export const metadata: Metadata = {
  title: "All you can design",
  description: "all design",
};
const caveat = Caveat({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true, //preload keyfonts to reduce loading time.
  variable: "--font-cursue",
});

const recoleta = localFont({ src: "./fonts/Recoleta-RegularDEMO.otf", variable: "--font-heading" });

const lexend = Lexend({
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true, //preload keyfonts to reduce loading time.
  variable: "--font-body",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`${recoleta.variable} ${lexend.variable} ${caveat.variable}`}>
      <Header />
      <Component {...pageProps} />
      {/* <Footer /> */}
    </div>
  );
}
