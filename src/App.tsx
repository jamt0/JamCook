import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonLoading, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Welcome from "./pages/Welcome/Welcome";
import { ForgetPassword, ForgetPasswordValidate, NewPassword } from "./pages/ForgetPassword/Index";
import NoFound from "pages/General/NoFound";
import Recipe from "./pages/Recipe/Recipe";
import ListRecipes from "./pages/ListRecipes/ListRecipes";
import { FoodBasketAdd } from "./pages/FoodBasket/Index";
import { AboutUs, ContactUs, EditPerfil, Language, LegalInformation, Preferences, Ratings, Settings, Share } from "./pages/Perfil/Index";
import { Allergies, Comensals, CookingLevel, Diet, DislikeIngredient, MyObjectives } from "./pages/Perfil/Preferences/Index";
import { CookiesPolicy, PrivacyPolicy, TermsAndConditions } from "./pages/Perfil/LegalInformation/Index";

import { AuthProvider, useAuthInit } from "auth";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App: React.FC = () => {
  console.log("soy la page app")

  // const { loading, auth } = useAuthInit();
  // if (loading) {
  //   return <IonLoading isOpen translucent />;
  // }

  return(
  <IonApp>
    <AuthProvider>
      <IonReactRouter>
        <IonRouterOutlet>
          <Route path="/home" >
            <Home />
          </Route>
          <Route path="/" exact >
            <Welcome />
          </Route>
          <Route path="/signUp" exact >
            <SignUp />
          </Route>
          <Route path="/signIn" exact >
            <SignIn />
          </Route>
          <Route path="/forgetPassword" exact >
            <ForgetPassword />
          </Route>
          <Route path="/forgetPassword/validate" exact >
            <ForgetPasswordValidate />
          </Route>
          <Route path="/forgetPassword/newPassword" exact >
            <NewPassword />
          </Route>
          <Route path="/recipes" exact >
            <ListRecipes />
          </Route>
          <Route path="/recipe" exact >
            <Recipe />
          </Route>
          <Route path="/foodBasket/add" exact >
            <FoodBasketAdd />
          </Route>
          <Route path="/perfil/aboutUs" exact >
            <AboutUs />
          </Route>
          <Route path="/perfil/contactUs" exact >
            <ContactUs />
          </Route>
          <Route path="/perfil/edit" exact >
            <EditPerfil />
          </Route>
          <Route path="/perfil/language" exact >
            <Language />
          </Route>
          <Route path="/perfil/legalInformation" exact >
            <LegalInformation />
          </Route>
          <Route path="/perfil/legalInformation/termsAndConditions" exact >
            <TermsAndConditions />
          </Route>
          <Route path="/perfil/legalInformation/privacyPolicy" exact >
            <PrivacyPolicy />
          </Route>
          <Route path="/perfil/legalInformation/cookiesPolicy" exact >
            <CookiesPolicy />
          </Route>
          <Route path="/perfil/preferences" exact >
            <Preferences />
          </Route>
          <Route path="/perfil/ratings" exact >
            <Ratings />
          </Route>
          <Route path="/perfil/settings" exact >
            <Settings />
          </Route>
          <Route path="/perfil/share" exact >
            <Share />
          </Route>
          <Route path="/perfil/preferences/myObjectives" exact >
            <MyObjectives />
          </Route>
          <Route path="/perfil/preferences/cookingLevel" exact >
            <CookingLevel />
          </Route>
          <Route path="/perfil/preferences/diet" exact >
            <Diet />
          </Route>
          <Route path="/perfil/preferences/allergies" exact >
            <Allergies />
          </Route>
          <Route path="/perfil/preferences/dislikeIngredient" exact >
            <DislikeIngredient />
          </Route>
          <Route path="/perfil/preferences/comensals" exact >
            <Comensals />
          </Route>
          <Route >
            <NoFound />
          </Route>
        </IonRouterOutlet>
      </IonReactRouter>
    </AuthProvider>
  </IonApp>
  );
}

export default App;
