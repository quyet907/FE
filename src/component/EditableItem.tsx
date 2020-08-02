import React, { Component } from 'react';
import { type } from 'os';
import { v4 as uuidv4 } from 'uuid';
import { ProductService } from '../service/ProductService';
import { CartService } from '../service/CartService';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions'

var axios = require('axios');


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




class EditableItem extends Component<props, state>{
    constructor(props: any) {
        super(props);


        var cart = ProductService.getList();

        this.state = {
            cart: cart
        }

    }

    // removeProduct = (id: string) => {
    //     axios.delete(`product/remove/${id}`).then((res: any) => {
    //         console.log(id)
    //         //this.props.action();
    //         console.log(res.data)
    //     })
    // }
    render() {
        return (
            <div className="editable-items">
                <div className="btn-close">
                    <span className="btn" onClick={() => {
                        var id = this.props.id;
                        //this.removeProduct(id);
                        console.log(id)
                        this.props.onDeleteProduct({id: id});
                        //ProductService.delete(id);

                    }}
                    >&#x2715;</span>
                </div>
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
                        //this.removeProduct(this.props.id);
                        //this.action();
                    }}
                >Sua san pham</button></p>
            </div>
        );
    }

    action = () => {

    }

}

type props = {
    id: string;
    img: string;
    name: string;
    beforeSale: number;
    afterSale: number;
    onDeleteProduct: any;
}

type state = {
    cart: any
}

const mapDispatchToProps = (dispatch:any, id:any) => {
    return {
        onDeleteProduct: (id:any) => {
            dispatch(actions.deleteProduct(id));
        }
    }
}

export default connect(null, mapDispatchToProps) (EditableItem);