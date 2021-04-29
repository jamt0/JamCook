import React, { Fragment, FunctionComponent } from "react";
import Label from "components/Label/Label";
import Item from "components/Item/Item";
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
}

const TextArea: FunctionComponent<Props> = ({
  defaultValue,
  control,
  errors,
  rules,
  name,
  label,
  placeHolder,
}) => {
  return (
    <Fragment>
      <Item className="mb-4">
        <Label position="floating" color="primary">
          {label}
        </Label>
        <Controller
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <IonTextarea
              placeholder={placeHolder}
              rows={4}
              className="mt-2"
              onIonChange={onChange}
              onIonBlur={onBlur}
              value={value} //comentar esto soluciona lo del autocompletado, pero daña los valores iniciales
            />
          )}
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={rules}
        />
      </Item>
      <ErrorMessage
        errors={errors}
        name={name}
        as={<div className="text-red-600 px-6" />}
      />
    </Fragment>
  );
};

export default TextArea;
