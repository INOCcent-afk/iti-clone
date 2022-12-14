import type { NextPage } from "next";
import Head from "next/head";
import { Parallax } from "react-scroll-parallax";
import { Banner } from "../ui/Banner";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Your IT Experts | ITI</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Parallax speed={-10}>
        <div className="h-[2000px] bg-white"></div>
      </Parallax>
    </>
  );
};

export default Home;
