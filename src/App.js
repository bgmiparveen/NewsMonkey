import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <NavBar />

          <Switch>
            {/* route ke baad exact lagane k baad jab click any category like science api hit hoti hai lekin page reload karne par science content dikhata hai. so we have to give a uniqe key to every route
            unique key lagane se remount karke content layega (unique key maens khuchh naya content hoga so it do remount)
            varna componentdidMount samaj kar content upload nhi karayega cause it uploaded it already general    */}
            <Route exact path="/">
              <News pageSize={6}  key='general' country="in" category="general" />{" "}
            </Route>
            <Route exact path="/business">
              <News pageSize={6} key='business' country="in" category="business" />
            </Route>
            <Route exact path="/entertainment">
              <News pageSize={6} key='entertainment' country="in" category="entertainment" />
            </Route>
            <Route exact path="/general">
              <News pageSize={6} key='general' country="in" category="general" />
            </Route>
            <Route exact path="/health">
              <News pageSize={6} key='health' country="in" category="health" />
            </Route>
            <Route exact path="/science">
              <News pageSize={6} key='' country="in" category="science" />
            </Route>
            <Route exact path="/sports">
              <News pageSize={6} key='science' country="in" category="sports" />
            </Route>
            <Route exact path="/technology">
              <News pageSize={6} key='technology' country="in" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
