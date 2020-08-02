import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams,
    match
  } from "react-router-dom";
import ProductDetails from '../component/ProductDetails';
class ProductPage extends Component {
   

    render() {     
           
        return (
            
            <div>
                <Header></Header>
                <ProductDetails/>
                <Footer></Footer>
                
            </div>
        );
    }
  
}





export default ProductPage;