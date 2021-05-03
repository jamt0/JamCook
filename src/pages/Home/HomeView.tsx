import React, { FunctionComponent } from "react";
import { Redirect, Route } from "react-router-dom";
import { MeasurementUnits, Theme } from "pages/Profile/Settings/Index";
import { FoodBasketAdd, FoodBasket } from "pages/FoodBasket/Index";
import ListRecipes from "pages/ListRecipes/ListRecipes";
import Explore from "pages/Explore/Explore";
import NoFound from "pages/General/NoFound/NoFound";
import Welcome from "pages/Welcome/Welcome";
import Search from "pages/Search/Search";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import Recipe from "pages/Recipe/Recipe";
import RoutesPath from "utils/routesPath";
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
import {
  CookiesPolicy,
  PrivacyPolicy,
  TermsAndConditions,
} from "pages/Profile/LegalInformation/Index";
import {
  ForgetPassword,
  ForgetPasswordValidate,
  NewPassword,
} from "pages/ForgetPassword/Index";
import {
  Allergies,
  Comensals,
  CookingLevel,
  Diet,
  DislikeIngredient,
  MyObjectives,
} from "pages/Profile/Preferences/Index";
import {
  Profile,
  AboutUs,
  ContactUs,
  EditProfile,
  Language,
  LegalInformation,
  Preferences,
  Settings,
} from "pages/Profile/Index";

type Props = {
  textos: any;
  tabBarStyle: any;
};

const HomeView: FunctionComponent<Props> = (props) => (
  <IonTabs>
    <IonRouterOutlet>
      <Route path={RoutesPath.search} exact>
        <Search />
      </Route>
      <Route path={RoutesPath.explore} exact>
        <Explore />
      </Route>
      <Route path={RoutesPath.foodBasket} exact>
        <FoodBasket />
      </Route>
      <Route path={RoutesPath.profile} exact>
        <Profile />
      </Route>
      <Route path={RoutesPath.home} exact>
        <Redirect to={RoutesPath.search} />
      </Route>
      <Route path={RoutesPath.signUp} exact>
        <SignUp />
      </Route>
      <Route path={RoutesPath.signIn} exact>
        <SignIn />
      </Route>
      <Route path={RoutesPath.forgetPassword} exact>
        <ForgetPassword />
      </Route>
      <Route path={RoutesPath.forgetPasswordValidate} exact>
        <ForgetPasswordValidate />
      </Route>
      <Route path={RoutesPath.newPassword} exact>
        <NewPassword />
      </Route>
      <Route path={RoutesPath.listRecipes + ":id"} exact>
        <ListRecipes />
      </Route>
      <Route path={RoutesPath.recipe + ":id"} exact>
        <Recipe />
      </Route>
      <Route path={RoutesPath.foodBasketAdd} exact>
        <FoodBasketAdd />
      </Route>
      <Route path={RoutesPath.aboutUs} exact>
        <AboutUs />
      </Route>
      <Route path={RoutesPath.contactUs} exact>
        <ContactUs />
      </Route>
      <Route path={RoutesPath.editProfile} exact>
        <EditProfile />
      </Route>
      <Route path={RoutesPath.language} exact>
        <Language />
      </Route>
      <Route path={RoutesPath.legalInformation} exact>
        <LegalInformation />
      </Route>
      <Route path={RoutesPath.termsAndConditions} exact>
        <TermsAndConditions />
      </Route>
      <Route path={RoutesPath.privacyPolicy} exact>
        <PrivacyPolicy />
      </Route>
      <Route path={RoutesPath.cookiesPolicy} exact>
        <CookiesPolicy />
      </Route>
      <Route path={RoutesPath.preferences} exact>
        <Preferences />
      </Route>
      <Route path={RoutesPath.settings} exact>
        <Settings />
      </Route>
      <Route path={RoutesPath.measurementUnits} exact>
        <MeasurementUnits />
      </Route>
      <Route path={RoutesPath.theme} exact>
        <Theme />
      </Route>
      <Route path={RoutesPath.myObjectives} exact>
        <MyObjectives />
      </Route>
      <Route path={RoutesPath.cookingLevel} exact>
        <CookingLevel />
      </Route>
      <Route path={RoutesPath.diet} exact>
        <Diet />
      </Route>
      <Route path={RoutesPath.allergies} exact>
        <Allergies />
      </Route>
      <Route path={RoutesPath.dislikeIngredient} exact>
        <DislikeIngredient />
      </Route>
      <Route path={RoutesPath.comensals} exact>
        <Comensals />
      </Route>
      <Route path={RoutesPath.welcome} exact>
        <Welcome />
      </Route>
      <Route>
        <NoFound />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom" className="py-1" style={props.tabBarStyle}>
      <IonTabButton tab="search" href={RoutesPath.search}>
        <IonIcon icon={searchOutline} />
        <IonLabel>{props.textos.page_buscar}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="explore" href={RoutesPath.explore}>
        <IonIcon icon={navigateOutline} />
        <IonLabel>{props.textos.page_explorar}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="foodBasket" href={RoutesPath.foodBasket}>
        <IonIcon icon={basketOutline} />
        <IonLabel>{props.textos.page_almacen}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="profile" href={RoutesPath.profile}>
        <IonIcon icon={personOutline} />
        <IonLabel>{props.textos.page_perfil}</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default HomeView;
