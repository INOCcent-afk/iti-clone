import Link from "next/link";
import React from "react";
import { Button } from "./Button";
import { Menu } from "./Menu";

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

        <Menu />

        <Button CN="hidden md:flex">Let's Talk</Button>
      </div>
    </header>
  );
};
