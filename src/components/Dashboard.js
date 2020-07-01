import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
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
    width: 315,
    height: 385,
    marginTop: 20,
    boxShadow: "none",
  },
  stripeContainer: {
    background: "#42296f",
    backgroundSize: "cover",
    height: 50,
    textAlign: "center",
  },
  stripe: {
    fontFamily: 'Oswald',
    fontSize: 25,
    height: 40,
    color: 'lightsteelblue'
  }
}));
const Dashboard = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={7}>
          <Paper className={classes.saucerContainer}></Paper>
        </Grid>
        <Grid item xs={5}>
          <Paper className={classes.breakfastContainer}>
            <figure></figure>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
              <path
                fill='#328c99'
                fill-opacity='1'
                d='M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,197.3C672,160,768,96,864,74.7C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
              ></path>
            </svg>
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.stripeContainer}>
            <Box display='flex' justifyContent='center'>
              <Box border={1} borderColor='cadetblue' width="30%" className={classes.stripe} >
              COME JOIN THE PARTY AT KALOC
              </Box>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
