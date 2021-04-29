import React, { FunctionComponent } from "react";
import Label from "components/Label/Label";
import Chip from "components/Chip/Chip";

interface Props {
  ingredientes: {
    id: string;
    ingrediente: string;
    outline: boolean;
  }[];
}

const ChipGroup: FunctionComponent<Props> = ({ ingredientes }) => {
  return (
    <>
      {ingredientes.map((ingrediente) => {
        return (
          <Chip
            color="secondary"
            outline={ingrediente.outline}
            key={ingrediente.id}
          >
            <Label>{ingrediente.ingrediente}</Label>
          </Chip>
        );
      })}
    </>
  );
};

export default ChipGroup;
