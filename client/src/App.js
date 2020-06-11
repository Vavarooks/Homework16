import React from 'react';
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Body from "./componet/Body";
import SavedBooks from "./componet/SavedBooks";
import Welcome from "./componet/WelcomePage";
import {BrowserRouter, Route, Switch} from "react-router-dom";


import './App.css';

function App() {
  return (
    <div>
     <Header/>
    <BrowserRouter>
    <Switch>
    <Route exact path="/" component={Welcome}></Route> 
    <Route exact path="/searchbooks" component={Body}></Route>
    <Route exact path="/savedbooks" component={SavedBooks}></Route>
    </Switch>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
