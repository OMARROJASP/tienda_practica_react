import {Navigate, Route, Routes} from "react-router-dom";
import {CarroDeCompras} from "../componentes/CarroDeCompras.jsx";
import {CatalogoProductos} from "../componentes/CatalogoProductos.jsx";

export const CartRoutes =({ handlerAddProductCart, handlerDeleteProductCart ,cartItems})=> {
    return(
        <Routes>
            <Route
                path="catalogo"
                element={<CatalogoProductos handler={handlerAddProductCart}/>}
            />

            <Route
                path="carro"
                element={(
                        cartItems?.length <= 0 ?
                            <div className="alert alert-warning">No hay productos en el carrito de compras!</div>
                            :
                            (
                                <div className="my-4 w-50">
                                    <CarroDeCompras items={cartItems} handlerDelete={handlerDeleteProductCart} />
                                </div>
                            )
                    )

                }
            />

            <Route path="/" element={<Navigate to={'/catalogo'} />} />
        </Routes>

    )
}