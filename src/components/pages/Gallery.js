import React, { Fragment } from "react";
import { makeStyles,Paper,Grid } from "@material-ui/core";
import Toolbar from '../layout/Toolbar';
import '../../styles/nav.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'black',
    color: "white",
    fontFamily: "Oswald"
  },
}));

const Gallery = () => {
  const classes = useStyles();
  return (
    <Fragment>
    <div style={{background: "black"}}>
    <Toolbar/>
    <Grid container spacing={0}>
    <Grid item xs={12}>
    <Paper className={classes.paper}>GALERIA</Paper>
    </Grid>
    </Grid>
    </div>
    </Fragment>
  )
}
export default Gallery;
