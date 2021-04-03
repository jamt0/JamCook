import { ErrorMessage } from "@hookform/error-message";
import { IonInput, IonItem, IonLabel } from "@ionic/react";
import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface Props {
  defaultValue: any;
  control: any;
  errors: any;
  rules: any;
  name: string;
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
    <>
      <IonItem className="mb-4">
        <IonLabel position="floating" color="primary">
          {label}
        </IonLabel>
        <Controller
          render={({
            field: { onChange, onBlur, value, ref }
          }) => (
            <IonInput
              autocomplete="email"
              className="mt-2"
              onIonChange={onChange}
              onIonBlur={onBlur}
              // value={value} esto soluciona lo del autocompletado, pero daña los valores iniciales
              type={type}
              // value={value}
            />
          )}
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={rules}
        />
      </IonItem>
      <ErrorMessage
        errors={errors}
        name={name}
        as={<div className="text-red-600 px-6" />}
      />
    </>
  );
};

export default Input;