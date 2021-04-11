import React, {Component} from 'react'
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

var total, subtotal,no,qtt;
class ListProducts extends Component{

  state = {
      kerajang: [],
    }
  
  getData = () => {
    fetch('http://localhost:3002/kerajang')
    .then(res=>res.json())
    .then(jsonResultApi=>{
      this.setState({
        kerajang: jsonResultApi,
      })
    });
  }
    
      componentDidMount() {
       this.getData();
      }

      listItem(){
        var CurrencyFormat = require('react-currency-format');
        total = 0;
        subtotal = 0;
        no = 0;
        qtt =1;
        return this.state.kerajang.map((kerajang) => {
          subtotal = kerajang.harga;
          total = total + kerajang.harga;
          no +=1;
          qtt =1;
          return(
            <tr key={kerajang.id}>
              <td>{no}</td>
              <td>{kerajang.id}</td>
              <td>{kerajang.nama}</td>
              <td><CurrencyFormat value={kerajang.harga} displayType={'text'} 
                            thousandSeparator={true} prefix='RP' /></td>
              <td>{qtt}</td>
              <td><CurrencyFormat value={subtotal} displayType={'text'} 
                            thousandSeparator={true} prefix='RP' /></td>
            </tr>
          );
        });
      }

      clearbtn = (data) =>{
        fetch(`http://localhost:3002/kerajang/${data}`,{
          method: "DELETE",
      });
    }
      render(){
        var CurrencyFormat = require('react-currency-format');
          return(
            
            <div className="container" >
            <h3>Purchased Product</h3>
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
               {this.listItem()}   
              </tbody>
              <tfoot>
                <td colSpan="5" >
                  Total
                </td>
                <td><CurrencyFormat value={total} displayType={'text'} 
                            thousandSeparator={true} prefix='RP' /></td>
              </tfoot>
            </table>
            </div>
          )
        }
    
}

export default ListProducts;
// json-server --watch kerajang.json --port 3002