import React, { Fragment } from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import Swiperr from "../utils/Swiper";
import ReactPlayer from "react-player";
import Image from "../../assets/cafe1.jpg";
import Cafe from "../../assets/cafe5.jpg";
import Break from "../../assets/Better_Breakfast.svg";
import Whats from "../../assets/whatsapp-icon.png";
import Toolbar from "../layout/Toolbar";
import Footer from "../layout/Footer";
import party from "../../assets/partido.png";
import video from "../../assets/video.mp4";

import "../../styles/dashboard.css";
import "../../styles/font.css"

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    textAlign: 'center',
    color: 'white'
  },
  centered: {
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: "translate(-50%, -50%)",
    fontFamily: "Oswald"
  },
  scheduleContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 410,
  },
  saucerContainer: {
    background: `url(${Cafe})`,
    backgroundSize: "cover",
    height: 410,
  },
  breakfastContainer: {
    background: `url(${Break})`,
    backgroundSize: "cover",
    backgroundColor: "#328c99",
    position: "relative",
    margin: "auto",
    width: 270,
    height: 345,
    marginTop: 20,
    boxShadow: "none",
  },
  whatsContainer: {
    background: `url(${Whats})`,
    backgroundSize: "cover",
    width: 270,
    height: 345,
  },
  stripeContainer: {
    background: "#42296f",
    backgroundSize: "cover",
    color: "lightsteelblue",
    borderBottomColor: "2px solid red",
    height: 50,
    fontFamily: "Bebas Neue",
    fontSize: "5vw",
    textAlign: "center",
  },
  rotate: {
    transform: "scaleX(-1)",
  },
}));
const Dashboard = () => {
  const classes = useStyles();

  return (
    <Fragment>
      <div className={classes.container}>
        <h3 className={classes.centered}>PORTAFOLIO</h3>
        <ReactPlayer
          muted={false}
          playing={false}
          controls={true}
          width="100%"
          height="30%"
          url={video}
        />
      </div>
      {/* <div className={classes.scheduleContainer}>
        <Toolbar />
      </div> */}
      {/* <Swiperr /> */}
      <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.stripeContainer}>
            <img className={classes.rotate} src={party} alt="party" />
            &nbsp; Ven a celebrar el 25 aniversario de KA'LOC &nbsp;
            <img src={party} alt="party" />
          </Paper>
        </Grid>
      </Grid>
      <Footer />
      <Paper>
        <a
          href="https://api.whatsapp.com/send?phone=5215546484522"
          id="fixedbutton"
        >
          <img
            alt="img"
            target="_blank"
            style={{ width: 43, margin: 15 }}
            src="https://images.vexels.com/media/users/3/153998/isolated/preview/3649440bec55058d9495a9e11013fedf-icono-de-trazo-coloreado-de-whatsapp-by-vexels.png"
          ></img>
        </a>
      </Paper>
    </Fragment>
  );
};

export default Dashboard;
