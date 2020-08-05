import React from "react";
import { makeStyles,Paper,Grid } from "@material-ui/core";
import Didi from "../../assets/didi-food.svg";
import Rappi from "../../assets/rappi-logo1.png";
import Icon from "../../assets/kaloc2.png";

const useStyles = makeStyles(() => ({
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
    height: 60,
    backgroundColor: "#263238",
  },
  column2: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    height: 60,
    backgroundColor: "#263238",
  },
  didi: {
    width: 110,
    height: 50,
    position: "relative",
    margin: "auto",
    background: `url(${Didi})`,
    backgroundSize: "cover",
  },
  didi2: {
    width: 100,
    height: 50,
    position: "relative",
    boxShadow: "none",
    margin: "auto",
    background: `url(${Rappi})`,
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
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={classes.column2}>
        <div className={classes.didi2}> </div>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={classes.column}>
        <Paper className={classes.transparent}>© 2020 Café KA'LOC</Paper>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={classes.column}>
        <Paper className={classes.didi2}> </Paper>
      </Grid>
    </Grid>
  );
};

export default Footer;
