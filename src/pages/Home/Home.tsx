import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { searchOutline, navigateOutline, basketOutline, personOutline } from "ionicons/icons";
import { RouteComponentProps } from "react-router-dom";
import { FoodBasket } from "../FoodBasket/Index";
import { Perfil } from "../Perfil/Index";
import Explore from "../Explore/Explore";
import Search from "../Search/Search";

const SignUp: React.FC<RouteComponentProps> = ({ match }) => {
  console.log("soy tabs");
  return (
      <IonTabs>
        <IonRouterOutlet>
          <Route path={match.url} render={() => <Redirect to={`${match.url}/search`} />} exact />
          <Route path={`${match.url}/search`} component={Search} exact />
          <Route path={`${match.url}/explore`} component={Explore} exact />
          <Route path={`${match.url}/foodBasket`} component={FoodBasket} exact />
          <Route path={`${match.url}/perfil`} component={Perfil} exact />
        </IonRouterOutlet>
        <IonTabBar slot="bottom" className="py-1">
          <IonTabButton tab="search" href="/home/search">
            <IonIcon icon={searchOutline} />
            <IonLabel>Buscar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="explore" href="/home/explore">
            <IonIcon icon={navigateOutline} />
            <IonLabel>Explorar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="foodBasket" href="/home/foodBasket">
            <IonIcon icon={basketOutline} />
            <IonLabel>Almacen</IonLabel>
          </IonTabButton>
          <IonTabButton tab="perfil" href="/home/perfil">
            <IonIcon icon={personOutline} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};

export default SignUp;