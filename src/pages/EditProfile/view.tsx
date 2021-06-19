import { FunctionComponent } from "react";
import {
  Scaffold,
  Center,
  Loading,
  Button,
  Avatar,
  ErrorBox,
  Select,
  Input,
} from "UI";

type Props = {
  texts: any;
  loading: boolean;
  errores: any;
  formHook: any;
  avatarImageUrl: string;
  rules: any;
  defaultValues: any;
  optionsGenders: any;
  optionsAges: any;
  handlerSaveEditButton: (user: any) => void;
  fileChangedHandler: (e: any) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Header title={props.texts.perfil_editar}>
      <Scaffold.Header.BackAction />
    </Scaffold.Header>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Center direction="col" className="mt-8">
        <Avatar src={props.avatarImageUrl} size={20} sizeResponsive={60} />
        <div className="mt-4">
          <label className="" htmlFor="inputAvatar">
            {props.texts.perfil_edit_cambiar_avatar}
          </label>
        </div>
      </Center>
      <input
        type="file"
        accept=".jpg, .jpeg, .png"
        id="inputAvatar"
        onChange={props.fileChangedHandler}
        className="hidden"
      />
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.name}
        name="name"
        type="name"
        label={props.texts.campo_nombre}
        rules={props.rules.rulesName}
      />
      <Input
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.email}
        name="email"
        type="email"
        label={props.texts.campo_correo}
        rules={props.rules.rulesEmail}
      />
      <Select
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.ageId}
        options={props.optionsAges}
        name="ageId"
        label={props.texts.campo_edad}
        rules={props.rules.rulesAge}
      />
      <Select
        control={props.formHook.control}
        errors={props.formHook.errors}
        defaultValue={props.defaultValues.genderId}
        options={props.optionsGenders}
        name="genderId"
        label={props.texts.campo_genero}
        rules={props.rules.rulesGender}
      />
    </Scaffold.Content>
    <Scaffold.Footer>
      <Button
        onClick={props.formHook.handleSubmit(props.handlerSaveEditButton)}
        disabled={!props.formHook.isValid || props.formHook.isSubmitting}
      >
        {props.texts.guardar}
      </Button>
    </Scaffold.Footer>
  </Scaffold>
);
export default View;
