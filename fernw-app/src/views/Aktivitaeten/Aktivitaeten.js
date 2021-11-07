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

import wanderungen from "assets/img/Wanderungen.jpeg";
import wanderung from "assets/img/Wanderung.jpg"
import Stadt from "assets/img/Stadttour2.jpeg";
import stadttour from "assets/img/Stadttour.jpg"
import { List, ListItem } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import { Search } from "@material-ui/icons";
import CardFooter from "components/Card/CardFooter";


import styles from "assets/jss/material-kit-react/views/unterkunftPage.js"
import classNames from "classnames";
import AktivitaetElement from "components/Aktivitaetenelement";

const useStyles = makeStyles(styles);

const alleAktivitaeten = [
  {
    id: 1,
    img: stadttour,
    name: "Stadttour durch",
    preis: 80
  },
  {
    id: 2,
    img: wanderung,
    name: "Wanderung nach",
    preis: 80
  },
];


export default function Unterkunft(props) {
  const classes = useStyles();
  const [aktivitaetListe, setReisemittelListe] = useState([])
  const [startDate, setStartDate] = useState("");
  const [startOrt, setStartOrt] = useState();
  const dateFormat = "DD.MM.YYYY";
  const timeForamt = "H:mm";
  const yesterday = moment().subtract(1, "day");
  const validStart = (current) => { return current.isAfter(yesterday) }

  return (
    <div>
      <CustomHeader {...props} />

      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/aktivitaeten/stadttour"}>
                  <Button size="lg" color="danger" className={classes.navLink}>
                    <div><img src={Stadt} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Stadttouren
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/aktivitaeten/wanderung"}>
                  <Button size="lg" color="info" className={classes.navLink}>
                    <div><img src={wanderungen} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Wanderungen
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} color="gray">
                  Aktivitäten
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
                            placeholder: "Startort",
                            onChange: (event) => { setStartOrt(event.target.value) }
                          }}
                        />
                        <Button justIcon round color="white" disabled={!(startDate)}
                          onClick={() => { if (startDate) { setReisemittelListe(alleAktivitaeten) } }}>
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
                            imgSrc={aktivitaet.img}
                            startDatum={startDate}
                            location={startOrt}
                            preis={aktivitaet.preis} />
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
