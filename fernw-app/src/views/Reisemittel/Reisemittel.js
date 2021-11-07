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

import flug from "assets/img/Flugzeug.png";
import bahn from "assets/img/Bahnfahrt.jpeg";
import bus from "assets/img/Busfahrt.jpeg";
import biene from "assets/img/biene.jpg"
import bahn2 from "assets/img/Bahn2.jpg"
import busfahrt from "assets/img/busfahrt.jpg"
import { List, ListItem } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import { Search } from "@material-ui/icons";
import CardFooter from "components/Card/CardFooter";


import styles from "assets/jss/material-kit-react/views/unterkunftPage.js"
import classNames from "classnames";
import Flugelement from "components/Flugelement";

const useStyles = makeStyles(styles);

const alleReisemittel = [
  {
    id: 1,
    img: biene,
    preis: 80
  },
  {
    id: 2,
    img: bahn2,
    preis: 80
  },
  {
    id: 3,
    img: busfahrt,
    preis: 80
  },
];


export default function Unterkunft(props) {
  const classes = useStyles();
  const [reisemittelListe, setReisemittelListe] = useState([])
  const [startDate, setStartDate] = useState("");
  const [startOrt, setStartOrt] = useState();
  const [zielOrt, setZielOrt] = useState();
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
                <Link to={"/reisemittel/flug"}>
                  <Button size="lg" color="danger" className={classes.navLink}>
                    <div><img src={flug} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Hotels
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/reisemittel/bahn"}>
                  <Button size="lg" color="info" className={classes.navLink}>
                    <div><img src={bahn} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Bahnen
                  </Button>
                </Link>
              </GridItem>
              <GridItem xs={3} sm={3} md={3}>
                <Link to={"/reisemittel/bus"}>
                  <Button size="lg" color="rose" className={classes.navLink}>
                    <div><img src={bus} className={classes.linkImage + " slick-image"} width="100%" /></div>
                    Busse
                  </Button>
                </Link>
              </GridItem>
            </GridContainer>
          </div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} color="gray">
                  Reisemittel
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
                            onChange: (event) => {setStartOrt(event.target.value)}
                          }}
                        />
                        </GridItem>
                        <GridItem className={classes.listItem}>
                         <CustomInput
                          white
                          inputProps={{
                            placeholder: "Zielort",
                            onChange: (event) => {setZielOrt(event.target.value)}
                          }}
                        />
                        <Button justIcon round color="white" disabled={!(startDate)}
                          onClick={() => { if (startDate) { setReisemittelListe(alleReisemittel) } }}>
                          <Search className={classes.searchIcon} />
                        </Button>

                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <h3>Unsere Bestseller</h3>
                    <List>
                      {reisemittelListe.map(reisemittel => (
                        <ListItem key={reisemittel.id}>
                          <Flugelement
                            flugData={reisemittel}
                            startDatum={startDate}
                            startFlughafen={startOrt}
                            zielFlughafen={zielOrt} />
                        </ListItem>)
                      )}
                    </List>
                  </CardBody>
                  <CardFooter className={classes.cardFooter} >
                    <Link to="/aktivitaeten">
                      <Button
                        simple
                        color="danger"
                        size="lg"
                        variant="contained"
                        endIcon={<NavigateNext />}>
                        Zur Aktivitätsauswahl
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
