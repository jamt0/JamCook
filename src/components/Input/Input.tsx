import React, { Fragment, FunctionComponent } from "react";
import { IonInput } from "@ionic/react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import Item from "components/Item/Item";
import Label from "components/Label/Label";

interface Props {
  control: any;
  errors: any;
  defaultValue: any;
  name: string;
  rules: any;
  label: string;
  type: any;
}

const Input: FunctionComponent<Props> = ({
  control,
  errors,
  defaultValue,
  name,
  label,
  rules,
  type
}) => {
  return (
    <Fragment>
      <Item className="mb-4" lines="full">
        <Label position="floating" color="primary">
          {label}
        </Label>
        <Controller
          render={({
            field: { onChange, onBlur, value, ref }
          }) => (
            <IonInput
              autocomplete="new-password" //Por ahora la solucion fue dejar el value para permitir inicializar, pero no funciona el autocomplete, buscar solucion a esto despues
              className="mt-2"
              onIonChange={onChange}
              onIonBlur={onBlur}
              type={type}
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

export default Input;