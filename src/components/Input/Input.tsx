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