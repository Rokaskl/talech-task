import React from "react";

export default function ProductDetails(props) {
  const product = props.product;
  return (
    <div>
      <p>Name {product.name}</p>
      <p>EAN {product.ean}</p>
      <p>Type {product.type}</p>
      <p>Weight {product.weight}</p>
      <p>Color {product.color}</p>
      <p>Quantity{product.quantity}</p>
      <p>Price {product.price}</p>
      <p>Active {product.active}</p>
    </div>
  );
}
