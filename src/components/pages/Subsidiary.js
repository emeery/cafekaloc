import React, { Fragment } from "react";
import Toolbar from "../layout/Toolbar";
import Image from "../../assets/cafe-lechero.jpg";
import {
  makeStyles,
  Accordion,
  AccordionDetails,
  Typography,
  AccordionSummary,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Map from "../utils/Map";
import '../../styles/font.css';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    marginTop: 20,
  },
  scheduleContainer: {
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height:300,
  },
  heading: {
    background: "indigo",
    color: "lightskyblue",
  },
  font: {
    fontFamily: "Oswald",
    fontSize: 15
  },
  info: {
    fontFamily: "Oswald",
    textAlign: "center",
    fontSize: 13,
    color: "orangered",
    textTransform: "uppercase"
  }
}));

const Subsidiary = () => {
  const classes = useStyles();
  const state = { coordinate: {lat: 19.417417, lng: -99.103889, zoom: 15 }}
  const state2 = { coordinate: {lat: 19.459988, lng: -99.170244, zoom: 15 }}
  return (
    <Fragment>
      <div className={classes.scheduleContainer}>
        <Toolbar />
      </div>
      <Accordion className={classes.heading}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls='panel1a-content'
          id='panel1a-header'
        >
          <Typography className={classes.font}>
            - CAFE KA'LOC FRAY SERVANDO
          </Typography>
        </AccordionSummary>
        <Typography className={classes.info}>
          Fray Servando T. de Mier 5,
          Jardín Balbuena, Venustiano Carranza, 15900 CDMX <br/>
          55 5785 9137
        </Typography>
        <AccordionDetails>
          <Map position={state.coordinate} zoom={state.coordinate.zoom}/>
        </AccordionDetails>
        </Accordion>
        <Accordion className={classes.heading}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography className={classes.font}>
              - CAFE KA'LOC CAMARONES
            </Typography>
          </AccordionSummary>
          <Typography className={classes.info}>
             Eje 3 Nte. Camarones 80, San Salvador Xochimanca, Azcapotzalco, 02870 CDMX <br/>
            55 5341 0009
          </Typography>
          <AccordionDetails >
            <Map  position={state2.coordinate} zoom={state2.coordinate.zoom}/>
          </AccordionDetails>
          </Accordion>
    </Fragment>
  );
};

export default Subsidiary;
