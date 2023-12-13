import {Navbar} from "./componentes/Navbar.jsx";
import {CartRoutes} from "./routes/CartRoutes.jsx";
import {useItemsCart} from "./hooks/useItemsCart.js";
import {CarroDeCompras} from "./componentes/CarroDeCompras.jsx";
import {CatalogoProductos} from "./componentes/CatalogoProductos.jsx";

export const PaginaPrincipal = ()=> {

    const {cartItems, handlerAddProductCart, handlerDeleteProductCart } = useItemsCart()

    /*
     <CartRoutes>
                    cartItems={cartItems}
                    handlerAddProductCart={handlerAddProductCart}
                    handlerDeleteProductCart={handlerDeleteProductCart}
                </CartRoutes>
     */
    return(
        <>
            <Navbar></Navbar>

            <div className={'container my-4'}>
                <h2 className={'text-danger'}>PEDIDOS YAA</h2>

                <CatalogoProductos handler={handlerAddProductCart}/>
                <CarroDeCompras items={cartItems} handlerDelete={handlerDeleteProductCart} />
               </div>


        </>
    )
}