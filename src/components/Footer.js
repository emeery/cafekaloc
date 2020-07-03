import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Didi from "../assets/didifood.png";
import Icon from "../assets/kaloc.png";
const useStyles = makeStyles((theme) => ({
  stripe: {
    background: "#333740",
    height: 120,
    marginTop: 30,
  },
  transparent: {
    background: "transparent",
    fontFamily: "Bebas Neue",
    fontSize: 22,
    color: "turquoise",
    boxShadow: "none",
    textAlign: "center",
  },
  column: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#333740",
  },
  didi: {
    width: 85,
    height: 70,
    position: "relative",
    margin: "auto",
    background: `url(${Didi})`,
    backgroundSize: "cover",
  },
  icon: {
    width: 85,
    height: 70,
    position: "relative",
    margin: "auto",
    background: `url(${Icon})`,
    backgroundSize: "cover",
  },
}));
const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.stripe}>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
        <div className={classes.didi}> </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
        <div className={classes.icon}> </div>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
        <Paper className={classes.transparent}>Instagram</Paper>
      </Grid>
      <Grid item xs={12} sm={6} md={3} lg={3} xl={3} className={classes.column}>
        <Paper className={classes.transparent}>Encuentra tu tienda</Paper>
      </Grid>
    </Grid>
  );
};

export default Footer;
