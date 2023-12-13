import {productos} from "../data/productos.js";

export const getProducts = ( )=> {
    return productos;
}

export const calculateTotal = (items) => {
    return items.reduce(
        (accumulator, item) => accumulator + item.product.price * item.quantity
        , 0);
}