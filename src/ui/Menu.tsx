import React, { ButtonHTMLAttributes, DetailedHTMLProps, FC } from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export const Menu: FC<ButtonProps> = ({ ...props }) => {
  return (
    <button
      className="flex h-[20px] w-[40px] flex-col justify-between group"
      {...props}
    >
      <span className="bg-black h-[2px] w-full"></span>
      <span
        className={`bg-black h-[2px] w-full relative 
              after:absolute after:bg-white after:top-[1px] after:left-3/4 group-hover:after:left-[-10px] after:duration-500 after:w-[10px] after:h-[10px] after:translate-x-[-50%] after:translate-y-[-50%]
              before:absolute before:bg-white before:top-[1px] before:left-[110%] group-hover:before:left-3/4 before:duration-500 before:w-[10px] before:h-[10px] before:translate-x-[-50%] before:translate-y-[-50%]
              ease-in-out
              `}
      ></span>
      <span className="bg-black h-[2px] w-full"></span>
    </button>
  );
};
