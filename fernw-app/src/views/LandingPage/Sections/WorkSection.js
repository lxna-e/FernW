import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
// import GridContainer from "components/Grid/GridContainer.js";
// import GridItem from "components/Grid/GridItem.js";
// import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      {/* <GridContainer justify="center"> */}
      {/* <GridItem cs={12} sm={12} md={8}> */}
      {/* <h2 className={classes.title}>
            Hast du Lust unserem Team beizutreten?
          </h2>
          <h4 className={classes.description}>
            Wenn du gerne ein Praktikum bei uns machen möchtest oder als festes
            Teammitglied bei uns anfangen möchtest im Bereich Kundenberatung,
            Entwicklung oder Datenbank, kontaktiere uns gerne. Du solltest
            Begeisterung für das Reisen mitbringen und teamfähig sein.
          </h4> */}
      {/* <form>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Dein Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Deine Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                />
              </GridItem>
              <CustomInput
                labelText="Deine Nachricht"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="primary">Nachricht senden</Button>
              </GridItem> */}
      {/* </GridContainer>
          </form>
        </GridItem> */}
      {/* </GridContainer> */}
    </div>
  );
}
