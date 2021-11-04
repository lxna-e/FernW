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

let login = "LOGIN"

export function loginName(props) {
  alert(props);
  if (props != null) {
    login = props;
    <Link to={"/landingpage"} className={classes.dropdownLink}></Link>
  }
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
      {/* <ListItem className={classes.listItem}>
        // <Tooltip title="Delete">
        //   <IconButton aria-label="Delete">
        //     <DeleteIcon />
        //   </IconButton>
        // </Tooltip>
        <Tooltip
          id="instagram-twitter"
          title="Follow us on twitter"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            href="https://twitter.com"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-twitter"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-facebook"
          title="Follow us on facebook"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.facebook.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-facebook"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      {/* <ListItem className={classes.listItem}>
        <Tooltip
          id="instagram-tooltip"
          title="Follow us on instagram"
          placement={window.innerWidth > 959 ? "top" : "left"}
          classes={{ tooltip: classes.tooltip }}
        >
          <Button
            color="transparent"
            href="https://www.instagram.com"
            target="_blank"
            className={classes.navLink}
          >
            <i className={classes.socialIcons + " fab fa-instagram"} />
          </Button>
        </Tooltip>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Link to="/warenkorb" className={classes.navLink}>
          <i className={classes.socialIcons + " fa fa-shopping-cart"} aria-hidden="true"></i>
          {prodAnzahl !==0 && prodAnzahl}
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/login" className={classes.navLink}>
          <AccountCircle className={classes.icons} /> {login}
        </Link>
      </ListItem>
    </List>
  );
}
