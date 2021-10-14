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
        <CustomDropdown
          buttonText="Unterkunft"
          dropdownHeader="Unterkünfte:"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          // noLiPadding
          dropdownList={[
            <Link to={"/unterkunft/hotel"} className={classes.dropdownLink}>
              Hotel
            </Link>,
            <Link to={"/unterkunft/ferienwohnung"} className={classes.dropdownLink} >
              Ferienwohnung
            </Link>,
            <Link to={"/unterkunft/appartement"} className={classes.dropdownLink}>
              Appartement
            </Link>,
            <Link to={"/unterkunft/kreuzfahrtschiff"} className={classes.dropdownLink}>
              Kreuzfahrtschiff
            </Link>,
            { divider: true },
            <Link to={"/unterkunft"} className={classes.dropdownLink}>
              alle Unterkünfte
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText="Reisemittel"
          dropdownHeader="Reisemittel:"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          // noLiPadding
          dropdownList={[
            <Link to={"/reisemittel/flug"} className={classes.dropdownLink}>
              FLug
            </Link>,
            <Link to={"/reisemittel/bahn"} className={classes.dropdownLink} >
              Bahn
            </Link>,
            <Link to={"/reisemittel/bus"} className={classes.dropdownLink}>
              Bus
            </Link>,
            { divider: true },
            <Link to={"/reisemittel"} className={classes.dropdownLink}>
              alle Reisemittel
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          buttonText="Aktivitäten"
          dropdownHeader="Aktivitäten:"
          buttonProps={{
            className: classes.navLink,
            color: "transparent",
          }}
          // noLiPadding
          dropdownList={[
            <Link to={"/aktivitaeten/stadttour"} className={classes.dropdownLink}>
              Stadttour
            </Link>,
            <Link to={"/aktivitaeten/wanderung"} className={classes.dropdownLink} >
              Wanderung
            </Link>,
            { divider: true },
            <Link to={"/aktivitaeten"} className={classes.dropdownLink}>
              alle Aktivitäten
            </Link>,
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
      <CustomDropdown
      buttonText="Pauschalreisen"
      dropdownHeader="Pauschalreisen:"
      buttonProps={{
      className: classes.navLink,
      color: "transparent",
    }}
      // noLiPadding
      dropdownList={[
      <Link to={"/pauschalreisen/bus"} className={classes.dropdownLink}>
      Bus-Pauschalreisen
      </Link>,
      <Link to={"/pauschalreisen/winter"} className={classes.dropdownLink} >
      Winterurlaube
      </Link>,
      <Link to={"/pauschalreisen/strand"} className={classes.dropdownLink}>
      Strandurlaub
      </Link>,

    { divider: true },
      <Link to={"/pauschalreisen"} className={classes.dropdownLink}>
      alle Pauschalreisen
      </Link>,
    ]}
      />

    </List>
  );
}