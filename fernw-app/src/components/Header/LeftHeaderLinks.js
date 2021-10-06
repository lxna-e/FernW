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
              <Link to="/unterkunft" className={classes.navLink}>
                Unterkunft
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/reisemittel" className={classes.navLink}>
                Reisemittel
              </Link>
            </ListItem>
            <ListItem className={classes.listItem}>
              <Link to="/aktivitaeten" className={classes.navLink}>
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