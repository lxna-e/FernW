import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
// import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import LeftHeaderLinks from "components/Header/LeftHeaderLinks.js";

import logo from "assets/img/LOGO.png";

export default function CustomHeader(props) {
  return (
    <div>
      <Header
        color="transparent"
        brand={
          <Link to="/">
            <img src={logo} alt="FernW" height="60" />
          </Link>
        }
        leftLinks={
          <LeftHeaderLinks />
          // <List className={classes.list}>
          //   <ListItem className={classes.listItem}>
          //     <Link to="/unterkunft" className={classes.navLink}>
          //       Unterkunft
          //     </Link>
          //   </ListItem>
          //   <ListItem className={classes.listItem}>
          //     <Link to="/reisemittel" className={classes.navLink}>
          //       Reisemittel
          //     </Link>
          //   </ListItem>
          //   <ListItem className={classes.listItem}>
          //     <Link to="/aktivitaeten" className={classes.navLink}>
          //       Aktivitäten
          //     </Link>
          //   </ListItem>
          //   <ListItem className={classes.listItem}>
          //     <Link to="/pauschalreisen" className={classes.navLink}>
          //       Pauschalreisen
          //     </Link>
          //   </ListItem>
          // </List>
        }
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 400,
          color: "danger",
        }}
        {...props}
      />
    </div>
  );
}
