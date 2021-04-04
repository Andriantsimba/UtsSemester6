import './style.css';
import ListProducts from './ListProducts'
import Abouts from './Abouts'
import ListKerajang from './ListKerajang'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Main(){
  return(
    <Router>
      <div >
        <ul className="header">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/listProduct">List Produk</Link>
          </li>
          <li>
            <Link to="/kerajang">Kerajang</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
        <hr />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/listProduct">
            <ListProduct />
          </Route>
          <Route path="/kerajang">
            <Kerajang />
          </Route>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home(){
  return(
    <div className="homeContainer">
      <h2 className="head">Welcome to our Shop *~* </h2>
      <p className="body">Get your dreamed HandPhone from our shop, <br/>
          You are always welcomed into our shop.
      </p>
    </div>
  );
}

function ListProduct(){
  return(
   <ListProducts />
  );
}

function Kerajang(){
  return(
      <ListKerajang />
  );
}

function About(){
  return(
    <Abouts />
  );
}
