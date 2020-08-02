import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import { ProductService } from '../service/ProductService';
import ProductsStories from '../component/ProductsStories';
import AddProduct from '../component/AddProduct';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions';


class Stories extends Component <props, state>{
    constructor(props: any){
        super(props);
      //  var products = ProductService.getList();
        var products = this.props.products;
        this.state = {
            name: "",
            afterSale: 0,
            beforeSale: 0,
            img: "",
            products: products,
            popup: false
        }
    }
    
    render() {
        console.log(this.props.products)
        return (
            <div>
                <Header />
                <div className="stories">
                    <div className="head">
                        <div className="title">
                            <h3 className="title">Kho san pham</h3>
                        </div>
                        <div className="btn-addd">
                            <button className="btn-add-product" onClick={() => {
                                this.isPopup()
                               
                              
                            }}>Them san pham</button>
                        </div>

                    </div>
                    <div className="back-gr" id="back-gr">
                            {this.state.popup && <AddProduct closePopup={this.isClose}></AddProduct>}
                    </div>
                    <div className="list-products">
                        <ProductsStories products={this.state.products}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }

    isPopup = () => {

        this.setState({
            popup: true
        })
    }
    isClose = () => {
        this.setState({
            popup: false
        })
    }
  

}



type props = {
    products: any
}

type state = {
    name: string;
    afterSale: number;
    beforeSale: number;
    img: string;
    products: any;
    popup: boolean
}

const mapStateToProps = (state:any) => {
    return { 
        products: state.products
     }
}


export default connect(mapStateToProps, null)(Stories);