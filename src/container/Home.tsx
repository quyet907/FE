import React, { Component } from 'react';
import Header from '../component/Header';
import Slider from '../component/Slider';
import Products from '../component/Products';
import Footer from '../component/Footer';
import { ProductService } from '../service/ProductService';
var axios = require('axios')

class Home extends Component <props, state> {
    constructor(props: any){
        super(props);
        // var products = ProductService.getList();
        // console.log(products)
        this.state = {
            products: []
        }
    }
   
    render() {
   
        return (
            
            <div className="home">
            
                    <Header />
                    <Slider />
                    <Products/>
                    <Footer/>

            </div>
        );
    }

}

type props = {}
type state = {
    products: any;
}

export default Home;