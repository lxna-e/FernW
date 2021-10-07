import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import Chat from "@material-ui/icons/Chat";
import VerifiedUser from "@material-ui/icons/VerifiedUser";
import Fingerprint from "@material-ui/icons/Fingerprint";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/productStyle.js";

const useStyles = makeStyles(styles);

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
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
      </div>
    </div>
  );
}
