import React from "react"
import './style.css';
// import data from './ListProducts.json'



const Post = (props) =>{
    return(
       
        <div className="product">
            <div className="image-prod">
                <img src={props.gambar} alt="smartphone" />
            </div>
        <div className="ribet">
            <div className="content">
                <h5 className="nama">Id: {props.id}</h5>
                <h5 className="nama">Nama Produk: {props.nama}</h5>
                <h5 className="harga">Harga: {props.harga}</h5>
            </div>
            <div className="content1">
                <h5 classname="stok">Stok: {props.stok}</h5>
                <button className="belibtn">Beli</button>
            </div>
            </div>
        </div>
    );
}
// print(data);
export default Post;