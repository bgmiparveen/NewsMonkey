import "./App.css";

import React, { Component } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  pageSize = 6;
  country = "in";
   //avaible countries = ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
  state = {progress:0}
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
   render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color="#f11946"
            progress={this.state.progress}
           
          />

          <Switch>
            {/* route ke baad exact lagane k baad jab click any category like science api hit hoti hai lekin page reload karne par science content dikhata hai. so we have to give a uniqe key to every route
            unique key lagane se remount karke content layega (unique key maens khuchh naya content hoga so it do remount)
            varna componentdidMount samaj kar content upload nhi karayega cause it uploaded it already general    */}
            <Route exact path="/">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                country={this.country}
                category="general"
              />
            </Route>
            <Route exact path="/business">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                key="business"
                country={this.country}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                key="entertainment"
                country={this.country}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                key="general"
                country={this.country}
                category="general"
              />
            </Route>
            <Route exact path="/health">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                key="health"
                country={this.country}
                category="health"
              />
            </Route>
            <Route exact path="/science">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                key="science"
                country={this.country}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                key="sports"
                country={this.country}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
             <News setProgress= {this.setProgress} 
                pageSize={this.pageSize}
                key="technology"
                country={this.country}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
