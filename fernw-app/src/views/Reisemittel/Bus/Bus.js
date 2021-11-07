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
import bus from "assets/img/Busfahrt.jpeg";
import busfahrt from "assets/img/busfahrt.jpg"
import CustomHeader from "components/CustomHeader/CustomHeader.js";
import { List, ListItem } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import { Search } from "@material-ui/icons";
import Flugelement from "components/Flugelement";
import CardFooter from "components/Card/CardFooter";

const useStyles = makeStyles(styles);

const alleFlüge = [
  {
    id: 1,
    img: busfahrt,
    preis: 80
  },
];

export default function Flug(props) {
  const classes = useStyles();
  const [busListe, setBusListe] = useState([])
  const [startDate, setStartDate] = useState("");
  const [startBahnhof, setStartBahnhof] = useState();
  const [zielBahnhof, setZielBahnhof] = useState();
  const dateFormat = "DD.MM.YYYY"
  const timeForamt = "H:mm";
  const yesterday = moment().subtract(1, "day");
  const validStart = (current) => { return current.isAfter(yesterday) }

  return (
    <div>
      <CustomHeader {...props} />
      <img src={bus} className="slick-image" width="100%" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>
                  Busfahrten
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
                              placeholder: "Filter nach Startbahnhof",
                              onChange: (event) => setStartBahnhof(event.target.value),
                            }}
                          />
                          </GridItem>
                        <GridItem className={classes.listItem}>
                          <CustomInput
                            white
                            inputProps={{
                              placeholder: "Filter nach Zielbahnhof",
                              onChange: (event) => setZielBahnhof(event.target.value)
                            }}
                          />
                        <Button justIcon round color="white" disabled={!(startDate)}
                          onClick={() => { if (startDate) { setBusListe(alleFlüge) } }}>
                          <Search className={classes.searchIcon} />
                        </Button>

                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <h3>Unsere Bestseller</h3>
                    <List>
                      {busListe.map(bus => (
                        <ListItem key={bus.id}>
                          <Flugelement
                            flugData={bus}
                            startDatum={startDate}
                            startFlughafen={startBahnhof}
                            zielFlughafen={zielBahnhof}
                          />
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
                        Zur Aktivitätenauswahl
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

