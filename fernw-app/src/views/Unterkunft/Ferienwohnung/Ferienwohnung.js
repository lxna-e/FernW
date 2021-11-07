import React, { useState } from "react";
import { Link } from "react-router-dom";
// react Datetime picker
import Datetime from "react-datetime"
import "react-datetime/css/react-datetime.css";
// nodejs library that concatenates classes
import classNames from "classnames";
import moment from "moment";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import { NavigateNext } from "@material-ui/icons";

// core components
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/hotelPage.js";

// Sections for this page
import ferienwohnung from "assets/img/Ferienwohnung.jpeg";
import ferienwohnung1 from "assets/img/F1.jpg"
import ferienwohnung2 from "assets/img/F2.jpg"
import ferienwohnung3 from "assets/img/F3.jpg"
import CustomHeader from "components/CustomHeader/CustomHeader.js";
import { List, ListItem } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import { Search } from "@material-ui/icons";
import Hotelelement from "components/Hotelelement";
import CardFooter from "components/Card/CardFooter";

const useStyles = makeStyles(styles);

const alleHotels = [
  {
    id: 1,
    img: ferienwohnung1,
    name: "Robinson Fleesensee",
    info: "Vollpension, Hotel",
    loc: "Göhring-Lebbin",
    preis: 570
  },
  {
    id: 2,
    img: ferienwohnung2,
    name: "Falkensteiner Hotel, Montenegro",
    info: "Halbpension, Hotel",
    loc: "Becici",
    preis: 284
  },
  {
    id: 3,
    img: ferienwohnung3,
    name: "Hotel Klettur",
    info: "Frühstück, Hotel",
    loc: "Reykjavik",
    preis: 267
  },
];

export default function FerienW(props) {
  const classes = useStyles();
  const [hotelListe, setHotelListe] = useState([])
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const dateFormat = "DD.MM.YYYY"
  const yesterday = moment().subtract(1, "day");
  const validStart = (current) => { return current.isAfter(yesterday) }
  const validEnd = (current) => { return current.isAfter(yesterday) && (!startDate || current.isAfter(startDate)) }
  // const { ...rest } = props;


  return (
    <div>
      <CustomHeader {...props} />
      <img src={ferienwohnung} className="slick-image" width="100%" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} color="gray">
                  Ferienwohnungen
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
                        color="danger"
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

