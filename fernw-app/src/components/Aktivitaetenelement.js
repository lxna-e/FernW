import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library for generating unique ids
import {v4 as uuid } from "uuid"
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// shopping cart imports
import { useDispatch } from "react-redux";
import { addProduct } from "features/cart/cartSlice";

// core components
import Button from "components/CustomButtons/Button.js"
import GridContainer from "./Grid/GridContainer";
import GridItem from "./Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/hotelPage.js";
import moment from "moment";

const useStyles = makeStyles(styles);

export default function AktivitaetElement(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { aktivitaet, imgSrc, location, preis, startDatum } = props;
    const dateFormat = "DD.MM.YYYY"
    const timeFormat = "HH:mm"
    return (
        <GridContainer alignItems={"center"}>
            <GridItem  xs={4} sm={4} md={4}>
                <img
                    src={imgSrc}
                    className={classes.imgRounded + " " + classes.imgFluid}
                />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
                <div>
                    <h4>{aktivitaet}</h4>

                    <h5>{location}</h5>
                    am {moment(startDatum).format(dateFormat + "[ um ]" + timeFormat + "[ Uhr]")}
                </div>
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
                <Button 
                    color="danger" 
                    onClick={() => dispatch(addProduct({
                        titel: aktivitaet + " " + location,
                        beschreibung: "am " + startDatum.format(dateFormat + "[ um ]" + timeFormat + "[ Uhr]"),
                        img: imgSrc,
                        preis: preis,
                        id: uuid(),
                    }))}>
                    Gesamt ab {preis}€
                </Button>
            </GridItem>
        </GridContainer>
    );
}

AktivitaetElement.propTypes = {
    aktivitaet: PropTypes.string,
    imgSrc: PropTypes.object,
    location: PropTypes.string,
    preis: PropTypes.number,
    startDatum: PropTypes.any,
};
