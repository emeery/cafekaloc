import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import wm from '../../src/assets/rice.png';
import '../styles/dashboard.css';
import { withStyles } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom'
const styles = theme => ({
  root: { flexGrow: 1 },
  menuButton: { marginRight: theme.spacing(2)},
  rick: { width: '42px' },
  title: { flexGrow: 1,},
  button: { color: 'aliceblue' }
});
class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { color: 'transparent' }
  }
  changeColor = color => {
    this.setState({ color })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar elevation={0} style={{ background: this.state.color }} position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <NavLink to="/" >
              <img src={wm} className={classes.rick} alt="morty"  /></NavLink>
            </IconButton>
            <div variant="h6" className={classes.title}></div>
            <NavLink to="/" >
              <Button className={classes.button}>FILOSOFIA</Button>
            </NavLink>
            <NavLink to="/" >
              <Button className={classes.button}>CONTACTO</Button>
            </NavLink>
          </Toolbar>
        </AppBar>
      </div>
    )
  }
}
export default withStyles(styles)(Navbar);
