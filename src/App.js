import React from "react";
import { Home } from "./Components/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Store } from "../src/Redux/Store";
import { Provider } from "react-redux";
import ProductDetails from "../src/Components/ProductDetails";
import Card from "./Components/Card";
import Navbar from "./Components/Navbar";
import "../src/App.css";
import { ToastContainer } from "react-toastify";
import WishList from "./Components/WishList";
import Comparition from "./Components/Comparison";

const App = () => {
  return (
    <>
      <Provider store={Store}>
        <ToastContainer />
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route
              path="/ProductDetails/:id"
              component={ProductDetails}
            ></Route>
            <Route path="/card" component={Card}></Route>
            <Route path="/wishlist" component={WishList}></Route>
            <Route path="/compare_product" component={Comparition}></Route>
          </Switch>
        </Router>
      </Provider>
    </>
  );
};

export default App;
