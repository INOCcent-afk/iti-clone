import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { SmoothScroll } from "../ui/SmoothScroll";
import { Header } from "../ui/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SmoothScroll>
      <ParallaxProvider>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </ParallaxProvider>
    </SmoothScroll>
  );
}

export default MyApp;
