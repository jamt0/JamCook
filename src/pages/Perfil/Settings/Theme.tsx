import React from "react";
import Button from "components/Button/Button";
import RadioGroup from "components/RadioGroup/RadioGroup";
import Scaffold from "components/Scaffold/Scaffold";
import { useHistory } from "react-router";
import { useSettingsUser } from "context/settingsUser";
import { IonIcon, IonItem, IonLabel, IonToggle } from "@ionic/react";
import { moon } from "ionicons/icons";

const Theme: React.FC = () => {
  const history = useHistory();
  const { textos, setTheme } = useSettingsUser()!;

  const options = [
    {
      descripcion: textos["tema_claro"],
      value: "1",
    },
    {
      descripcion: textos["tema_oscuro"],
      value: "2",
    },
  ];

  const handlerSaveEditButton = (e: any) => {
    e.preventDefault();
    setTheme("2");
    history.replace("/perfil/settings");
  };

  const toggleDarkModeHandler = () => {
    document.body.classList.toggle("dark");
  };

  return (
    <Scaffold>
      <Scaffold.Header title={textos["tema"]}>
        <Scaffold.Header.BackAction />
      </Scaffold.Header>
      <Scaffold.Content>
        <p className=" mb-8 text-xl mt-2 text-gray-600 text-center">
          {textos["tema_escoge"]}
        </p>
        <RadioGroup optionsGroup={options} defaultOption="1" />
        <IonItem>
            <IonIcon slot="start" icon={moon} />
            <IonLabel>Dark Mode</IonLabel>
            <IonToggle slot="end" name="darkMode" onIonChange={toggleDarkModeHandler} />
          </IonItem>
      </Scaffold.Content>
      <Scaffold.Footer>
        <Button onClick={handlerSaveEditButton}>{textos["guardar"]}</Button>
      </Scaffold.Footer>
    </Scaffold>
  );
};

export default Theme;
