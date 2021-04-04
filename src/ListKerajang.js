import React, {Component} from 'react'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class ListProducts extends Component{

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isloaded: false,
    }
  }
    
      componentDidMount() {
        fetch('http://localhost:3002/kerajang')
                .then(res=>res.json())
                .then(jsonResultApi=>{
                  this.setState({
                    isloaded: true,
                    items: jsonResultApi,
                  })
                });
      }

      render(){

        var {isloaded, items} = this.state;
        var totalprice = 0;
        var CurrencyFormat = require('react-currency-format');

        if (!isloaded){
          return <div>Loading ...</div>
        }else{
          return(
           
            <div className="container" >
            <h3>All product</h3>
            <table className="table">
              <thead>
                        <th>NO.</th>
                        <th>ID product</th>
                        <th>Nama</th>
                        <th>Harga</th>
                        <th>Qty</th>
                        <th>Subtotal</th>
              </thead>
              <tbody>
               
                  {items.map(item =>(

                      <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.id}</td>
                          <td>{item.nama_produk}</td>
                          <td><CurrencyFormat value={item.harga} displayType={'text'} 
                                thousandSeparator={true} prefix='RP' /></td>
                          <td>{item.qtt} </td>
                          <td><CurrencyFormat value={item.harga*item.qtt} displayType={'text'} 
                                thousandSeparator={true} prefix='RP' /> </td>
                      </tr>
                  ))}
                  {items.map(item => 
                  {for (let index = 0; index < item.length; index++) {
                    const item1 = item[index];
                    totalprice += item1.qtt*item1.harga;
                    return <tr key={item.id} >
                      <td colSpan="5" >Total</td>
                      <td> totalprice </td>
                    </tr>
                  }}  
                    )}
              </tbody>
            </table>
            </div>
          )
        }
    }
}

export default ListProducts;
// json-server --watch kerajang.json --port 3002