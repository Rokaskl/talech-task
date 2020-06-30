import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import moment from "moment";
import ProductForm from "../components/ProductForm";

export default function ProductNew(props) {
  const products = JSON.parse(localStorage.getItem("products"));
  const [newProduct, setNewProduct] = useState({
    name: "",
    ean: "",
    type: "",
    weight: "",
    color: "",
    active: false,
    quantity: "",
    price: "",
  });
  const [errors, setErrors] = useState({});
  const [edited, setEdited] = useState(false);

  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
    setEdited(true);
  };

  const handleSubmit = () => {
    if (validate()) {
      const id = generateId();

      let newQuantityEntry = [
        moment(Date.now()).format("YYYY-MM-DD:HH:mm:ss"),
        Number(newProduct.quantity),
      ];

      let newPriceEntry = [
        moment(Date.now()).format("YYYY-MM-DD:HH:mm:ss"),
        Number(newProduct.price),
      ];

      localStorage.setItem(
        "products",
        JSON.stringify([
          ...products,
          {
            ...newProduct,
            id: id,
            quantityHistory: [newQuantityEntry],
            priceHistory: [newPriceEntry],
          },
        ])
      );
      props.history.push("/products");
    }
  };

  function generateId() {
    const max = products.reduce((prev, current) =>
      prev.y > current.y ? prev : current
    ).id;
    return max + 1;
  }

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

  return (
    <div>
      <Typography variant="h6" gutterBottom>
        Create <b>New Product</b>
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
