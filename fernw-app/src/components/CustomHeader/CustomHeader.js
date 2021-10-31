import React from "react";

// import { makeStyles } from "@material-ui/core/styles";
// import { List, ListItem } from "@material-ui/core";
import { Link } from "react-router-dom";

import Header from "components/Header/Header.js";
import HeaderLinks from "components/Header/HeaderLinks.js";
import LeftHeaderLinks from "components/Header/LeftHeaderLinks.js";

import logo from "assets/img/LOGO2.png";

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
        }
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 250,
          color: "danger",
        }}
        {...props}
      />
    </div>
  );
}
