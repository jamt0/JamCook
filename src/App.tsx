import React from "react";
import { Redirect, Route } from "react-router-dom";
import { IonApp, IonRouterOutlet } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import Home from "./pages/Home/Home";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/SignUp/SignUp";
import Welcome from "./pages/Welcome/Welcome";
import { ForgetPassword, ForgetPasswordValidate, NewPassword } from "./pages/ForgetPassword/Index";

import Recipe from "./pages/Recipe/Recipe";
import ListRecipes from "./pages/ListRecipes/ListRecipes";
import { FoodBasketAdd } from "./pages/FoodBasket/Index";
import { AboutUs, ContactUs, EditPerfil, Language, LegalInformation, Preferences, Ratings, Settings, Share } from "./pages/Perfil/Index";
import { Allergies, Comensals, CookingLevel, Diet, DislikeIngredient, MyObjectives } from "./pages/Perfil/Preferences/Index";

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

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" render={(props) => <Home {...props} />} />
        <Route path="/welcome" render={(props) => <Welcome {...props} />} exact />
        <Route path="/signUp" render={(props) => <SignUp {...props} />} exact />
        <Route path="/signIn" render={(props) => <SignIn {...props} />} exact />
        <Route path="/forgetPassword" render={(props) => <ForgetPassword {...props} />} exact />
        <Route path="/forgetPassword/validate" render={(props) => <ForgetPasswordValidate {...props} />} exact />
        <Route path="/forgetPassword/newPassword" render={(props) => <NewPassword {...props} />} exact />
        <Route path="/recipes" render={(props) => <ListRecipes {...props} />} exact />
        <Route path="/recipe" render={(props) => <Recipe {...props} />} exact />
        <Route path="/foodBasket/add" component={FoodBasketAdd} exact />
        <Route path="/perfil/aboutUs" component={AboutUs} exact />
        <Route path="/perfil/contactUs" component={ContactUs} exact />
        <Route path="/perfil/edit" component={EditPerfil} exact />
        <Route path="/perfil/language" component={Language} exact />
        <Route path="/perfil/legalInformation" component={LegalInformation} exact />
        <Route path="/perfil/preferences" component={Preferences} exact />
        <Route path="/perfil/ratings" component={Ratings} exact />
        <Route path="/perfil/settings" component={Settings} exact />
        <Route path="/perfil/share" component={Share} exact />
        <Route path="/perfil/preferences/myObjectives" component={MyObjectives} exact />
        <Route path="/perfil/preferences/cookingLevel" component={CookingLevel} exact />
        <Route path="/perfil/preferences/diet" component={Diet} exact />
        <Route path="/perfil/preferences/allergies" component={Allergies} exact />
        <Route path="/perfil/preferences/dislikeIngredient" component={DislikeIngredient} exact />
        <Route path="/perfil/preferences/comensals" component={Comensals} exact />
        <Redirect from="/" to="/welcome" exact />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
