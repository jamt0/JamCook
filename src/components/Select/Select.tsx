import { ErrorMessage } from '@hookform/error-message';
import { IonItem, IonLabel, IonSelect, IonSelectOption } from '@ionic/react';
import React, { FunctionComponent } from 'react';
import { Controller } from 'react-hook-form';

interface Props {
    control: any;
    errors: any;
    defaultValue: any
    setValue: any
}

const Select: FunctionComponent<Props> = ({ control, errors, defaultValue, setValue }) => {

    return (
        <>
        <IonItem className="mb-4">
              <IonLabel position="floating" color="primary">
                Edad
              </IonLabel>
              <Controller
                render={({ onChange, value }) => (
                // as={
                  <IonSelect
                    value={value}
                    onIonChange={onChange}
                    interface="action-sheet"
                    className="mt-2"
                  >
                    <IonSelectOption value="1">Menos de 25</IonSelectOption>
                    <IonSelectOption value="2">25-29</IonSelectOption>
                    <IonSelectOption value="3">30-34</IonSelectOption>
                    <IonSelectOption value="4">35-39</IonSelectOption>
                    <IonSelectOption value="5">40-45</IonSelectOption>
                    <IonSelectOption value="6">45-49</IonSelectOption>
                    <IonSelectOption value="7">50-64</IonSelectOption>
                    <IonSelectOption value="8">65+</IonSelectOption>
                </IonSelect>
                )}
                // }
                setValue={setValue}
                control={control}
                name="age"
                onChangeName="onIonChange"
                defaultValue={defaultValue}
                rules={{
                  required: "Este campo es obligatorio"
                }}
              />
            </IonItem>
            <ErrorMessage
              errors={errors}
              name="age"
              as={<div className="text-red-600 px-6" />}
            />
        </>
    );

};

export default Select;