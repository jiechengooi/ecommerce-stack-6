import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CartProvider } from "../contexts/CartContext";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
      <Footer />
    </>
  );
}

export default MyApp;
