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
  // const { ...rest } = props;
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
      {/* <Parallax filter image={require("assets/img/landing-bg.jpg").default}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Your Story Starts With Us.</h1>
              <h4>
                Every landing page needs a small description after the big bold
                title, that{"'"}s why we added this text here. Add here all the
                information that can make you or your product create the first
                impression.
              </h4>
              <br />
              <Button
                color="danger"
                size="lg"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ref=creativetim"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-play" />
                Watch video
              </Button>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax> */}
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Text />
        </div>
      </div>
      <Footer />
    </div>
  );
}

