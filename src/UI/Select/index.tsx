import { Fragment, FunctionComponent } from "react";
import { IonSelect, IonSelectOption } from "@ionic/react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";
import { ErrorText, Item, Label } from "UI";

type Option = {
  label: string;
  value: string;
};

type Props = {
  defaultValue: any;
  control: any;
  errors: any;
  name: string;
  label: string;
  rules: any;
  options: Option[] | undefined;
};

const Select: FunctionComponent<Props> = (props) => (
  <Fragment>
    <Item className="mb-4">
      <Label position="floating" color="primary">
        {props.label}
      </Label>
      <Controller
        render={({ field: { onChange, onBlur, value } }) => (
          <IonSelect
            value={value}
            onIonChange={onChange}
            onIonBlur={onBlur}
            interface="action-sheet"
            className="mt-2"
          >
            {props.options ? (
              props.options.map((opcion) => {
                return (
                  <IonSelectOption value={opcion.value} key={opcion.value}>
                    {opcion.label}
                  </IonSelectOption>
                );
              })
            ) : (
              <Fragment />
            )}
          </IonSelect>
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
export default Select;
