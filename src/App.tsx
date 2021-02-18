import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home/Home';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/SignUp/SignUp';
import Welcome from './pages/Welcome/Welcome';
import ForgetPassword from './pages/ForgetPassword/ForgetPassword';
import ForgetPasswordValidate from './pages/ForgetPassword/ForgetPasswordValidate';
import NewPassword from './pages/ForgetPassword/NewPassword';
import Recipe from './pages/Recipe/Recipe';
import ListRecipes from './pages/ListRecipes/ListRecipes';
import FoodBasketAdd from './pages/FoodBasket/FoodBasketAdd';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route path="/home" render={ (props) => <Home {...props}/>} />
        <Route path="/welcome" render={ (props) => <Welcome {...props} />} />
        <Route path="/signUp" render={ (props) => <SignUp {...props}/>} />
        <Route path="/signIn" render={ (props) => <SignIn {...props}/>} />
        <Route path="/forgetPassword" render={ (props) => <ForgetPassword {...props}/>} />
        <Route path="/forgetPasswordValidate" render={ (props) => <ForgetPasswordValidate {...props}/>} />
        <Route path="/newPassword" render={ (props) => <NewPassword {...props}/>} />
        <Route path="/recipes" render={ (props) => <ListRecipes {...props}/>} exact />
        <Route path="/recipe" render={ (props) => <Recipe {...props}/>} exact />
        <Route path="/foodBasketAdd" render={ (props) => <FoodBasketAdd {...props}/>} exact />
        <Route exact path="/" render={() => <Redirect to="/welcome" />} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
