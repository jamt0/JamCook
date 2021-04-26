import { ErrorMessage } from "@hookform/error-message";
import { IonItem, IonLabel, IonTextarea } from "@ionic/react";
import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

interface Props {
  defaultValue: any;
  control: any;
  errors: any;
  rules: any;
  name: string;
  label: string;
  placeHolder: string;
}

const TextArea : FunctionComponent<Props> = ({
  control,
  errors,
  defaultValue,
  name,
  label,
  rules,
  placeHolder
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
      </IonItem>
      <ErrorMessage
        errors={errors}
        name={name}
        as={<div className="text-red-600 px-6" />}
      />
    </>
  );
};

export default TextArea;