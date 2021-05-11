import React, { Fragment, FunctionComponent } from "react";
import { ErrorText, Label, Item } from "JamUI";
import { ErrorMessage } from "@hookform/error-message";
import { IonTextarea } from "@ionic/react";
import { Controller } from "react-hook-form";

type Props = {
  defaultValue: any;
  control: any;
  errors: any;
  rules: any;
  name: string;
  label: string;
  placeHolder: string;
};

const TextArea: FunctionComponent<Props> = (props) => (
  <Fragment>
    <Item className="mb-4">
      <Label position="floating" color="primary">
        {props.label}
      </Label>
      <Controller
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <IonTextarea
            placeholder={props.placeHolder}
            rows={4}
            className="mt-2"
            onIonChange={onChange}
            onIonBlur={onBlur}
            value={value} //comentar esto soluciona lo del autocompletado, pero daña los valores iniciales
          />
        )}
        control={props.control}
        name={props.name}
        defaultValue={props.defaultValue}
        rules={props.rules}
      />
    </Item>
    <ErrorMessage errors={props.errors} name={props.name} as={<ErrorText />} />
  </Fragment>
);

export default TextArea;
