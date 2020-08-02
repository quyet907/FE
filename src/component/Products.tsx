import React, { Component } from 'react';
import ProductItem from './ProductItem';
import { ProductService } from '../service/ProductService';
import { v4 as uuidv4 } from 'uuid';
var axios = require('axios')
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

class Products extends Component <props, state>{
    constructor(props:any){
        super(props);
        
        // var products = this.props.products;
        this.state = {
            products: []
        }
    }

    componentDidMount(){
       
        axios.get(`product`)
            .then((res: any) => {
           
                this.setState({products: res.data});

               console.log(res.data)
                //console.log(JSONProducts)
            })
            .catch((error: any) => console.log(error));
    }
    render() {
       
        // console.log(this.state.products)
        return (
            <div className="products">

                {this.state.products.map((product:any) => {
                   
                    return (
                        <ProductItem
                            id={product['_id']}
                            name={product.name}
                            beforeSale={product.beforeSale}
                            afterSale={product.afterSale}
                            img={product.img}
                        ></ProductItem>
                    );
                })}

            </div>
        );
    }
}

type state = {
    products: any
}

type props = {
}

export default Products;