import React, { FC, forwardRef } from "react";

interface Props {
  width?: number;
  height?: number;
  cn?: string;
}

export const Debris = forwardRef<HTMLDivElement, Props>(
  ({ width = 80, height = 40, cn }, ref) => {
    return (
      <div
        ref={ref}
        className={`bg-black rounded-lg absolute ${cn}`}
        style={{ width, height }}
      ></div>
    );
  }
);

Debris.displayName = "Debris";
