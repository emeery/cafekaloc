import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from '@material-ui/core/Button';
import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from '@material-ui/icons/Menu';
import "../styles/dashboard.css";
import wm from "../../src/assets/kaloc3.png";
import { Typography } from "@material-ui/core";
const styles = (theme) => ({
  root: { height: 55 },
  menuButton: { marginRight: theme.spacing(2) },
  icon: { width: "90px" },
  bg: {background: "transparent",boxShadow: "none"},
  title: { flexGrow: 1 },
  button: { color: "aliceblue" },
});
class Navbar extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
      <AppBar className={classes.bg} position="static">
      <Toolbar >
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <img src={wm} className={classes.icon} alt='morty' />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        </Typography>
        <Button color="inherit">Inicio</Button>
        <Button color="inherit">Menu</Button>
        <Button color="inherit">Contacto</Button>
      </Toolbar>
    </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
