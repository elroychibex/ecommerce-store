import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import ShopPage from "./pages/shop/shop.component";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import SignInSignUpPage from "./pages/sign-in-sign-up/sign-in-sign-up.component";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
