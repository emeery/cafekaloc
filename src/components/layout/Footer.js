import React from "react";
import { makeStyles,Paper,Grid } from "@material-ui/core";

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
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <Grid container className={classes.stripe}>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={classes.column2}>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={classes.column}>
        <Paper className={classes.transparent}>© 2020 AJM ARQUITECTURA</Paper>
      </Grid>
      <Grid item xs={12} sm={4} md={4} lg={4} xl={4} className={classes.column}>
        {/* <Paper className={classes.didi}> </Paper> */}
      </Grid>
    </Grid>
  );
};

export default Footer;
