import React, { Fragment } from "react";
// ui
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Swiperr from "../components/Swiper";
import Image from "../assets/cafe1.jpg";
import Cafe from "../assets/cafe5.jpg";
import Break from "../assets/Better_Breakfast.svg";
import Whats from "../assets/whatsapp-icon.png";
import Toolbar from "../components/Toolbar";
import Footer from "../components/Footer";
import party from '../assets/partido.png';
import "../styles/dashboard.css";
const useStyles = makeStyles((theme) => ({
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
    // backgroundColor: "#328c99",
    // position: "relative",
    // margin: "auto",
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
    transform: "scaleX(-1)"
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.scheduleContainer}>
        <Toolbar />
      </div>
      
      <Grid container spacing={0}>
        
        <Grid item xs={12} sm={12}>
          <Paper className={classes.stripeContainer}>
            <img className={classes.rotate} src={party} alt="morty" />
            &nbsp;
            Ven a celebrar el 25 aniversario de KA'LOC &nbsp;
            <img src={party} alt="morty" />
          </Paper>
        </Grid>
      </Grid>

      <Footer />
      <Paper>
        <a
          href='https://api.whatsapp.com/send?phone=5215546484522'
          id='fixedbutton'
        >
          <img
            alt='img'
            target='_blank'
            style={{ width: 43, margin: 15 }}
            src='https://images.vexels.com/media/users/3/153998/isolated/preview/3649440bec55058d9495a9e11013fedf-icono-de-trazo-coloreado-de-whatsapp-by-vexels.png'
          ></img>
        </a>
      </Paper>
    </Fragment>
  );
};

export default Dashboard;
