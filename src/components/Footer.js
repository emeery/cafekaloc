import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Didi from "../assets/didifood2.svg";
import Icon from "../assets/kaloc2.png";
const useStyles = makeStyles((theme) => ({
  stripe: {
    background: "#333740",
    height: 70,
    marginTop: 30,
  },
  transparent: {
    background: "transparent",
    fontFamily: "Oswald",
    fontSize: 15,
    heigth: 12,
    color: "cadetblue",
    boxShadow: "none",
    textAlign: "center",
  },
  column: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    // color: "cadetblue",
    height: 60,
    backgroundColor: "#263238",
  },
  column2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    backgroundColor: "#1e282d",
  },
  didi: {
    width: 110,
    height: 70,
    position: "relative",
    margin: "auto",
    background: `url(${Didi})`,
    backgroundSize: "cover",
  },
  icon: {
    width: 100,
    height: 38,
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
        <Paper className={classes.transparent}>© 2020 Café KA'LOC</Paper>
      </Grid>
    </Grid>
  );
};

export default Footer;
