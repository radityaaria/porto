import { Geist } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geistSans.className}`}>
      <Component {...pageProps} />
    </div>
  );
}
