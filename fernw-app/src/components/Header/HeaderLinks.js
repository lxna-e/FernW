/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import Search from "@material-ui/icons/Search";

// shopping cart imports
import { useSelector } from "react-redux";
import { selectProducts } from "features/cart/cartSlice";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import AccountCircle from "@material-ui/icons/AccountCircle";
import LandingPage from "views/Datenschutz/Datenschutz";

const useStyles = makeStyles(styles);

let login_name = "Login"
let login_hidden = true

if (document.cookie) {
  login_name = document.cookie;
  if (login_name != "Login") {
    login_hidden = false;
  }
}

export function loginName(props) {
  if (props != null) {
    document.cookie = props;
    login_name = props;
    login_hidden = false;
    window.location.replace("/");
  }
}

function logout() {
  document.cookie = document.cookie + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;"
  window.location.replace("/");
}

export default function HeaderLinks(props) {
  const classes = useStyles();
  const prodAnzahl = useSelector(selectProducts).length;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomInput
          white
          inputRootCustomClasses={classes.inputRootCustomClasses}
          formControlProps={{
            className: classes.formControl,
          }}
          inputProps={{
            placeholder: "Search",
            inputProps: {
              "aria-label": "Search",
              className: classes.searchInput,
            },
          }}
        />
        <Button justIcon round color="white">
          <Search className={classes.searchIcon} />
        </Button>
      </ListItem >
      <ListItem className={classes.listItem}>
        <Link to="/warenkorb" className={classes.navLink}>
          <i className={classes.socialIcons + " fa fa-shopping-cart"} aria-hidden="true"></i>
          {prodAnzahl !==0 && prodAnzahl}
        </Link>
      </ListItem>
      {(login_hidden) ? (<ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
        <AccountCircle className={classes.icon} /> { login_name }
        </Link>
      </ListItem>) : 
      (<ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText={login_name}
          buttonIcon={AccountCircle}
          dropdownHeader="Profiloptionen:"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          onClick={(params) => {if (params.props.id === "logout") logout()}}
          // noLiPadding
          dropdownList={[
            <Link id="profil" to={"/login"} className={classes.dropdownLink}>
              Profil
            </Link>,
            <Link id="settings" to={"/login"} className={classes.dropdownLink}>
              Benutzerdaten verwalten
            </Link>,
            { divider: true },
            <Link id="logout" to={"/"} className={classes.dropdownLink}>
              Logout
            </Link>
          ]}
        />
        </ListItem>)
        }
    </List>
  );
}
