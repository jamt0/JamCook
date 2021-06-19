import { FunctionComponent } from "react";
import { Redirect, Route } from "react-router-dom";
import RoutesPath from "routes";
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
  AboutUs,
  Allergies,
  Commensals,
  ContactUs,
  CookiesPolicy,
  CookingLevel,
  Diet,
  DislikeIngredient,
  EditProfile,
  Explore,
  FoodBasket,
  FoodBasketAdd,
  ForgetPassword,
  ForgetPasswordValidate,
  Language,
  LegalInformation,
  ListRecipes,
  MeasurementUnits,
  MyObjectives,
  NewPassword,
  NoFound,
  Preferences,
  PrivacyPolicy,
  Profile,
  Recipe,
  Search,
  Settings,
  SignIn,
  SignUp,
  TermsAndConditions,
  Theme,
  Welcome,
} from 'pages/containers';

type Props = {
  texts: any;
  tabBarStyle: any;
};

const View: FunctionComponent<Props> = (props) => (
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
        <Commensals />
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
        <IonLabel>{props.texts.page_buscar}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="explore" href={RoutesPath.explore}>
        <IonIcon icon={navigateOutline} />
        <IonLabel>{props.texts.page_explorar}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="foodBasket" href={RoutesPath.foodBasket}>
        <IonIcon icon={basketOutline} />
        <IonLabel>{props.texts.page_almacen}</IonLabel>
      </IonTabButton>
      <IonTabButton tab="profile" href={RoutesPath.profile}>
        <IonIcon icon={personOutline} />
        <IonLabel>{props.texts.page_perfil}</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default View;
