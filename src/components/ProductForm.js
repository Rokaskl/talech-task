import React from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
export default function ProductForm(props) {
  const errors = props.errors;
  const newProduct = props.newProduct;
  const handleChange = props.handleChange;
  const handleSubmit = props.handleSubmit;
  const edited = props.edited;

  return (
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
          value={newProduct.ean}
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
          value={newProduct.type}
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
          value={newProduct.weight}
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
          value={newProduct.color}
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
          value={newProduct.quantity}
          onChange={handleChange}
          error={errors.hasOwnProperty("quantity") ? true : false}
          helperText={errors.hasOwnProperty("quantity") ? errors.quantity : ""}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          fullWidth
          required
          id="price"
          name="price"
          label="Price"
          value={newProduct.price}
          onChange={handleChange}
          error={errors.hasOwnProperty("price") ? true : false}
          helperText={errors.hasOwnProperty("price") ? errors.price : ""}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button
          variant="contained"
          color="primary"
          disabled={!edited}
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
  );
}
