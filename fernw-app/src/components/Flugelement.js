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
// import GridItem from "./Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/hotelPage.js";
import GridItem from "./Grid/GridItem";
// import moment from "moment";

const useStyles = makeStyles(styles);

export default function Flugelement(props) {
    const classes = useStyles();
    const dispatch = useDispatch();
    const { flugData, startDatum } = props;
    // const dateFormat = "DD.MM.YYYY HH:MM"
    // const anzahlNacht = moment(endDatum).diff(startDatum, "days")
    return (
        <GridContainer alignItems={"center"}>
            <GridItem  xs={4} sm={4} md={4}>
                <img
                    src={flugData.img}
                    className={classes.imgRounded + " " + classes.imgFluid}

                    // width="30%"

                />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
                <div>
                    <h4>{flugData.name}</h4>

                    <h5>{flugData.loc}</h5>
                    <br />

                 {/* {(startDatum && endDatum) ? anzahlNacht + ( anzahlNacht == 1 ? " Nacht" : " Nächte") + "," : ""} {startDatum ? moment(startDatum).format("[ab ]" + dateFormat + "[, ]") : ""}{hotelData.info} */}
                </div>
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
                <Button 
                    color="danger" 
                    onClick={() => dispatch(addProduct({
                        ...flugData,
                        startDatum: startDatum.clone(),
                        // endDatum: endDatum.clone(),
                        preis: flugData.preis,
                        id: uuid(),
                    }))}>
                    Gesamt ab {flugData.preis}€
                </Button>
            </GridItem>
        </GridContainer>
    );
}

Flugelement.propTypes = {
    flugData: PropTypes.object,
    imgSrc: PropTypes.any,
    flugName: PropTypes.string,
    flugInformation: PropTypes.string,
    location: PropTypes.string,
    preis: PropTypes.number,
    startDatum: PropTypes.any,
    // endDatum: PropTypes.any
};
