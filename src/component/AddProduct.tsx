import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { v4 as uuidv4 } from 'uuid'
import { ProductService } from '../service/ProductService';
import { connect } from 'react-redux';
import * as actions from '../actions/productActions';

var axios = require('axios');
class AddProduct extends Component<props, state>{
    constructor(props: any) {
        super(props);
        this.state = {

            name: '',
            beforeSale: 0,
            afterSale: 0,
            img: ''
        }
    }

    postFn = (product: any) => {
        console.log(product);
        axios.post(`product/create`, { product: product })
            .then((res: any) => {
                console.log(res.data)
                //console.log(JSONProducts)
            })
            .catch((error: any) => console.log(error));
    }


    render() {
        return (
            <div className="container-popup" id="container-popup">


                <div className="popup-add-product" id="popup-add-product">
                    <div className="popup">
                        <div className="btn-close"><span className="btn-close-popup" onClick={() => {
                            this.props.closePopup();


                        }}>&#x2715;</span></div>

                        <h2 className="name">Them san pham</h2>
                        <label htmlFor="">Ten</label>
                        <input type="text" onChange={event => {
                            this.setState({
                                name: event.target.value
                            })
                        }} />

                        <label htmlFor="">Gia ban</label>
                        <input type="number" name="" id="" onChange={event => {
                            this.setState({
                                afterSale: parseInt(event.target.value)
                            })
                        }} />

                        <label htmlFor="">Gia goc</label>
                        <input type="number" name="" id="" onChange={event => {
                            this.setState({
                                beforeSale: parseInt(event.target.value)
                            })
                        }} />

                        <label htmlFor="">Hinh anh</label>
                        <input type="text" name="" id="" onChange={event => {
                            this.setState({
                                img: event.target.value
                            })
                        }} />

                        <button onClick={
                            event => {
                                // var name = this.state.name;
                                // var afterSale = this.state.afterSale;
                                // var beforeSale = this.state.beforeSale;
                                // var img = this.state.img;
                                // var product = { name: name, afterSale: afterSale, beforeSale: beforeSale, img: img }
                                //ProductService.create(product);
                                
                                this.props.onAddProduct(this.state)
                                // axios.post(`product/create`, { product: product })
                                // .then((res: any) => {
                                //     console.log(res.data)
                                //     //console.log(JSONProducts)
                                // })
                                // .catch((error: any) => console.log(error));
                               

                            }
                        }>Them</button>
                    </div>
                </div>
            </div>
        );
    }


}

type props = {
    closePopup: any,
    onAddProduct: any
}

type state = {

    name: string;
    afterSale: number;
    beforeSale: number;
    img: string
}

const mapDispatchToProps = (dispatch:any, props:any) => {
    return {
        onAddProduct: (product:any) => {
            dispatch(actions.addProduct(product))
        }
    }
}

export default connect(null, mapDispatchToProps)(AddProduct);