import {useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {calculateTotal} from "../services/productoServicie.js";

export const CarroDeCompras = ({items, handlerDelete})=> {

    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setTotal(calculateTotal(items));
    }, [items]);

    const onDeleteProduct = (id) => {
        // console.log('eliminado producto')
        handlerDelete(id);
    }
    return(

        <>
        <table className={'table table-hover table-striped'}>
            <thead>
            <tr>
                <th>Producto</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
                <th>Eliminar</th>
            </tr>
            </thead>
            <tbody>
            {items.map(item => (
                <tr key={item.product.id}>
                    <td>{item.product.name}</td>
                    <td>{item.product.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity * item.product.price}</td>
                    <td><button
                        className="btn btn-danger"
                        onClick={() => onDeleteProduct(item.product.id)}>eliminar</button></td>
                </tr>

            ))}

            </tbody>
            <tfoot>
            <tr>
                <td colSpan="3" className="text-end fw-bold">Total</td>
                <td colSpan="2" className="text-start fw-bold">{ total }</td>
            </tr>
        </tfoot>
        </table>
        </>
    )
}