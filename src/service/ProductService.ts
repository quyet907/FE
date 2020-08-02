import { Product } from "../model/Product";
var axios = require('axios')
export class ProductService {
    public static getList = (): Product[] => {
        var JSONProducts = localStorage.getItem('products2');
        var products = []
        if (JSONProducts != null) products = JSON.parse(JSONProducts);
        return products;
    }

    public static getByID = (id: string): Product | undefined => {
        var product = ProductService.getList().find((item) => item.id == id);
        return product;
    }
    public static create = (product: Product) => {
        var products = ProductService.getList();
        products.push(product);
        localStorage.setItem('products2', JSON.stringify(products));
    }

    public static update = (product: Product) => {
        var products = ProductService.getList();
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            // element.id = product.id;
            if (element.id == product.id) {
                element.name = product.name;
                element.afterSale = product.afterSale;
                element.beforeSale = product.beforeSale;
                break;
            }
            
        }
        localStorage.setItem('products2', JSON.stringify(products));
    }

    public static delete = (id: string) => {
        var products = ProductService.getList();
        for (let i = 0; i < products.length; i++) {
            const element = products[i];
            if (element.id == id) {
                products.splice(i, 1);
            break;
            }
        }
        localStorage.setItem('products2', JSON.stringify(products));
    }

    

    

};