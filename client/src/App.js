import React from 'react';
import Header from "./componet/Header";
import Footer from "./componet/Footer";
import Body from "./componet/Body";
import SavedBooks from "./componet/SavedBooks";

import './App.css';

function App() {
  return (
    <div>
     <Header/>
    <Body/>
    <SavedBooks/>
    <Footer/>
    </div>
  );
}

export default App;
