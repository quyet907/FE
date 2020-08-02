import React, { Component, Props } from 'react';
import { ItemCart } from "../model/CartItem";
import { ProductService } from '../service/ProductService';
import { CartService } from '../service/CartService';
class CartItem extends Component <props, state> {
    constructor(props: any){
        super(props);
        var product = ProductService.getByID(this.props.id);
  
        this.state = {
            product: product,
            amount: this.props.amount
        
        }
        
    }

    componentWillReceiveProps(nextProps:props){
        console.log("will"+ nextProps.amount)
        this.setState({
            product : ProductService.getByID(nextProps.id)
        })
    }
    render() {
        console.log('render card item')
        return (
            <div className="cart-items">
                <div className="detailInfo">
                    <img src={this.state.product.img} alt=""/>
                </div>
                <div className="detailInfo">
                    <span className="name">
                    {this.state.product.name}
                    </span>
                </div>
                <div className="detailInfo">
                    <span className="afterSale">{this.state.product.afterSale}$</span>
                    <span className="beforeSale">{this.state.product.beforeSale}$</span>
                </div>
                <div className="detailInfo">
                    <button onClick={event => {
                        CartService.updateNumber(this.props.id, -1);
                   
                        this.setState({
                            amount: this.state.amount -1
                        });
                        this.props.onSuccess();
                    }}>-</button>
                    <input type="number" name="" id="" readOnly value={this.props.amount}/>
                    <button onClick={
                        event => {
                            CartService.updateNumber(this.props.id, 1);
                            this.props.onSuccess();
                            this.setState({
                                
                                amount: this.state.amount +1
                            });
                            this.props.onSuccess();
                        }
                    }>+</button>
                </div>
             
                <div className="detailInfo">
                    <button onClick={
                        event => {
                            var id = this.props.id;
                            console.log(id)
                            CartService.deleteCartItem(id);
                            
                            this.props.onSuccess();
                        }
                    }>Xoa</button>
                </div>
            </div>
        );
    }
}

type props = {
    id: string;
    amount: number;
    onSuccess(): void
}

type state = {
    product: any;
    amount: number;
}

export default CartItem;