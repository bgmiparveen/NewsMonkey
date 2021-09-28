import "./App.css";

import React, { useState } from "react";
import NavBar from "./Components/NavBar";
import News from "./Components/News";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

const App =()=> {
 const pageSize = 6;
  const country = "in";
 const apiKey='5c2a632111aa4f738fdf21c08539e874'
   //avaible countries = ae ar at au be bg br ca ch cn co cu cz de eg fr gb gr hk hu id ie il in it jp kr lt lv ma mx my ng nl no nz ph pl pt ro rs ru sa se sg si sk th tr tw ua us ve za
const [progress, setProgress] = useState(0)
 
  
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
          height={3}
            color="#f11946"
            progress={progress}
           
          />

          <Switch>
            {/* route ke baad exact lagane k baad jab click any category like science api hit hoti hai lekin page reload karne par science content dikhata hai. so we have to give a uniqe key to every route
            unique key lagane se remount karke content layega (unique key maens khuchh naya content hoga so it do remount)
            varna componentdidMount samaj kar content upload nhi karayega cause it uploaded it already general    */}
            <Route exact path="/">
             <News apiKey={apiKey} setProgress= {setProgress} 
             key='home'
                pageSize={pageSize}
                country={country}
                category="general"
              />
            </Route>
            <Route exact path="/business">
             <News apiKey={apiKey} setProgress= {setProgress} 
                pageSize={pageSize}
                key="business"
                country={country}
                category="business"
              />
            </Route>
            <Route exact path="/entertainment">
             <News apiKey={apiKey} setProgress= {setProgress} 
                pageSize={pageSize}
                key="entertainment"
                country={country}
                category="entertainment"
              />
            </Route>
            <Route exact path="/general">
             <News apiKey={apiKey} setProgress= {setProgress} 
                pageSize={pageSize}
                key="general"
                country={country}
                category="general"
              />
            </Route>
            <Route exact path="/health">
             <News apiKey={apiKey} setProgress= {setProgress} 
                pageSize={pageSize}
                key="health"
                country={country}
                category="health"
              />
            </Route>
            <Route exact path="/science">
             <News apiKey={apiKey} setProgress= {setProgress} 
                pageSize={pageSize}
                key="science"
                country={country}
                category="science"
              />
            </Route>
            <Route exact path="/sports">
             <News apiKey={apiKey} setProgress= {setProgress} 
                pageSize={pageSize}
                key="sports"
                country={country}
                category="sports"
              />
            </Route>
            <Route exact path="/technology">
             <News apiKey={apiKey} setProgress= {setProgress} 
                pageSize={pageSize}
                key="technology"
                country={country}
                category="technology"
              />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
export default App;
