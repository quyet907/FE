import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, useLocation } from 'react-router-dom';

import Home from './container/Home';
import Cart from './container/Cart';
import Stories from './container/Stories';
import { v4 as uuidv4 } from 'uuid';
import { ProductService } from './service/ProductService';
import ProductPage from './container/ProductPage';
import {
  BrowserRouter as Router,
  Switch,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";
var axios = require('axios')


function App() {
 
  return (
    <div className="App">
       
      <BrowserRouter>

        <Route exact path="/" component={Home} />
        <Route path="/home" component={Home} />
        <Route path="/cart" component={Cart} />
        <Route path="/stories" component={Stories} />
          

      </BrowserRouter>
    
    </div>
  );

  
}

export default App;
