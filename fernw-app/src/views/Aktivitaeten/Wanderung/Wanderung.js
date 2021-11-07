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
import wanderungen from "assets/img/Wanderungen.jpeg";
import wanderung from "assets/img/Wanderung.jpg"
import CustomHeader from "components/CustomHeader/CustomHeader.js";
import { List, ListItem } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import { Search } from "@material-ui/icons";
import CardFooter from "components/Card/CardFooter";
import AktivitaetElement from "components/Aktivitaetenelement";

const useStyles = makeStyles(styles);

const alleAktivitaeten = [
  {
    id: 1,
    img: wanderung,
    name: "Wanderung nach",
    loc: "Montenegro",
    preis: 80
  },
];

export default function Flug(props) {
  const classes = useStyles();
  const [aktivitaetListe, setAktivitaetListe] = useState([])
  const [startDate, setStartDate] = useState("");
  const [location, setLocation] = useState("");
  const dateFormat = "DD.MM.YYYY";
  const timeForamt = "H:mm";
  const yesterday = moment().subtract(1, "day");
  const validStart = (current) => { return current.isAfter(yesterday) }


  return (
    <div>
      <CustomHeader {...props} />
      <img src={wanderungen} className="slick-image" width="100%" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} color="gray">
                  Wanderungen
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
                          timeFormat={timeForamt}
                          onChange={(selected) => { setStartDate(selected) }}
                          dateFormat={dateFormat}
                          isValidDate={validStart}
                          inputProps={{ placeholder: "Auswahl Startdatum" }}
                        />
                       </GridItem>
                      <GridItem className={classes.listItem}>
                        <CustomInput
                          white
                          inputProps={{
                            placeholder: "Filter nach Startort",
                            onChange: (event) => setLocation(event.target.value),
                          }}
                        />
                        <Button justIcon round color="white" disabled={!(startDate)}
                          onClick={() => { if (startDate) { setAktivitaetListe(alleAktivitaeten) } }}>
                          <Search className={classes.searchIcon} />
                        </Button>

                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <h3>Unsere Bestseller</h3>
                    <List>
                      {aktivitaetListe.map(aktivitaet => (
                        <ListItem key={aktivitaet.id}>
                          <AktivitaetElement
                            aktivitaet={aktivitaet.name}
                            startDatum={startDate}
                            imgSrc={aktivitaet.img}
                            location={location}
                            preis={aktivitaet.preis}
                           />
                        </ListItem>)
                      )}
                    </List>
                  </CardBody>
                  <CardFooter className={classes.cardFooter} >
                    <Link to="/warenkorb">
                      <Button
                        simple
                        color="danger"
                        size="lg"
                        variant="contained"
                        endIcon={<NavigateNext />}>
                        Zum Warenkorb
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
