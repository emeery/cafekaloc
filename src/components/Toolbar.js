import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
// import { NavLink } from "react-router-dom";
// import Modal from "../components/Modal";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import "../styles/dashboard.css";
import wm from "../../src/assets/kaloc3.png";
const styles = (theme) => ({
  root: { height: 55 },
  menuButton: { marginRight: theme.spacing(2) },
  icon: { width: "70px" },
  title: { flexGrow: 1 },
  button: { color: "aliceblue" },
});
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { color: "#328c99" };
  }
  changeColor = (color) => {
    this.setState({ color });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar
          elevation={0}
          style={{ background: this.state.color }}
          position='static'
        >
          <Toolbar>
            <IconButton
              edge='start'
              className={classes.menuButton}
              color='inherit'
              aria-label='menu'
            >
              <img src={wm} className={classes.icon} alt='morty' />
            </IconButton>
            <div variant='h6' className={classes.title}></div>
            {/* <NavLink to='/'>
              <Modal />
            </NavLink>
          */}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}
export default withStyles(styles)(Navbar);
