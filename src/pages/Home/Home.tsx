import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs } from "@ionic/react";
import { searchOutline, navigateOutline, basketOutline, personOutline } from "ionicons/icons";
import { FoodBasket } from "pages/FoodBasket/Index";
import { Perfil } from "pages/Perfil/Index";
import Explore from "pages/Explore/Explore";
import Search from "pages/Search/Search";
import { useSettingsUser } from "context/settingsUser";

const Home: React.FC = () => {

  const { textos } = useSettingsUser()!;

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
            <IonLabel>{textos["page_buscar"]}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="explore" href="/home/explore">
            <IonIcon icon={navigateOutline} />
            <IonLabel>{textos["page_explorar"]}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="foodBasket" href="/home/foodBasket">
            <IonIcon icon={basketOutline} />
            <IonLabel>{textos["page_almacen"]}</IonLabel>
          </IonTabButton>
          <IonTabButton tab="perfil" href="/home/perfil">
            <IonIcon icon={personOutline} />
            <IonLabel>{textos["page_perfil"]}</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
  );
};

export default Home;