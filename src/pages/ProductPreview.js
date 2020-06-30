import React, { useState } from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProductDetails from "../components/ProductDetails";
import ProductPriceHistory from "../components/ProductPriceHistory";
import ProductQuantityHistory from "../components/ProductQuantityHistory";
import { IconButton, Tooltip } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";

const useStyles = makeStyles({
  root: {
    display: "flex",
    marginBottom: "1em",
  },
});

export default function ProductPreview(props) {
  const { url } = useRouteMatch();
  const id = props.match.params.id;
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((obj) => {
    return obj.id === id;
  });

  if (!product) {
    props.history.push("/products");
  }

  const classes = useStyles();
  const [tab, setTab] = useState(0);

  const handleChange = (event, newTab) => {
    setTab(newTab);
  };

  return !product ? (
    <h2>Nothing found... :(</h2>
  ) : (
    <div>
      <Paper className={classes.root}>
        <Tooltip title="Back To List">
          <IconButton aria-label="back" component={Link} to="/products">
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
        <Tabs
          value={tab}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          centered
        >
          <Tab label="Product details" component={Link} to={`${url}/details`} />
          <Tab
            label="Price history"
            component={Link}
            to={`${url}/priceHistory`}
          />
          <Tab
            label="Quantity history"
            component={Link}
            to={`${url}/quantityHistory`}
          />
        </Tabs>
      </Paper>
      <Paper>
        <Switch>
          <Route
            path={`${url}/priceHistory`}
            component={() => <ProductPriceHistory product={product} />}
          />
          <Route
            path={`${url}/quantityHistory`}
            component={() => <ProductQuantityHistory product={product} />}
          />
          <Route component={() => <ProductDetails product={product} />} />
        </Switch>
      </Paper>
    </div>
  );
}
