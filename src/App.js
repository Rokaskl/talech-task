import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPreview from "./pages/ProductPreview";
import ProductsList from "./pages/ProductsList";
import ProductNew from "./pages/ProductNew";
import ProductEdit from "./pages/ProductEdit";
import data from "./data/dummy.json";

function App() {
  localStorage.setItem("products", JSON.stringify(data.products));
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/products/create" component={ProductNew} />
          <Route path="/products/:id/edit" component={ProductEdit} />
          <Route path="/products/:id" component={ProductPreview} />
          <Route path="/products" component={ProductsList} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
