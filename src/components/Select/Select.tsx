import { ErrorMessage } from "@hookform/error-message";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { FunctionComponent } from "react";
import { Controller } from "react-hook-form";

type Opcion = {
  label: string;
  value: string;
};

interface Props {
  control: any;
  errors: any;
  defaultValue: any;
  name: string;
  label: string;
  rules: any;
  opciones: Opcion[];
}

const Select: FunctionComponent<Props> = ({
  opciones,
  control,
  errors,
  defaultValue,
  name,
  label,
  rules
}) => {
  return (
    <>
      <IonItem className="mb-4">
        <IonLabel position="floating" color="primary">
          {label}
        </IonLabel>
        <Controller
          render={({ field: { onChange, value } }) => (
            <IonSelect
              value={value}
              onIonChange={onChange}
              interface="action-sheet"
              className="mt-2"
            >
              {opciones.map((opcion) => {
                return (
                  <IonSelectOption value={opcion.value} key={opcion.value}>
                    {opcion.label}
                  </IonSelectOption>
                );
              })}
            </IonSelect>
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

export default Select;