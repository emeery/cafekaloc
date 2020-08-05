import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withStyles, AppBar,Toolbar, Button,Typography } from "@material-ui/core";
import wm from "../../assets/kaloc3.png";
import IconButton from "@material-ui/core/IconButton"; //
import "../../styles/nav.css";

const styles = (theme) => ({
  root: { height: 55 },
  menuButton: { marginRight: theme.spacing(2) },
  icon: { width: "90px" },
  bg: {background: "transparent",boxShadow: "none"},
  title: { flexGrow: 1 },
  button: { color:"salmon", fontFamily: "Oswald" },
});

class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar className={classes.bg} position="static">
      <Toolbar >
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <img src={wm} className={classes.icon} alt='icon' />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        </Typography>
        <Button className={classes.button} component={ Link }  to="/">Inicio</Button>
        <Button className={classes.button} target="_blank" href="https://www.docdroid.net/PASolYP/nuevo-pdf">Menu</Button>
        <Button className={classes.button} component={ Link }  to="/us">Nosotros</Button>
      </Toolbar>
    </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
