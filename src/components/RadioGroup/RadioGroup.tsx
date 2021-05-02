import React, { FunctionComponent, Fragment } from "react";
import Radio from "components/Radio/Radio";
import { IonRadioGroup } from "@ionic/react";
import { Controller } from "react-hook-form";

type Option = {
  description: string;
  value: string;
};

type Props = {
  options: undefined | Option[];
  defaultOption: undefined | string;
  control?: any;
  name?: string;
};

const RadioGroup: FunctionComponent<Props> = ({ name = "radio", ...props }) => (
  <Controller
    render={({ field: { onChange, value } }) => (
      <IonRadioGroup value={value} onIonChange={onChange}>
        {props.options ? (
          props.options.map((option) => {
            return (
              <Radio value={option.value} key={option.value}>
                {option.description}
              </Radio>
            );
          })
        ) : (
          <Fragment />
        )}
      </IonRadioGroup>
    )}
    control={props.control}
    name={name}
    defaultValue={props.defaultOption}
  />
);
export default RadioGroup;
