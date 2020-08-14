import React, { Fragment } from "react";
import Toolbar from "../layout/Toolbar";
import { makeStyles, Grid, Paper } from "@material-ui/core";
import Image from "../../assets/cafe2.jpg";
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
    height: 310,
  },
  paper: {
    background: "#483d8b",
    padding: theme.spacing(2),
    textAlign: "left",
    color: "lightskyblue",
    fontFamily: "Oswald",
  },
}));

const Us = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div className={classes.scheduleContainer}>
        <Toolbar />
      </div>
      <Grid container spacing={0}>
      <Grid item xs={12}>
            <Paper className={classes.paper}>
            NUESTRA HISTORIA <br/><br/>
            En KALOC, queremos que cada mañana se sienta como su fin de semana y su hora feliz en uno, sin importar de qué lado del mediodía sea. 
            Somos el lugar donde puedes ser tú, y donde nuestros clientes habituales son todo lo contrario. Todos son bienvenidos en nuestra mesa, porque lo mismo ocurre con nuestra gente que con nuestros platos: los giros inesperados son los que los hacen tan especiales.
            </Paper>
          </Grid>
      </Grid>
    </Fragment>
  );
};

export default Us;
