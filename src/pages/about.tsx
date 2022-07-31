import React from "react";
import { Parallax } from "react-scroll-parallax";

const about = () => {
  return (
    <div className="h-[2000px] flex items-center justify-center">
      <Parallax speed={-10}>
        <div className="bg-black h-14 w-14  mb-16"></div>
      </Parallax>
    </div>
  );
};

export default about;
