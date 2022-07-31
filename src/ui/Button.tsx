import React, {
  ButtonHTMLAttributes,
  DetailedHTMLProps,
  FC,
  ReactNode,
} from "react";

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  icon?: ReactNode;
  CN?: string;
};

/**
 * @param children is usually for a text but you can
 * pass your own element if needed
 */

export const Button: FC<ButtonProps> = ({ CN, icon, children }) => {
  return (
    <button
      className={`bg-blue-500 py-4 px-8 border-none rounded-lg flex items-center justify-between
            ${CN}`}
    >
      <span className="text-white text-center">{children}</span>
      {icon}
    </button>
  );
};
