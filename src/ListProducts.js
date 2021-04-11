import React, {Component} from 'react'
// import Post from './Post'
import './style.css';


class ListProducts extends Component{
   state = {
        listProduct: [],
       
    }
    
      getData=()=> {
        fetch('http://localhost:3001/smartphone')
                .then(res=>res.json())
                .then(data=>{
                  this.setState({
                    listProduct: data,
                  })
                })
      }

      componentDidMount(){
        this.getData()
      }

      handleGetProduct = (data) => {
        fetch(`http://localhost:3001/smartphone/${data}`, {method: "GET"})
        .then((response) => response.json())
        .then((res)=> {
          var item = {...this.state.insertKerajang };
          item["id"] = res["id"];
          item["nama"] = res["nama_produk"];
          item["harga"] = res["harga"];
          item["qtt"] = 1;
          this.setState({
            insertKerajang: item,
          });
        })
        .then(()=> {
          this.handleKerajang(data);
        })
        .then(()=>{
          this.handleSaveBtn();
        });
      }
      


     
      listProduct(){
        var CurrencyFormat = require('react-currency-format');
        return this.state.listProduct.map((product) => {
             return(
        <div className="product" key={product.id}>
            <div className="image-prod">
                <img src={product.gambar} alt="smartphone" />
            </div>
        <div className="ribet">
            <div className="content">
                <h5 className="nama">Id: {product.id}</h5>
                <h5 className="nama">Nama Produk: {product.nama_produk}</h5>
                <h5 className="harga">Harga: <CurrencyFormat value={product.harga} displayType={'text'} 
                          thousandSeparator={true} prefix='RP' /></h5>
            </div>
            <div className="content1">
                <h5 classname="stok">Stok: {product.stok}</h5>
                <button className="belibtn" onClick={()=>this.handleGetProduct(product.id)}>Buy</button>
            </div>
            </div>
        </div>
    );
  });
  } 

  handleKerajang = (data) => {
    fetch(`http://localhost:3002/kerajang/${data}`, {method: "GET"})
    .then((response) => {
      if (response.ok) {
        response.json().then((res) => {
          this.handleUpdatekerajang(data, res);
          this.getData();
        });
      }else{
        this.handleSaveBtn();
      }
    })
  }
  handleUpdatekerajang = (data, res) => {
    fetch(`http://localhost:3002/kerajang/${data}`,{
      method: "PUT",
    headers:{
      Accept: "application/json",
      "Content-Type": "application/json",
    },
      body: JSON.stringify({
        id: res["id"],
        nama: res["nama"],
        harga: res["harga"],
        stok: res["stok"]
      }),
  });
  }

  handleSaveBtn = () => {
    fetch("http://localhost:3002/kerajang", {
      method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type" : "application/json; charset=UTF-8",
    },
    body: JSON.stringify(this.state.insertKerajang),
    }).then((Response) => {
      this.getData();
    });
  };

    render(){
        return (
            <div className="card" >
            <h3>All product</h3>
              {this.listProduct()}
            </div>
            );
        }
}

export default ListProducts;
// json-server --watch listproduct.json --port 3001