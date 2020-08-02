import * as Types from '../constants/ActionTypes';

export const fetchProducts = () => {
    return {
        type: Types.FETCH_PRODUCTS
    }
}

export const addProduct = (product:any) => {
    return {
        type: Types.ADD_PRODUCT,
        product
    }
}

export const updateProduct = (product:any) => {
    return {
        type: Types.UPDATE_PRODUCT,
        product
    }
}

export const deleteProduct = (product:any) => {
    return {
        type: Types.DELETE_PRODUCT,
        product
    }
}