import React, { Component } from 'react';
import Header from '../component/Header';
import Footer from '../component/Footer';
import BuyingList from '../component/BuyingList';
import Form from '../component/Form';
class Cart extends Component {
    render() {
        return (
            <div className="cart-page">
                <Header/>
                <div className="cart-container">
                    <div className="cart-list-items">
                        <BuyingList/>
                    </div>
                    <div className="form-container">
                        <Form/>
                    </div>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default Cart;