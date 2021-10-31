import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// shopping cart imports
// import { useDispatch } from "react-redux";
// import { removeProduct } from "features/cart/cartSlice";

// core components
import Button from "components/CustomButtons/Button.js"
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";

import styles from "assets/jss/material-kit-react/views/warenkorbPage.js"
import moment from "moment";

const useStyles = makeStyles(styles);

export default function Product(props) {
  const classes = useStyles();
  // const dispatch = useDispatch();
  const { productData, removeProduct } = props;
  const dateFormat = "DD.MM.YYYY"
  const zeitraum = moment(productData.endDatum).diff(productData.startDatum, "days")

  return (
    <GridContainer alignItems={"center"}>
      <GridItem xs={2} sm={2} md={2}>
        <img
          src={productData.img}
          className={classes.imgRounded + " " + classes.imgFluid}
        />
      </GridItem>
      <GridItem xs={6} sm={6} md={6}>
        <div>
          <h5>{productData.name}, {productData.loc}</h5>
          {zeitraum + (zeitraum == 1 ? " Nacht" : " Nächte") + ","} von {productData.startDatum.format(dateFormat)} bis {productData.endDatum.format(dateFormat)}, {productData.info}
          <br />
          Preis: {productData.preis} €
        </div>
      </GridItem>
      <GridItem xs={4} sm={4} md={4}>
        <Button
          color="danger"
          onClick={() => removeProduct(productData)}
        >
          <i className={"fa fa-trash"} aria-hidden="true"></i>
        </Button>
      </GridItem>
    </GridContainer>)
}

Product.propTypes = {
  productData: PropTypes.object,
  removeProduct: PropTypes.func,
}