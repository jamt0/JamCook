import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { ellipse, square, triangle } from "ionicons/icons";
import Search from "pages/Search/Search";
import Explore from "pages/Explore/Explore";

const TabRoot: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path="/home/search" component={Search} exact={true} />
      <Route path="/home/explore" component={Explore} exact={true} />
      <Route
        path="/home"
        render={() => <Redirect to="/home/search" />}
        exact={true}
      />
      <Route
        path="/"
        render={() => <Redirect to="/home/search" />}
        exact={true}
      />
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="tab1" href="/tabs/tab1">
        <IonIcon icon={triangle} />
        <IonLabel>Tab 1</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab2" href="/tabs/tab2">
        <IonIcon icon={ellipse} />
        <IonLabel>Tab 2</IonLabel>
      </IonTabButton>
      <IonTabButton tab="tab3" href="/tabs/tab3">
        <IonIcon icon={square} />
        <IonLabel>Tab 3</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default TabRoot;
