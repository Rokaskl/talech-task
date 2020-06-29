import React from "react";
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

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ProductsList() {
  const classes = useStyles();
  const rows = JSON.parse(localStorage.getItem("products"));

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
          {rows.map((row) => (
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
                <Checkbox color="primary" checked={row.active} />
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
                <Button variant="contained" color="secondary">
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
