import React from "react";
import { Route, Switch, Link, useRouteMatch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import ProductDetails from "./ProductDetails";
import ProductPriceHistory from "./ProductPriceHistory";
import ProductQuantityHistory from "./ProductQuantityHistory";
import { IconButton, Tooltip } from "@material-ui/core";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles({
  root: {
    display: "flex",
  },
});

export default function ProductPreview(props) {
  let { url } = useRouteMatch();

  const id = props.match.params.id;
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((obj) => {
    return obj.id === id;
  });

  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Paper className={classes.root}>
        <Tooltip title="Back To List">
          <IconButton aria-label="back" component={Link} to="/products">
            <ArrowBackIosIcon />
          </IconButton>
        </Tooltip>
        <Tabs
          value={value}
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
            component={() => <ProductPriceHistory />}
          />
          <Route
            path={`${url}/quantityHistory`}
            component={() => <ProductQuantityHistory />}
          />
          <Route component={() => <ProductDetails product={product} />} />
        </Switch>
      </Paper>
    </div>
  );
}
