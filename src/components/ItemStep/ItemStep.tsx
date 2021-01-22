import React, { FunctionComponent } from "react";

interface Props {}

const ItemStep: FunctionComponent<Props> = ({ children }) => {
  return (
    <div className="p-2 bg-gray-100 mb-2 rounded-md">
      <h3 className="text-sm">{children}</h3>
    </div>
  );
};

export default ItemStep;
