import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ParallaxProvider } from "react-scroll-parallax";
import { SmoothScroll } from "../ui/SmoothScroll";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ParallaxProvider>
      <SmoothScroll>
        <main>
          <Component {...pageProps} />
        </main>
      </SmoothScroll>
    </ParallaxProvider>
  );
}

export default MyApp;
