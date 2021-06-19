import { Fragment, FunctionComponent } from "react";
import { Label, ErrorText, Item } from "UI";
import { IonInput } from "@ionic/react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";

type Props = {
  control: any;
  errors: any;
  defaultValue: any;
  name: string;
  rules: any;
  label: string;
  type: any;
}

const Input: FunctionComponent<Props> = (props) => (
  <Fragment>
    <Item className="mb-4" lines="full">
      <Label position="floating" color="primary">
        {props.label}
      </Label>
      <Controller
        render={({ field: { onChange, onBlur, value, ref } }) => (
          <IonInput
            autocomplete="new-password" //Por ahora la solucion fue dejar el value para permitir inicializar, pero no funciona el autocomplete, buscar solucion a esto despues
            className="mt-2"
            onIonChange={onChange}
            onIonBlur={onBlur}
            type={props.type}
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
export default Input;
