import "@/styles/globals.css";
import Script from "next/script";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
  <Script
    src="https://cdn-cookieyes.com/client_data/bdb26a65eba174901d8259a7/script.js"
    strategy="beforeInteractive"
  ></Script>;
}
