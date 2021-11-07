import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import Footer from "components/Footer/Footer.js";
import styles from "assets/jss/material-kit-react/views/landingPage.js";

// Sections for this page
import Text from "./Sections/Text.js";
import Carousel from "react-slick";
import bus from "assets/img/Bus.jpg";
import bahn from "assets/img/Bahn.jpg";
import hotel from "assets/img/Hotel.jpg";
import CustomHeader from "components/CustomHeader/CustomHeader.js";

const useStyles = makeStyles(styles);

export default function LandingPage(props) {
  const classes = useStyles();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div>
      <CustomHeader {...props} />
      <Carousel {...settings}>
        <div>
          <img src={bus} alt="First slide" className="slick-image" />
        </div>
        <div>
          <img src={hotel} alt="Second slide" className="slick-image" />
        </div>
        <div>
          <img src={bahn} alt="Third slide" className="slick-image" />
        </div>
      </Carousel>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Text />
        </div>
      </div>
      <Footer />
    </div>
  );
}


