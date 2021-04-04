import React, {Component} from 'react'
import Post from './Post'
import './style.css';


class ListProducts extends Component{
    state = {
        listProduct: []
      }
      componentDidMount() {
        fetch('http://localhost:3001/smartphone')
                .then(res=>res.json())
                .then(jsonResultApi=>{
                  this.setState({
                    listProduct: jsonResultApi
                  })
                })
      }
      render(){
        var CurrencyFormat = require('react-currency-format');
    return (
        <div className="card" >
        <h3>All product</h3>
          {
            this.state.listProduct.map(product => {
              return<Post 
                      key={product.id} 
                      id={product.id}
                      gambar={product.gambar}
                      nama={product.nama_produk} 
                      harga={ <CurrencyFormat value={product.harga} displayType={'text'} 
                      thousandSeparator={true} prefix='RP' />} 
                      stok={product.stok}/>
            })
          }
        </div>
        );
    }
}

export default ListProducts;
// json-server --watch listproduct.json --port 3001