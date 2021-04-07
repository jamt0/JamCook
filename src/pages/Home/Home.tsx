import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { searchOutline, navigateOutline, basketOutline, personOutline } from "ionicons/icons";
import { FoodBasket } from "../FoodBasket/Index";
import { Perfil } from "../Perfil/Index";
import Explore from "../Explore/Explore";
import Search from "../Search/Search";

const SignUp: React.FC = () => {

  console.log("soy tabs");

  return (
      <IonTabs>
        <IonRouterOutlet>
          <Route path="/home" exact >
            <Redirect to="/home/search" />
          </Route>
          <Route path="/home/search" exact >
            <Search />
          </Route>
          <Route path="/home/explore" exact >
            <Explore />
          </Route>
          <Route path="/home/foodBasket" exact >
            <FoodBasket />
          </Route>
          <Route path="/home/perfil" exact >
            <Perfil />
          </Route>
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