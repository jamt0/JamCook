import React, { FunctionComponent } from "react";

interface Props {
  justify?: "start" | "center" | "end" | undefined;
  content?: "start" | "center" | "end" | undefined;
  direction?: "row" | "col" | undefined;
  className?: string;
}

const Center: FunctionComponent<Props> = ({
  justify = "center",
  content = "center",
  direction = "row",
  className = "",
  children,
}) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} content-${content} items-${content} ${className}`}
    >
      {children}
    </div>
  );
};

export default Center;
