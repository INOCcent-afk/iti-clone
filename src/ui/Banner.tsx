import React from "react";
import { Button } from "./Button";

export const Banner = () => {
  return (
    <section className="h-[800px] bg-[#d4e0e6] p-3 flex relative">
      <h1 className="text-black text-3xl font-bold basis-1/2">
        <div>WE'RE</div>
        <div>HUMANS</div>
        <div>& IT</div>
        <div>EXPERTS</div>
      </h1>
      <div className="flex flex-col gap-2 basis-1/2 h-[400px] mt-32">
        <Button>Human Solutions</Button>
        <Button>IT Solutions</Button>
      </div>
    </section>
  );
};
