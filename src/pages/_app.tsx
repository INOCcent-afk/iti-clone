import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { SmoothScroll } from "../ui/SmoothScroll";
import { Header } from "../ui/Header";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <SmoothScroll>
        <Header />
        <main>
          <Component {...pageProps} />
        </main>
      </SmoothScroll>
    </ParallaxProvider>
  );
}

export default MyApp;
