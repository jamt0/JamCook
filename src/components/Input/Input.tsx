import { ErrorMessage } from '@hookform/error-message';
import { IonInput, IonItem, IonLabel } from '@ionic/react';
import React, { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';

interface Props {
    control: any;
    errors: any;
    defaultValue: any;
    setValue: any;
}

const Input: FunctionComponent<Props> = ({ control, errors, defaultValue, setValue }) => {

    return (
        <>
        <IonItem className="mb-4">
              <IonLabel position="floating" color="primary">
                Correo Electrónico
              </IonLabel>
              <Controller
                 render={({ onChange, value }) => (
                // as={
                  <IonInput
                    autocomplete="email"
                    className="mt-2"
                    type="email"
                    onIonChange={onChange}
                    value={value}
                  />
                 )}
                // }
                setValue={setValue}
                control={control}
                name="email"
                onChangeName="onIonChange"
                defaultValue={defaultValue}
                rules={{
                  required: "Este campo es obligatorio",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "Correo electrónico invalido",
                  },
                }}
              />
            </IonItem>
            <ErrorMessage
              errors={errors}
              name="email"
              as={<div className="text-red-600 px-6" />}
            />
        </>
    );

};

export default Input;