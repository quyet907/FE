import React, { Component } from 'react';
import { type } from 'os';
import { v4 as uuidv4 } from 'uuid';
import { ProductService } from '../service/ProductService';
import { CartService } from '../service/CartService';
import { Route, Link, useLocation  } from 'react-router-dom';
var axios = require('axios')
var list = [{
    id: uuidv4(),
    name: "Skool Old", beforeSale: 120, afterSale: 100,
    img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
},
{
    id: uuidv4(),
    name: "Skool Old", beforeSale: 120, afterSale: 100,
    img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
},
{
    id: uuidv4(),
    name: "Skool Old", beforeSale: 120, afterSale: 100,
    img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
}, {
    id: uuidv4(),
    name: "Skool Old", beforeSale: 120, afterSale: 100,
    img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
}, {
    id: uuidv4(),
    name: "Skool Old", beforeSale: 120, afterSale: 100,
    img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
}, {
    id: uuidv4(),
    name: "Skool Old", beforeSale: 120, afterSale: 100,
    img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
}];




class ProductItem extends Component<props, state>{
    constructor(props: any) {
        super(props);

        
        var cart = ProductService.getList();

        this.state = {
            cart: cart
        }

    }
    render() {
        return (
            <div className="product-items">
                <Link to={'/product/' + this.props.id} onClick= {()=>{
                   
                }}>
                
                
                <div className="img-items">
                    <img src={this.props.img} alt="product-img" />
                </div>

                <div className="name-items">
                    <h4 className="name">{this.props.name}</h4>
                </div>

                <p>
                    <span className="afterSale">{this.props.afterSale}$</span>
                    <span className="beforeSale">{this.props.beforeSale}$</span>
                </p>
                <p><button className="btn-add-product"
                    onClick={event => {
                        var cart = this.state.cart;
                        var id = this.props.id;
                       
                        // axios.post("/addcartitem", id)
                        // .then((res:any) => {
                        //   console.log(res.data);
                        // //   console.log(res.data);
                        // })

                        CartService.addProduct(id);
                    }}
                >Them san pham</button></p>
            </Link>
            </div>
        );
    }
    
}

type props = {
    id: string;
    img: string;
    name: string;
    beforeSale: number;
    afterSale: number;
}

type state = {
    cart: any
}

export default ProductItem;