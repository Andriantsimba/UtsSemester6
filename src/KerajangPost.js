import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const KerajangPost = (props) =>{
    return(
        // <div className="product">
            <table striped bordered hover variant="dark">
                <thead>
                <tr>
                    <th>NO.</th>
                    <th>ID product</th>
                    <th>Nama</th>
                    <th>Harga</th>
                    <th>Qty</th>
                    <th>Subtotal</th> 
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>#</td>
                        <td>{props.id}</td>
                        <td>{props.nama}</td>
                        <td>{props.harga} </td>
                        <td>{props.qtt}</td>
                        <td>{props.subtotal}</td>
                    </tr>
                    <tr>
                        <td colSpan="4">Total</td>
                        <td>{props.grandTotal}</td>
                    </tr>
                </tbody>
            </table>
            /* <div className="content">
                <h5 className="nama">ID Produk: {props.id}</h5>
                <h5 className="nama">Nama Produk: {props.nama}</h5>
                <h5 className="harga">Harga: {props.harga}</h5>
                <h5 classname="stok">Qtt: {props.qtt}</h5>
            </div> */
        // </div>

        
    );
}
export default KerajangPost; 
    ;