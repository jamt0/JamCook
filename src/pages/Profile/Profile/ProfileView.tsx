import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import ItemIcon from "layouts/ItemIcon/ItemIcon";
import ButtonLink from "components/ButtonLink/ButtonLink";
import Scaffold from "components/Scaffold/Scaffold";
import SubTitle from "components/Text/SubTitle";
import Loading from "components/Loading/Loading";
import Avatar from "components/Avatar/Avatar";
import Button from "components/Button/Button";
import Center from "components/Center/Center";
import Label from "components/Label/Label";
import Title from "components/Text/Title";
import Error from "components/Error/Error";
import Item from "components/Item/Item";
import Text from "components/Text/Text";
import RoutesPath from "utils/routesPath";

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

const ProfileView: FunctionComponent<Props> = (props) => (
  <Scaffold>
    <Scaffold.Content>
      <Loading isOpen={props.loading} />
      {props.errores != "" && <Error>{props.errores}</Error>}
      <Title color="medium">{props.texts.page_perfil}</Title>
      {props.auth.loggedIn ? (
        <Item className="my-4 px-4">
          <Avatar src={props.avatarImageUrl} size={16} />
          <Label className="ml-4">
            <Text className="mb-2">{props.user.name}</Text>
            <Text className="mb-2">{props.user.email}</Text>
            <ButtonLink routerLink={RoutesPath.editProfile}>
              {props.texts.perfil_editar}
            </ButtonLink>
          </Label>
        </Item>
      ) : (
        <Item color="light" className="py-4 rounded-md">
          <Center direction="col" className="mt-2" justify="center">
            <SubTitle className="mb-4">
              {props.texts.perfil_inicie_sesion}
            </SubTitle>
            <Link to={RoutesPath.signIn} className="w-full pr-2">
              <Button>{props.texts.signin_iniciar_sesion}</Button>
            </Link>
            <Center className="mb-2">
              <Text className="mr-1">
                {props.texts.signin_no_tiene_cuenta}
              </Text>
              <ButtonLink routerLink={RoutesPath.signUp}>
                {props.texts.signup_registrate}
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
        })}
      </div>
    </Scaffold.Content>
  </Scaffold>
);
export default ProfileView;
