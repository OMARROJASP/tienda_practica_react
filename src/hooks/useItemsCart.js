import {useEffect, useReducer} from "react";
import {itemsReducer} from "../reducer/itemsReducer.js";
import {AddProductCart, DeleteProductCart, UpdateQuantityProductCart} from "../reducer/itemsActions.js";

const inititalCartItems =JSON.parse(sessionStorage.getItem('carro')) || [];
export const useItemsCart = () => {

    const [cartItems, dispatch] = useReducer(itemsReducer,inititalCartItems )
    useEffect(() => {
        sessionStorage.setItem('carro', JSON.stringify(cartItems));
    }, [cartItems]);
   const handlerAddProductCart = (product) => {

        const hasItem = cartItems.find((i) => i.product.id === product.id)
       console.log("..")
       console.log(cartItems)
       if(hasItem) {
           dispatch(
               {
                   type:UpdateQuantityProductCart,
                   payload:product,
               }
           );
       }else{
           dispatch(
               {
                   type:AddProductCart,
                   payload: product,
               }
           );
       }

   }

   const handlerDeleteProductCart = (id) => {
        dispatch(
            {
                type:DeleteProductCart,
                payload:id,
            }
        )
   }

   return{
       cartItems,
       handlerAddProductCart,
       handlerDeleteProductCart
   }

}