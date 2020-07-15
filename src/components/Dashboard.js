import React from "react";
// ui
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
// css
import "../styles/dashboard.css";
// img
import Swiper from "../components/Swiper";
import Image from "../assets/cafe1.jpg";
import Cafe from "../assets/cafe5.jpg";
import Break from "../assets/Better_Breakfast.svg";
import Footer from "../components/Footer";
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
  stripeContainer: {
    background: "#42296f",
    backgroundSize: "cover",
    color: "lightsteelblue",
    borderBottomColor: "2px solid red",
    height: 50,
    fontFamily: "Bebas Neue",
    fontSize: "6vw",
    textAlign: "center",
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div>
      <Grid container spacing={2}>
        <Swiper />
        <Grid item xs={12} sm={6}>
          <Paper className={classes.scheduleContainer}></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.saucerContainer}></Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.stripeContainer}>
            COME JOIN THE PARTY AT KALOC
          </Paper>
        </Grid>
      </Grid>
      <Footer /> 
      <a href="https://api.whatsapp.com/send?phone=5215546484522"><img alt="img" src="http://placehold.it/200x100" id="fixedbutton"></img></a>
    </div>
  );
};

export default Dashboard;
