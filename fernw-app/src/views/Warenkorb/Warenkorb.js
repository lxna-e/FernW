import React, { useState } from "react";
import { useSelector } from "react-redux";
// nodejs library that concatenates classes
import classNames from "classnames";

// @material-ui/core components
import { List, ListItem, makeStyles } from "@material-ui/core";
import Check from "@material-ui/icons/Check";

// shopping cart imports
import { useDispatch } from "react-redux";
import { removeProduct } from "features/cart/cartSlice";


// core components
import CustomHeader from "components/CustomHeader/CustomHeader.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import Button from "components/CustomButtons/Button.js"
import SnackbarContent from "components/Snackbar/SnackbarContent";

import Product from "./Product";

import styles from "assets/jss/material-kit-react/views/warenkorbPage.js"
import { selectProducts } from "features/cart/cartSlice";

const useStyles = makeStyles(styles);

export default function Warenkorb(props) {
  const classes = useStyles();
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(undefined);

  return (
    <div>
      <CustomHeader {...props} />
      {/* <img src={hotel} className="slick-image" width="100%" /> */}
      
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>
                  Warenkorb
                </h2>
                <br />
                <Card>
                  <CardHeader
                    color="danger" className={classes.cardHeader}>

                    <h3>Ihre aktuelle Auswahl ({products.length})</h3>
                    <h4>Gesamtpreis: {products.map(product => product.preis).reduce((a, b) => a + b, 0)} €</h4>
                    <Button
                      disabled={products.length === 0}
                      onClick={() => setShowAlert(true)}
                    >Zur Kasse</Button>

                  </CardHeader>
                  <CardBody>
                    <List>
                      {products.map(product => (
                        <ListItem key={product.id}>
                          <Product productData={product} removeProduct={(prod) => dispatch(removeProduct(prod))} />
                        </ListItem>)
                      )}
                    </List>
                    {showAlert && <SnackbarContent className={classes.alert}
        message={
          <span>
            Sie werden in wenigen Sekunden zur Kasse geleitet.
          </span>
        }
        close
        color="success"
        icon={Check}
      />}
                    
                  </CardBody>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}