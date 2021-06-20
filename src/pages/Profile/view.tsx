import { Fragment, FunctionComponent } from "react";
import { Link } from "react-router-dom";
import { ItemIcon } from "components";
import namesRoutes from "routes/names";
import {
  Scaffold,
  SubTitle,
  Loading,
  Button,
  Title,
  ErrorBox,
  Item,
  Avatar,
  Label,
  Text,
  Center,
  ButtonLink,
} from "UI";

type Props = {
  texts: any;
  loading: boolean;
  avatarImageUrl: string;
  auth: any;
  errores: any;
  user: any;
  items: any[];
  handlerLogOutButton: (e: any) => void;
};

const View: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores !== "" && <ErrorBox>{props.errores}</ErrorBox>}
      <Title color="medium">{props.texts('page_perfil')}</Title>
      {props.auth.loggedIn ? (
        <Item className="my-4 px-4">
          <Avatar src={props.avatarImageUrl} size={16} />
          <Label className="ml-4">
            <Text className="mb-2">{props.user.name}</Text>
            <Text className="mb-2">{props.user.email}</Text>
            <ButtonLink routerLink={namesRoutes.editProfile}>
              {props.texts('perfil_editar')}
            </ButtonLink>
          </Label>
        </Item>
      ) : (
        <Item color="light" className="py-4 rounded-md">
          <Center direction="col" className="mt-2" justify="center">
            <SubTitle className="mb-4">
              {props.texts('perfil_inicie_sesion')}
            </SubTitle>
            <Link to={namesRoutes.signIn} className="w-full pr-2">
              <Button>{props.texts('signin_iniciar_sesion')}</Button>
            </Link>
            <Center className="mb-2">
              <Text className="mr-1">{props.texts('signin_no_tiene_cuenta')}</Text>
              <ButtonLink routerLink={namesRoutes.signUp}>
                {props.texts('signup_registrate')}
              </ButtonLink>
            </Center>
          </Center>
        </Item>
      )}
      <div className="mt-4">
        {props.items.map((item, index) => {
          if (item.auth ? props.auth.loggedIn : true) {
            if (item.routerLink) {
              return (
                <ItemIcon
                  routerLink={item.routerLink}
                  icon={item.icon}
                  lines={item.lines}
                  key={index}
                >
                  {item.name}
                </ItemIcon>
              );
            }
            return (
              <ItemIcon
                onClick={props.handlerLogOutButton}
                icon={item.icon}
                lines={item.lines}
                key={index}
              >
                {item.name}
              </ItemIcon>
            );
          }
          return (
            <Fragment key={index}/>
          )
        })}
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default View;
