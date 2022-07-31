import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="flex p-4 justify-between items-center">
      <div className="">
        <Link href="/">
          <a className="font-bold">
            IT INTELLIGENCE <br />
            HUMAN INTELLIGENCE.
          </a>
        </Link>
      </div>
      <div className="flex justify-between items-center gap-10">
        <div className="">Fr</div>

        <button className="flex h-[20px] w-[40px] flex-col justify-between group">
          <span className="bg-black h-[2px] w-full"></span>
          <span
            className={`bg-black h-[2px] w-full relative 
                    after:absolute after:bg-white after:top-[1px] after:left-3/4 group-hover:after:left-[-10px] after:duration-300 after:w-[10px] after:h-[10px] after:translate-x-[-50%] after:translate-y-[-50%]
                    before:absolute before:bg-white before:top-[1px] before:left-[110%] group-hover:before:left-3/4 before:duration-300 before:w-[10px] before:h-[10px] before:translate-x-[-50%] before:translate-y-[-50%]
                    `}
          ></span>
          <span className="bg-black h-[2px] w-full"></span>
        </button>
      </div>
    </header>
  );
};
