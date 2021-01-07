import { IonContent, IonIcon, IonItem, IonList, IonPage } from "@ionic/react";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { basketOutline } from "ionicons/icons";

const usuario = {
  AvatarUser: "https://picsum.photos/200/300?random=1",
  NameUser: "Jonatan Mancera",
  MailUser: "Jamt@gmail.com",
};

const Perfil: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex flex-col max-w-screen-md py-8 text-left text-gray-600 text-2xl md:text-3xl mx-4 font-bold">
          <h6>Perfil</h6>
        </div>
        <div className="grid grid-flow-col auto-cols-max px-4 pb-4">
          <div
            className="h-20 w-20 bg-cover bg-center rounded-full mr-4"
            style={{ backgroundImage: `url( ${usuario.AvatarUser} )` }}
          ></div>
          <div>
            <h2 className="font-bold text-xl">{usuario.NameUser}</h2>
            <h3 className="text-lg">{usuario.MailUser}</h3>
            <Link
              to="/signIn"
              className="text-purple-600 text-lg select-none"
            >
              Editar Perfil
            </Link>
          </div>
        </div>
        <IonList>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
          <IonItem className="px-6 pb-3">
            <IonIcon icon={basketOutline} slot="start" className="text-4xl"/>
            <p className="text-lg">Pokémon Yellow</p>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
