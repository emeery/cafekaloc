import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import "../styles/modal.css";
const useStyles = (theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: "#328c99",
    color: "aliceblue",
    fontFamily: "Oswald",
  },
  button: {
    backgroundColor: "#927fd0",
  },
});
class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }
  handleToggle = () => {
    this.setState({ open: !this.state.open });
  };
  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { classes } = this.props;
    return (
      <Fragment className={classes.root}>
        <Button onClick={this.handleToggle}>Contacto</Button>
        <Dialog open={open} fullWidth={true} maxWidth={"sm"}>
          <DialogTitle
            id='simple-dialog-title'
            style={{ backgroundColor: "#917ed0" }}
          >
            <Grid item xs={12}>
              <Paper className={classes.paper}>CONTACTO</Paper>
            </Grid>
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'>
              <path
                fill='#328c99'
                fill-opacity='1'
                d='M0,160L48,176C96,192,192,224,288,234.7C384,245,480,235,576,197.3C672,160,768,96,864,74.7C960,53,1056,75,1152,96C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z'
              ></path>
            </svg>
          </DialogTitle>
          <DialogActions style={{ backgroundColor: "#917ed0" }}>
            <Button className={classes.button} onClick={this.handleClose}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    );
  }
}
export default withStyles(useStyles)(Modal);
