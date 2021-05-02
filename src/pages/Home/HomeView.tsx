import React, { FunctionComponent } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import {
  searchOutline,
  navigateOutline,
  basketOutline,
  personOutline,
} from "ionicons/icons";
import { FoodBasket } from "pages/FoodBasket/Index";
import { Perfil } from "pages/Perfil/Index";
import Explore from "pages/Explore/Explore";
import Search from "pages/Search/Search";

type Props = {
  textos: any;
};

const HomeView: FunctionComponent<Props> = (props) => (
  <IonTabs>
    <IonRouterOutlet>
      <Redirect exact path="/home" to="/home/search" />
      <Route path="/home/search" render={() => <Search />} exact={true} />
      <Route path="/home/explore" render={() => <Explore />} exact={true} />
      <Route
        path="/home/foodBasket"
        render={() => <FoodBasket />}
        exact={true}
      />
      <Route path="/home/perfil" render={() => <Perfil />} exact={true} />
    </IonRouterOutlet>
    <IonTabBar slot="bottom" className="py-1">
      <IonTabButton tab="search" href="/home/search">
        <IonIcon icon={searchOutline} />
        <IonLabel>{props.textos.page_buscar}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="explore" href="/home/explore">
        <IonIcon icon={navigateOutline} />
        <IonLabel>{props.textos.page_explorar}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="foodBasket" href="/home/foodBasket">
        <IonIcon icon={basketOutline} />
        <IonLabel>{props.textos.page_almacen}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="perfil" href="/home/perfil">
        <IonIcon icon={personOutline} />
        <IonLabel>{props.textos.page_perfil}</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default HomeView;
