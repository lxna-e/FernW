/*eslint-disable*/
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

import {
  Menu,
  MenuItem,
  MenuButton,
  SubMenu
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';



// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";
import Search from "@material-ui/icons/Search";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(styles);

export default function LeftHeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText="Unterkunft"
          dropdownHeader="Unterkünfte:"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          dropdownList={[
             <Link to={"/unterkunft/hotel"} className={classes.listItem}>
              Hotel
            </Link>,
            <Link to={"/unterkunft/ferienwohnung"} className={classes.listItem} >
              Ferienwohnung
            </Link>,
            <Link to={"/unterkunft/appartement"} className={classes.listItem}>
              Appartement
            </Link>,
            <Link to={"/unterkunft/kreuzfahrtschiff"} className={classes.listItem}>
              Kreuzfahrtschiff
            </Link>,
            { divider: true },
            <Link to={"/unterkunft"} className={classes.listItem}>
              alle Unterkünfte
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/reisemittel"} className={classes.navLink}>
          Reisemittel
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to={"/aktivitaeten"} className={classes.navLink}>
          Aktivitäten
        </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Link to="/pauschalreisen" className={classes.navLink}>
          Pauschalreisen
        </Link>
      </ListItem>
    </List>
  );
}