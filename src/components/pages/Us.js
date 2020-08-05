import React, { Fragment } from "react";
import Toolbar from "../layout/Toolbar";
import { makeStyles, Grid, Paper, Typography } from "@material-ui/core";
import '../../styles/us.css';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  paper: {
    background: "#483d8b",
    padding: theme.spacing(2),
    textAlign: "center",
    color: "lightskyblue",
    fontFamily: "Oswald"
  },
}));

const Us = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <Toolbar />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>NOSOTROS
            </Paper>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>MISION
            <br/>
            La misión de una empresa declara su finalidad a partir de la pregunta «¿por qué existe este negocio?», por lo que sirve como guía a la hora de tomar decisiones estratégicas.
            </Paper>
            <Typography>
            
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Paper className={classes.paper}>VISION
            <br/>
            La visión es una meta de plazo amplio donde se establece la aspiración sobre los logros de una empresa y lo que se desea acerca de su estado futuro. Así, define la ruta a seguir tanto para los directivos como para los empleados.    
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Fragment>
  );
};

export default Us;
