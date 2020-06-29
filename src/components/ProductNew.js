import React, { useState } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

export default function ProductNew(props) {
  const products = JSON.parse(localStorage.getItem("products"));
  const [newProduct, setNewProduct] = useState({
    name: "",
    ean: "",
    type: "",
    weight: "",
    color: "",
    active: true,
    quantity: "",
    price: "",
  });
  const [errors, setErrors] = useState({});
  const handleChange = (event) => {
    setNewProduct({
      ...newProduct,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = () => {
    if (validate()) {
      const id = generateId();
      console.log(id);
      localStorage.setItem(
        "products",
        JSON.stringify([...products, { ...newProduct, id: id }])
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
      if (!newProduct[property]) {
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
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="name"
              name="name"
              label="Name"
              value={newProduct.name}
              onChange={handleChange}
              error={errors.hasOwnProperty("name") ? true : false}
              helperText={errors.hasOwnProperty("name") ? errors.name : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="ean"
              name="ean"
              label="EAN"
              defaultValue={newProduct.ean}
              onChange={handleChange}
              error={errors.hasOwnProperty("ean") ? true : false}
              helperText={errors.hasOwnProperty("ean") ? errors.ean : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="type"
              name="type"
              label="Type"
              defaultValue={newProduct.type}
              onChange={handleChange}
              error={errors.hasOwnProperty("type") ? true : false}
              helperText={errors.hasOwnProperty("type") ? errors.type : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="weight"
              name="weight"
              label="Weight"
              defaultValue={newProduct.weight}
              onChange={handleChange}
              error={errors.hasOwnProperty("weight") ? true : false}
              helperText={errors.hasOwnProperty("weight") ? errors.weight : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="color"
              name="color"
              label="Color"
              defaultValue={newProduct.color}
              onChange={handleChange}
              error={errors.hasOwnProperty("color") ? true : false}
              helperText={errors.hasOwnProperty("color") ? errors.color : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="quantity"
              name="quantity"
              label="Quantity"
              defaultValue={newProduct.quantity}
              onChange={handleChange}
              error={errors.hasOwnProperty("quantity") ? true : false}
              helperText={
                errors.hasOwnProperty("quantity") ? errors.quantity : ""
              }
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              required
              id="price"
              name="price"
              label="Price"
              defaultValue={newProduct.price}
              onChange={handleChange}
              error={errors.hasOwnProperty("price") ? true : false}
              helperText={errors.hasOwnProperty("price") ? errors.price : ""}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleSubmit()}
            >
              Save
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => {
                props.history.push("/products");
              }}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}
