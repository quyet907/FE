import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { ProductService } from '../service/ProductService';
import { v4 as uuidv4 } from 'uuid';
import EditableItem from './EditableItem';
var axios = require('axios');
// var list = [{
//     id: uuidv4(),
//     name: "Skool Old", beforeSale: 120, afterSale: 100,
//     img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
// },
// {
//     id: uuidv4(),
//     name: "Skool Old", beforeSale: 120, afterSale: 100,
//     img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
// },
// {
//     id: uuidv4(),
//     name: "Skool Old", beforeSale: 120, afterSale: 100,
//     img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
// }, {
//     id: uuidv4(),
//     name: "Skool Old", beforeSale: 120, afterSale: 100,
//     img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
// }, {
//     id: uuidv4(),
//     name: "Skool Old", beforeSale: 120, afterSale: 100,
//     img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
// }, {
//     id: uuidv4(),
//     name: "Skool Old", beforeSale: 120, afterSale: 100,
//     img: "https://images.vans.com/is/image/Vans/D3HY28-HERO?$583x583$"
// }];
// localStorage.setItem('products2', JSON.stringify(list));

class ProductsStories extends Component <props, state>{
    constructor(props:any){
        super(props);
        
        var products = this.props.products;
        this.state = {
            products: products
        }
    }

    // componentDidMount(){
    //     axios.get('product').then((res:any) => {
    //         this.setState({
    //             products: res.data
    //         })
    //     })
    // }

    // componentWillUpdate(){
    //     axios.get('product').then((res:any) => {
    //         this.setState({
    //             products: res.data
    //         })
    //     })
    // }


    render() {
        return (
            <div className="products">

                {this.state.products.map((product:any) => {
                    return (
                        <EditableItem
                            id={product.id}
                            name={product.name}
                            beforeSale={product.beforeSale}
                            afterSale={product.afterSale}
                            img={product.img}
                           action={this.handler}
                        ></EditableItem>
                    );
                })}

            </div>
        );
    }
  
    handler = async ()  => {
        //var products = ProductService.getList();
        await axios.get('product').then((res:any) => {
            this.setState({
                products: res.data
            })
        })
        // this.setState({
        //     products: products
        // });
      
    }
}

type state = {
    products: any
}

type props = {
    products: any;
   
}

export default ProductsStories;