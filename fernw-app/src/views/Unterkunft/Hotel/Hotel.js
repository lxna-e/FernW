import React from "react";
// react Datetime picker
import Datetime from "react-datetime"
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons

// core components
// import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";
// import Parallax from "components/Parallax/Parallax.js";
// import HeaderLinks from "components/Header/HeaderLinks.js";

import styles from "assets/jss/material-kit-react/views/hotelPage.js";

// Sections for this page

// @material-ui/core components


// @material-ui/icons
// import Chat from "@material-ui/icons/Chat";
// import VerifiedUser from "@material-ui/icons/VerifiedUser";
// import Fingerprint from "@material-ui/icons/Fingerprint";
// // core components
// import InfoArea from "components/InfoArea/InfoArea.js";


import hotel from "assets/img/Hotelbild.png";
import montenegro from "assets/img/montenegro1.PNG"
import CustomHeader from "components/CustomHeader/CustomHeader.js";
import {  List, ListItem } from "@material-ui/core";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput";
import { Search } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  // const { ...rest } = props;
  return (
    <div>
      <CustomHeader {...props} />
      <img src={hotel} className="slick-image" width="100%" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} color="gray">
                  Hotels
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
                        <br />
                        <Datetime timeFormat={false}
                          inputProps={{ placeholder: "Auswahl Startdatum", showTimeSelect: false }}
                        />
                      </GridItem>
                      <GridItem className={classes.listItem}>
                        <InputLabel className={classes.label}>
                          Enddatum
                        </InputLabel>
                        <br />
                        <Datetime timeFormat={false}
                          inputProps={{ placeholder: "Auswahl Enddatum" }}
                        />
                      </GridItem>
                      <GridItem className={classes.listItem}>
                        <CustomInput
                          white
                          inputProps={{
                            placeholder: "Suche nach Land..."
                          }}
                        />
                        <Button justIcon round color="white">
                          <Search className={classes.searchIcon} />
                        </Button>

                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <h3>Unsere Bestseller</h3>
                    <List>
                      <ListItem>
                        {/* <ListItemAvatar>
                          <Avatar alt="Remy Sharp" src={montenegro}  />
                        </ListItemAvatar> */}
                        <img
                          src={montenegro}
                          className={classes.imgRounded + " " + classes.imgFluid}
                          height="20px"
                        />
                        <p>
                          Hier stehen ein paar Infos über das Hotel
                        </p>
                        {/* <Button color="success">
                          Hotel zur Reise hinzufügen
                        </Button> */}
                      </ListItem>
                    </List>
                  </CardBody>
                </Card>
                {/* <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title}>
                  Willkomen auf dem Weg zu ihrer persönlichen Reise
                </h2>
                <h5 className={classes.description}>
                  FernW bietet ihnen die Möglichkiet ihre Reise individuell nach
                  unserem Bausteinkasten-Prinzip zusammenzustellen.Wollen sie eine
                  komplette Reise buchen oder nur einen Flug, Hotel oder Unterkunft.
                  Kein Problem. FernW bietet Ihnen ein großes Spektrum an
                  Reisemitteln. Haben Sie fragen? Kontaktieren Sie uns gerne. Wir
                  freuen uns auf Sie.
                </h5>
              </GridItem>
            </GridContainer>
            <div>
              <GridContainer>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Einfach Kontaktierung"
                    description="Unsere Kundenberater stehen Ihnen jederzeit kompetent zur Seite. Egal ob sie eine individuell auf ihre Wünsche zugeschnittene Reise-Empfehlungen wollen oder Probleme im Umgang mit der Website und dem Buchungssystem haben, unsere Berater helfen Ihnen gerne weiter."
                    icon={Chat}
                    iconColor="danger"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="Verifzierte Reisepartner"
                    description="Unsere Reisepartner, egal ob Transfermittel, Unterkunft oder Aktivitäten werden jährlich mehrmals von uns überprüft. Unser Angebot an Reisepartnern erweitert sich dauerhaft. Sollte ein Reisepartner nicht mehr unseren Standards entsprechen wird er aus dem Sortiment ausselektiert."
                    icon={VerifiedUser}
                    iconColor="danger"
                    vertical
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={4}>
                  <InfoArea
                    title="So persönlich wie Ihr Fingerabdruck"
                    description="Bei uns wird ihre Reise so persönlich wie Sie selbst. Sie können Ihre Reise entsprechend Ihrer Wünsche passgenau auf sich zuschneiden. Dabei steht für uns Ihre Zufriedenheit an erster Stelle."
                    icon={Fingerprint}
                    iconColor="danger"
                    vertical
                  />
                </GridItem>
              </GridContainer>
            </div> */}
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

