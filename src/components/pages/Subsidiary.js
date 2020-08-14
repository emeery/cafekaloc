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
import '../../styles/nav.css';

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
  heading: {
    background: "indigo",
    color: "lightskyblue",
  },
  font: {
    fontFamily: "Oswald",
    fontSize: 15
  }
}));

const Subsidiary = () => {
  const classes = useStyles();
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
            Café KA'LOC Fray Servando
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Map />
        </AccordionDetails>
      </Accordion>
    </Fragment>
  );
};

export default Subsidiary;
