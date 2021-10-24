import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import Button from "components/CustomButtons/Button.js"
import GridContainer from "./Grid/GridContainer";
// import GridItem from "./Grid/GridItem";
import styles from "assets/jss/material-kit-react/views/hotelPage.js";
import GridItem from "./Grid/GridItem";
import moment from "moment";

const useStyles = makeStyles(styles);

export default function Hotelelement(props) {
    const classes = useStyles();
    console.log(props);
    const { hotelData, startDatum, endDatum } = props;
    const dateFormat = "DD.MM.YYYY"
    const anzahlNacht = moment(endDatum).diff(startDatum, "days")
    return (
        <GridContainer alignItems={"center"}>
            <GridItem  xs={4} sm={4} md={4}>
                <img
                    src={hotelData.img}
                    className={classes.imgRounded + " " + classes.imgFluid}

                    // width="30%"

                />
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
                <div>
                    <h4>{hotelData.name}</h4>

                    <h5>{hotelData.loc}</h5>
                    <br />

                    {(startDatum && endDatum) ? anzahlNacht + ( anzahlNacht == 1 ? " Nacht" : " Nächte") + "," : ""} {startDatum ? moment(startDatum).format("[ab ]" + dateFormat + "[, ]") : ""}{hotelData.info}
                </div>
            </GridItem>
            <GridItem  xs={4} sm={4} md={4}>
                <Button color="danger">
                    Gesamt ab {hotelData.preis * anzahlNacht}€
                </Button>
            </GridItem>
        </GridContainer>
    );
}

Hotelelement.propTypes = {
    hotelData: PropTypes.object,
    imgSrc: PropTypes.any,
    hotelName: PropTypes.string,
    hotelInformation: PropTypes.string,
    location: PropTypes.string,
    preis: PropTypes.number,
    startDatum: PropTypes.any,
    endDatum: PropTypes.any
};
