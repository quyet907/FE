import * as Types from '../constants/ActionTypes';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';


var callAPI = require('../service/callAPI');
var JSONData = localStorage.getItem('products2');
var data = JSONData ? JSON.parse(JSONData) : [];

var initialState = data ? data : []

// callAPI('products', 'GET', "null").then((res:any)=> {
//     //initialState = res.data;
// })




const products = (state = initialState, action: any) => {
    switch (action.type) {
        case Types.FETCH_PRODUCTS:
            //state = action.products;
            return [...state];

        case Types.ADD_PRODUCT:
            // console.log(action);
            var newProduct = {
                id: uuidv4(),
                name: action.product.name,
                afterSale: action.product.afterSale,
                beforeSale: action.product.beforeSale,
                img: action.product.img
            }

            state.push(newProduct);
            localStorage.setItem('products2', JSON.stringify(state))

            return [...state];

        case Types.DELETE_PRODUCT:
            var index = state.findIndex(state,);

            state.splice(index, 1);
            break;


            localStorage.setItem('products2', JSON.stringify(state))
            return [...state]
        default:
            return [...state]
    }
}

export default products;