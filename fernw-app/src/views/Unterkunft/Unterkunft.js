import React, { useState } from "react";
import { Link } from "react-router-dom"
import moment from "moment";

// react Datetime picker
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css";

import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { NavigateNext } from "@material-ui/icons";

import CustomHeader from "components/CustomHeader/CustomHeader";
import Footer from "components/Footer/Footer";
import GridContainer from "components/Grid/GridContainer";
import GridItem from "components/Grid/GridItem";
import Button from "components/CustomButtons/Button.js";

import hotel from "assets/img/Hotelbild.png";
import montenegro from "assets/img/montenegro1.PNG"
import deutschland1 from "assets/img/deutschland1.PNG"
import Island1 from "assets/img/Island1.PNG"
import { List, ListItem } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import { Search } from "@material-ui/icons";
import Hotelelement from "components/Hotelelement";
import CardFooter from "components/Card/CardFooter";


import styles from "assets/jss/material-kit-react/views/unterkunftPage.js"
import classNames from "classnames";

const useStyles = makeStyles(styles);

const alleHotels = [
  {
    id: 1,
    img: montenegro,
    name: "Robinson Fleesensee",
    info: "Vollpension, Hotel",
    loc: "Göhring-Lebbin",
    preis: 80
  },
  {
    id: 2,
    img: deutschland1,
    name: "Falkensteiner Hotel, Montenegro",
    info: "Halbpension, Hotel",
    loc: "Becici",
    preis: 127
  },
  {
    id: 3,
    img: Island1,
    name: "Hotel Klettur",
    info: "Frühstück, Hotel",
    loc: "Reykjavik",
    preis: 94
  },
];


export default function Unterkunft(props) {
  const classes = useStyles();
  const [hotelListe, setHotelListe] = useState([])
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dateFormat = "DD.MM.YYYY"
  const yesterday = moment().subtract(1, "day");
  const validStart = (current) => { return current.isAfter(yesterday) }
  const validEnd = (current) => { return current.isAfter(yesterday) && (!startDate || current.isAfter(startDate)) }

  return (
    <div>
      <CustomHeader {...props} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/unterkunft/hotel"}>
                  <Button size="lg" color="primary" className={classes.navLink}>
                    <div><img src={hotel} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Hotels
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/unterkunft/ferienwohnung"}>
                  <Button size="lg" color="info" className={classes.navLink}>
                    <div><img src={hotel} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Ferienwohnungen
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/unterkunft/appartement"}>
                  <Button size="lg" color="rose" className={classes.navLink}>
                    <div><img src={hotel} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Appartements
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/unterkunft/kreuzfahrtschiff"}>
                  <Button size="lg" color="success" className={classes.navLink}>
                    <div><img src={hotel} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Kreuzfahrtschiffe
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} color="gray">
                  Unterkünfte
                </h2>
                <br />
                <Card>
                  <CardHeader
                    color="danger" className={classes.cardHeader}>
                    <GridContainer className={classes.list} justify="space-evenly" align="center">
                      <GridItem className={classes.listItem}>
                        <InputLabel className={classes.label}>
                          Startdatum
                        </InputLabel>
                        <Datetime className={classes.description}
                          closeOnSelect={true}
                          timeFormat={false}
                          onChange={(selected) => { setStartDate(selected) }}
                          dateFormat={dateFormat}
                          isValidDate={validStart}
                          inputProps={{ placeholder: "Auswahl Startdatum" }}
                        />
                      </GridItem>
                      <GridItem className={classes.listItem}>
                        <InputLabel className={classes.label}>
                          Enddatum
                        </InputLabel>
                        <Datetime className={classes.description}
                          closeOnSelect={true}
                          timeFormat={false}
                          onChange={(selected) => { setEndDate(selected) }}
                          dateFormat={dateFormat}
                          isValidDate={validEnd}
                          inputProps={{ placeholder: "Auswahl Enddatum" }}
                        />
                      </GridItem>
                      <GridItem className={classes.listItem}>
                        <CustomInput
                          white
                          inputProps={{
                            placeholder: "Filter nach Land..."
                          }}
                        />
                        <Button justIcon round color="white" disabled={!(startDate && endDate)}
                          onClick={() => { if (startDate && endDate) { setHotelListe(alleHotels) } }}>
                          <Search className={classes.searchIcon} />
                        </Button>

                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <h3>Unsere Bestseller</h3>
                    <List>
                      {hotelListe.map(hotel => (
                        <ListItem key={hotel.id}>
                          <Hotelelement
                            hotelData={hotel}
                            startDatum={startDate}
                            endDatum={endDate} />
                        </ListItem>)
                      )}
                    </List>
                  </CardBody>
                  <CardFooter className={classes.cardFooter} >
                    <Link to="/reisemittel">
                      <Button
                        simple
                        color="primary"
                        size="lg"
                        variant="contained"
                        endIcon={<NavigateNext />}>
                        Zur Reisemittelauswahl
                      </Button>
                    </Link>
                  </CardFooter>
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
