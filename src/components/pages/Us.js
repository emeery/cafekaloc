import React, { Fragment } from "react";
import Toolbar from "../layout/Toolbar";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import Image from "../../assets/mision.jpg";
import "../../styles/us.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  scheduleContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 420,
  },
  paper: {
    background: "black",
    padding: theme.spacing(2),
    textAlign: "center",
    color: "white",
    fontFamily: "Oswald",
  },
}));

const Us = () => {
  const classes = useStyles();
  return (
    <Fragment>
    <div style={{background: "black"}}>
    <Toolbar/>
    <Grid container spacing={0}>
    <Grid item xs={12}>
    <Paper className={classes.paper}>NOSOTROS</Paper>
    </Grid>
    </Grid>
    </div>
    <div className={classes.scheduleContainer}></div>
    </Fragment>
  );
};

export default Us;
