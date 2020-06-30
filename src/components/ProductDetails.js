import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
export default function ProductDetails(props) {
  const product = props.product;
  return (
    <List aria-label="product details" style={{ marginTop: "1em" }}>
      <ListItem>
        <ListItemText>
          Name : <b>{product.name}</b>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          EAN : <b>{product.ean}</b>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          Type : <b>{product.type}</b>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          Weight : <b>{product.weight} Kg</b>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          Color : <b>{product.color} </b>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          Quantity : <b>{product.quantity} </b>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          Price : <b>{product.quantity} Eur</b>
        </ListItemText>
      </ListItem>
      <Divider />
      <ListItem>
        <ListItemText>
          Active : <b>{product.active ? "YES" : "NO"} </b>
        </ListItemText>
      </ListItem>
    </List>
  );
}
