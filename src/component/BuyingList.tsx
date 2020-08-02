import React, { Component } from 'react';
import CartItem from './CartItem';
import { CartService } from '../service/CartService';
import { ItemCart } from '../model/CartItem';

class BuyingList extends Component<{}, state>{

    constructor(props: any) {
        super(props);
        var listCart = CartService.getListCart();
        this.state = {
            listCart: listCart
        }
    }
   
    render() {
        
        return (

            <div className="buyingList">
                <h3 className="title">
                    Gio hang
                    </h3>
                <div className="headList">
                    <div className="item-headList"></div>
                    <div className="item-headList"><span>San pham</span></div>
                    <div className="item-headList"><span>Don gia</span></div>
                    <div className="item-headList"><span>So luong</span></div>
                    <div className="item-headList"><span>Thao tac</span></div>
                </div>
                <div className="product-info">

                    {this.state.listCart.map((item: any) => {
                  
                        return (
                            <CartItem
                                id={item.id}
                                amount={item.amount}
                                onSuccess={this.onReloadBuyingList}
                            ></CartItem>
                        );
                    })}

                </div>
            </div>


        );
    }
    onReloadBuyingList = () => {
        var list = CartService.getListCart()
        this.setState({
            listCart: list
        });
    }
}

type state = {
    listCart: any
}

export default BuyingList;