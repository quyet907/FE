import ProductItem from "../component/ProductItem";
import { ProductService } from "./ProductService";
import { ItemCart } from "../model/CartItem";
import { execFileSync } from "child_process";

export class CartService {
    public static getListCart = (): ItemCart[] => {
        var JSONList = localStorage.getItem('ListCart');
        var list = [];
        if (JSONList != null) list = JSON.parse(JSONList);
        return list;
    }
    public static addProduct = (id: string) => {
        var list = CartService.getListCart();
        var item = list.find(item => item.id == id);

        if (item == undefined) {
            list.push({ id: id, amount: 1 });
        } else {
            for (let i = 0; i < list.length; i++) {
                const element = list[i];
                if (element.id == item.id) {
                    element.amount++;
                    break;
                }
            }
        }
        localStorage.setItem('ListCart', JSON.stringify(list));

    }

    public static updateNumber = (id: string, change: number) => {
        var list = CartService.getListCart();
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            // element.id = product.id;

            if (element.id == id) {
                if (change == 1) {
                    element.amount++;
                    localStorage.setItem('ListCart', JSON.stringify(list));
                    break;
                } else {
                    element.amount--;
                    localStorage.setItem('ListCart', JSON.stringify(list));
                    if (element.amount == 0) {
                      
                        CartService.deleteCartItem(id);
                     
                    }
                    break;
                }



            }

        }
        
    }


    public static deleteCartItem = (id: string) => {
        var list = CartService.getListCart();
        for (let i = 0; i < list.length; i++) {
            const element = list[i];

            if (element.id == id) {

                list.splice(i, 1);
                break;
            }

        }
        localStorage.setItem('ListCart', JSON.stringify(list));
    }
}