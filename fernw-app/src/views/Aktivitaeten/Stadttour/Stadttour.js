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
import Stadt from "assets/img/Stadttour.jpg";
import stadttour from "assets/img/Stadttour.jpg"
// import deutschland1 from "assets/img/deutschland1.PNG"
// import Island1 from "assets/img/Island1.PNG"
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
    img: stadttour,
    name: "Stadttour durch",
    // info: "Vollpension, Hotel",
    loc: "Montenegro",
    preis: 80
  },
  // {
  //   id: 2,
  //   img: deutschland1,
  //   name: "Falkensteiner Hotel, Montenegro",
  //   info: "Halbpension, Hotel",
  //   loc: "Becici",
  //   preis: 127
  // },
  // {
  //   id: 3,
  //   img: Island1,
  //   name: "Hotel Klettur",
  //   info: "Frühstück, Hotel",
  //   loc: "Reykjavik",
  //   preis: 94
  // },
];

export default function Flug(props) {
  const classes = useStyles();
  const [flugListe, setFlugListe] = useState([])
  const [startDate, setStartDate] = useState("");
  const dateFormat = "DD.MM.YYYY"
  const yesterday = moment().subtract(1, "day");
  const validStart = (current) => { return current.isAfter(yesterday) }
  // const validEnd = (current) => { return current.isAfter(yesterday) && (!startDate || current.isAfter(startDate)) }
  // const { ...rest } = props;


  return (
    <div>
      <CustomHeader {...props} />
      <img src={Stadt} className="slick-image" width="100%" />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.section}>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8}>
                <h2 className={classes.title} color="gray">
                  Stadttouren
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
                          timeFormat={true}
                          onChange={(selected) => { setStartDate(selected) }}
                          dateFormat={dateFormat}
                          isValidDate={validStart}
                          inputProps={{ placeholder: "Auswahl Startdatum" }}
                        />
                       </GridItem>
                      {/*<GridItem className={classes.listItem}>
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
                      </GridItem> */}
                      <GridItem className={classes.listItem}>
                       <div> 
                        <CustomInput
                          white
                          inputProps={{
                            placeholder: "Filter nach Startort"
                          }}
                        />
                        </div>
                        {/* <div>
                         <CustomInput
                          white
                          inputProps={{
                            placeholder: "Filter nach Zielflughafen"
                          }}
                        />
                        </div> */}
                        <Button justIcon round color="white" disabled={!(startDate)}
                          onClick={() => { if (startDate) { setFlugListe(alleFlüge) } }}>
                          <Search className={classes.searchIcon} />
                        </Button>

                      </GridItem>
                    </GridContainer>
                  </CardHeader>
                  <CardBody>
                    <h3>Unsere Bestseller</h3>
                    <List>
                      {flugListe.map(flug => (
                        <ListItem key={flug.id}>
                          <Flugelement
                            flugData={flug}
                            startDatum={startDate}
                           />
                        </ListItem>)
                      )}
                    </List>
                  </CardBody>
                  <CardFooter className={classes.cardFooter} >
                    <Link to="/warenkorb">
                      <Button
                        simple
                        color="primary"
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
