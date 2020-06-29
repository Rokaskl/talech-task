import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ProductPreview from "./components/ProductPreview";
import ProductsList from "./components/ProductsList";
import ProductNew from "./components/ProductNew";
import ProductEdit from "./components/ProductEdit";

function App() {
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
