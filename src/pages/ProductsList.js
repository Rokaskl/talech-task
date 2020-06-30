import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import { Link } from "react-router-dom";
import DeleteModal from "../components/DeleteModal";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProductsList() {
  const data = JSON.parse(localStorage.getItem("products"));
  const classes = useStyles();
  const [products, setProducts] = useState(data);
  const toggleActive = (id) => {
    const index = products.findIndex((obj) => obj.id === id);
    let newProducts = [...products];
    let product = { ...products[index] };
    product.active = !product.active;
    newProducts[index] = product;

    setProducts(newProducts);
    localStorage.setItem("products", JSON.stringify(newProducts));
  };

  return (
    <TableContainer component={Paper}>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to={`products/create`}
      >
        Create Product
      </Button>
      <Table className={classes.table} aria-label="products table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>EAN</TableCell>
            <TableCell>Type</TableCell>
            <TableCell align="right">Weight(Kg)</TableCell>
            <TableCell>Color</TableCell>
            <TableCell align="right">Quantity</TableCell>
            <TableCell align="right">Price(Eur)</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((row) => (
            <TableRow
              key={row.name}
              style={row.quantity === 0 ? { backgroundColor: "#ffdee2" } : {}}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell>{row.ean}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell align="right">{row.weight}</TableCell>
              <TableCell>{row.color}</TableCell>
              <TableCell align="right">{row.quantity}</TableCell>
              <TableCell align="right">{row.price}</TableCell>
              <TableCell>
                <Checkbox
                  color="primary"
                  checked={row.active}
                  onClick={() => {
                    toggleActive(row.id);
                  }}
                />
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  component={Link}
                  to={`products/${row.id}`}
                >
                  View
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`products/${row.id}/edit`}
                >
                  Edit
                </Button>
                <DeleteModal />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
