import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.10.0";
import store from "./app/store.js"

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import LoginPage from "views/LoginPage/LoginPage.js";
import Aktivitaeten from "views/Aktivitaeten/Aktivitaeten.js";
import Pauschalreisen from "views/Pauschalreisen/Pauschalreisen.js";
import Reisemittel from "views/Reisemittel/Reisemittel.js";
import Unterkunft from "views/Unterkunft/Unterkunft.js";
import Impressum from "views/Impressum/Impressum.js";
import Datenschutz from "views/Datenschutz/Datenschutz.js";
import Ferienwohnung from "views/Unterkunft/Ferienwohnung/Ferienwohnung.js";
import Hotel from "views/Unterkunft/Hotel/Hotel.js";
import Bus from "views/Reisemittel/Bus/Bus.js";
import Bahn from "views/Reisemittel/Bahn/Bahn.js";
import Flug from "views/Reisemittel/Flug/Flug.js";
import Bus1 from "views/Pauschalreisen/Bus/Unterkunft.js";
import Strandurlaub from "views/Pauschalreisen/Strandurlaub/Unterkunft.js";
import Winterurlaub from "views/Pauschalreisen/Winterurlaub/Unterkunft.js";
import Stadttour from "views/Aktivitaeten/Stadttour/Unterkunft.js";
import Wanderung from "views/Aktivitaeten/Wanderung/Unterkunft.js";
import Appartement from "views/Unterkunft/Appartement/Appartement.js";
import Kreuzfahrtschiff from "views/Unterkunft/Kreuzfahrtschiff/Kreuzfahrt.js";
import Warenkorb from "views/Warenkorb/Warenkorb.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={hist}>
      <Switch>
        <Route path="/" exact component={LandingPage} />
        <Route path="/profile-page" component={ProfilePage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/beispiele" component={Components} />
        <Route path="/aktivitaeten" component={Aktivitaeten} />
        <Route path="/aktivitaeten/stadttour" component={Stadttour} />
        <Route path="/aktivitaeten/wanderung" component={Wanderung} />
        <Route path="/pauschalreisen"  component={Pauschalreisen} />
        <Route path="/pauschalreisen/bus" component={Bus1} />
        <Route path="/pauschalreisen/strandurlaub" component={Strandurlaub} />
        <Route path="/pauschalreisen/Winterurlaub" component={Winterurlaub} />
        <Route path="/reisemittel" exact component={Reisemittel} />
        <Route path="/reisemittel/bus" component={Bus} />
        <Route path="/reisemittel/bahn" component={Bahn} />
        <Route path="/reisemittel/flug" component={Flug} />
        <Route path="/unterkunft" exact component={Unterkunft} />
        <Route path="/impressum" component={Impressum} />
        <Route path="/Datenschutz" component={Datenschutz} />
        <Route path="/unterkunft/ferienwohnung" component={Ferienwohnung} />
        <Route path="/unterkunft/hotel" component={Hotel} />
        <Route path="/unterkunft/appartement" component={Appartement} />
        <Route path="/unterkunft/kreuzfahrtschiff" component={Kreuzfahrtschiff} />
        <Route path="/warenkorb" component={Warenkorb} />
      </Switch>
    </Router>
  </Provider>,
  document.getElementById("root")
);
