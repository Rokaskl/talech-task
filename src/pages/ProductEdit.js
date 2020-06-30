import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import ProductForm from "../components/ProductForm";

export default function ProductEdit(props) {
  const id = props.match.params.id;
  const products = JSON.parse(localStorage.getItem("products"));
  const product = products.find((obj) => {
    return obj.id === id;
  });
  const [newProduct, setNewProduct] = useState(product);
  const [edited, setEdited] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
    setEdited(true);
  };

  const handleSubmit = () => {
    const index = products.findIndex((obj) => obj.id === id);
    if (validate()) {
      handleHistory();
      let newProducts = products;
      newProducts[index] = newProduct;
      localStorage.setItem("products", JSON.stringify(newProducts));
      props.history.push("/products");
    }
  };

  function validate() {
    let tempErrors = {};
    //Check empty fields
    for (var property in newProduct) {
      if (newProduct[property].length <= 0) {
        tempErrors = {
          ...tempErrors,
          [property]: "Can not be empty!",
        };
      }
    }
    //Check EAN
    if (!/^\d{13}$/.test(newProduct.ean)) {
      tempErrors = {
        ...tempErrors,
        ean: "Wrong format!",
      };
    }
    //Check quantity
    if (!/^\d+$/.test(newProduct.quantity) || newProduct.quantity < 0) {
      tempErrors = {
        ...tempErrors,
        quantity: "Wrong format!",
      };
    }
    //Check price
    if (!/(\d+\.?\d?)/.test(newProduct.price) || newProduct.price < 0) {
      tempErrors = {
        ...tempErrors,
        price: "Wrong format!",
      };
    }
    //Check weight
    if (!/(\d+\.?\d?)/.test(newProduct.weight) || newProduct.weight < 0) {
      tempErrors = {
        ...tempErrors,
        weight: "Wrong format!",
      };
    }
    if (Object.keys(tempErrors).length !== 0) {
      setErrors(tempErrors);
      return false;
    }
    return true;
  }

  const handleHistory = () => {
    if (
      newProduct.priceHistory.slice(-1).pop()[1] !== Number(newProduct.price)
    ) {
      let newPriceEntry = [
        moment(Date.now()).format("YYYY-MM-DD:HH:mm:ss"),
        Number(newProduct.price),
      ];
      setNewProduct({
        priceHistory: newProduct.priceHistory.push(newPriceEntry),
        ...newProduct,
      });
    }
    if (
      newProduct.quantityHistory.slice(-1).pop()[1] !==
      Number(newProduct.quantity)
    ) {
      let newQuantityEntry = [
        moment(Date.now()).format("YYYY-MM-DD:HH:mm:ss"),
        newProduct.quantity,
      ];
      setNewProduct({
        quantityHistory: newProduct.quantityHistory.push(newQuantityEntry),
        ...newProduct,
      });
    }
  };

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Edit <b>{product.name}</b>
      </Typography>
      <Paper>
        <ProductForm
          errors={errors}
          newProduct={newProduct}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          edited={edited}
        />
      </Paper>
    </div>
  );
}
