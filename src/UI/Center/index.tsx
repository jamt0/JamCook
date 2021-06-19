import { FunctionComponent } from "react";

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
  ...props
}) => {
  return (
    <div
      className={`flex flex-${direction} justify-${justify} content-${content} items-${content} ${className}`}
    >
      {props.children}
    </div>
  );
};

export default Center;
