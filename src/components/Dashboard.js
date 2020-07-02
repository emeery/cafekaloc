import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "../assets/cafe1.jpg";
import Sauce from "../assets/cafe2.jpg";
import Break from "../assets/Better_Breakfast.svg";
import "../styles/dashboard.css";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scheduleContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 410,
  },
  saucerContainer: {
    background: `url(${Sauce})`,
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
  stripe: {
    background: 'none',
    height: 80,
    marginTop: 30,
  },
  transparent: {
    background: "transparent",
    fontFamily: "Oswald",
    fontSize: 19,
    color: 'aliceblue',
    boxShadow: "none",
    textAlign: "center",
  },
  column: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
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
      <Grid container className={classes.stripe}>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
          <Paper className={classes.transparent}>Política de Privacidad</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
          <Paper className={classes.transparent}>© Kaloc 2020</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
          <Paper className={classes.transparent}>Instagram</Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
          <Paper className={classes.transparent}>Encuentra tu tienda</Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
