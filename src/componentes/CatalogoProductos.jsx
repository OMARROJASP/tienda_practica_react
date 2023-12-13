import {useEffect, useState} from "react";
import {ProductoView} from "./ProductoView.jsx";
import {getProducts} from "../services/productoServicie.js";

export const CatalogoProductos = ({handler})=> {
    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getProducts)
    }, []);


    return(
        <>
            <div className={'row'}>
                {products.map(prod => (
                    <div className={'col col-4 my-2'}
                         key={prod.id}>
                        <ProductoView
                            handler={handler}
                            id={prod.id}
                            name={prod.name}
                            description={prod.description}
                            price={prod.price}
                        />
                    </div>
                ))}
            </div>
        </>
    )
}