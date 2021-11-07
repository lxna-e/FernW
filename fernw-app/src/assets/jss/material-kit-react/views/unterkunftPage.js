import { container, defaultFont, title } from "assets/jss/material-kit-react.js";
import imagesStyles from "assets/jss/material-kit-react/imagesStyles.js";

const landingPageStyle = (theme) => ({
  container: {
    zIndex: "12",
    color: "#FFFFFF",
    ...container,
  },
  title: {
    ...title,
    display: "inline-block",
    position: "relative",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px auto 0",
  },
  description: {
    color: "black",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
  },
  mainRaised: {
    margin: "120px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
  },
  section: {
    padding: "70px 0",
    textAlign: "center",
  },
  // title: {
  //   ...title,
  //   marginBottom: "1rem",
  //   marginTop: "30px",
  //   minHeight: "32px",
  //   textDecoration: "none",
  // },
  list: {
    ...defaultFont,
    fontSize: "14px",
    margin: 0,
    paddingLeft: "0",
    listStyle: "none",
    paddingTop: "0",
    paddingBottom: "0",
    color: "inherit",
  },
  listItem: {
      float: "left",
      color: "inherit",
      position: "relative",
      display: "block",
      width: "auto",
      margin: "0",
      padding: "0",
      [theme.breakpoints.down("sm")]: {
          width: "100%",
          "&:after": {
              width: "calc(100% - 30px)",
              content: '""',
              display: "block",
              height: "1px",
              marginLeft: "15px",
              backgroundColor: "#e5e5e5",
          },
      },
  },
  cardHeader: {
      width: "auto",
      textAlign: "center",
      marginLeft: "20px",
      marginRight: "20px",
      marginTop: "-40px",
      padding: "20px 0",
      marginBottom: "15px",
  },
  cardFooter: {
      // paddingTop: "0rem",
      justifyContent: "right !important",
  },
  label: {
      color: "rgba(255, 255, 255, 0.74)",
      cursor: "pointer",
      display: "inline-flex",
      fontSize: "14px",
      transition: "0.3s ease all",
      lineHeight: "1.428571429",
      fontWeight: "400",
      paddingLeft: "0",
      letterSpacing: "normal",
  },
  navLink: {
    width: "100%",
    display: "block",
    paddingLeft: "0",
    paddingRight: "0",
  },
  linkImage: {
    marginBottom: "10px",
  },
  ...imagesStyles,
  imgRounded: {
      ...imagesStyles.imgRounded,
      
      marginRight: "20px",
  },
});

export default landingPageStyle;
