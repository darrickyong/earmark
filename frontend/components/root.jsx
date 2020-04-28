import React from "react";
import App from "./App";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import Splash from "./splash/splash";
import { Provider } from "react-redux";
import { AuthRoute, ProtectedRoute } from "../util/route_util";
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';

// need to add Switch route

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <AuthRoute exact path="/" component={Splash} /> 
        <AuthRoute exact path="/login" component={LoginFormContainer}/>
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute path="/" component={App} />
      </Switch>
    </HashRouter>
  </Provider>
)

export default Root;
