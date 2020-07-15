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
import Whats from "../assets/whatsapp-icon.png";
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
      <Paper>
        <a
          href='https://api.whatsapp.com/send?phone=5215546484522'
          id='fixedbutton'
        >
          <img
            alt='img'
            target='_blank'
            style={{ width: 43, margin: 10 }}
            src='https://seeklogo.com/images/W/whatsapp-icon-logo-6E793ACECD-seeklogo.com.png'
          ></img>
        </a>
      </Paper>
    </div>
  );
};

export default Dashboard;
