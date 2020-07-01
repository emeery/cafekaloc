import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Image from "../assets/cafe1.jpg";
import Sauce from "../assets/cafe2.jpg";
import Break from "../assets/Better_Breakfast.svg";
import '../styles/dashboard.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  scheduleContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: 550,
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
    color: 'lightsteelblue',
    borderBottomColor: '2px solid red',
    height: 50,
    fontFamily: 'Oswald',
    fontSize: 20,
    textAlign: "center",
  },
  stripe: {
    
    // fontSize: 25,
    // height: 40,
    // width: 100,
    // color: 'lightsteelblue'
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={5} sm={6}>
          <Paper className={classes.saucerContainer}></Paper>
        </Grid>
        <Grid item xs={7} sm={6}>
          <Paper className={classes.breakfastContainer}>
            <figure></figure>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper className={classes.stripeContainer}>
          COME JOIN THE PARTY AT KALOC</Paper>
        </Grid> 
        <Grid item xs={12} sm={12}>
          <Paper >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#328c99" fill-opacity="1" d="M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,197.3C672,160,768,96,864,74.7C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
          </Paper>
        </Grid> 
      </Grid>
    </div>
  );
};

export default Dashboard;
