import { IonContent, IonIcon, IonItem, IonList, IonPage } from "@ionic/react";
import React from "react";
import { Link, RouteComponentProps } from "react-router-dom";
import { personOutline, globeOutline, buildOutline, starOutline, arrowRedoOutline, businessOutline, briefcaseOutline, chatbubbleEllipsesOutline, logOutOutline } from "ionicons/icons";

const usuario = {
  avatarUser: "https://picsum.photos/200/300?random=1",
  nameUser: "Jonatan Mancera",
  mailUser: "Jamt@gmail.com",
};

const Perfil: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <IonPage>
      <IonContent>
        <div className="flex md:text-center flex-col md:mx-auto max-w-screen-md py-8 text-left text-gray-600 text-2xl md:text-3xl mx-4 font-bold">
          <h6>Perfil</h6>
        </div>
        <div className="md:auto-cols-max md:grid md:grid-cols-2 max-w-screen-md md:flex md:mx-auto">
          <div className="grid grid-flow-col auto-cols-max md:auto-rows-max md:grid-flow-row px-4 pb-4">
            <div
              className="h-20 w-20 md:h-60 md:w-60 bg-cover bg-center rounded-full mr-4"
              style={{ backgroundImage: `url( ${usuario.avatarUser} )` }}
            ></div>
            <div>
              <h2 className="font-bold text-xl">{usuario.nameUser}</h2>
              <h3 className="text-lg">{usuario.mailUser}</h3>
              <Link
                to="/signIn"
                className="text-purple-600 text-lg select-none"
              >
                Editar Perfil
            </Link>
            </div>
          </div>
          <IonList>
            <IonItem className="px-6 pb-3" lines="none">
              <IonIcon icon={personOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Preferencias Alimentarias</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="none">
              <IonIcon icon={globeOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Idioma</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="full">
              <IonIcon icon={buildOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Configuración</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="none">
              <IonIcon icon={starOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Valora JamCook</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="full">
              <IonIcon icon={arrowRedoOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Comparte JamCook</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="none">
              <IonIcon icon={businessOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Sobre JamCook</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="none">
              <IonIcon icon={briefcaseOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Información Legal</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="full">
              <IonIcon icon={chatbubbleEllipsesOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Contacto</p>
            </IonItem>
            <IonItem className="px-6 pb-3" lines="none">
              <IonIcon icon={logOutOutline} slot="start" className="text-4xl" />
              <p className="text-lg">Cerrar Sesión</p>
            </IonItem>
          </IonList>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perfil;
