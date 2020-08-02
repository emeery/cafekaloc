import { Fragment } from "react";
import React from "react";
import Toolbar from "../components/Toolbar";
import { Grid, Paper } from "@material-ui/core";


const Menu = () => {
    return ( <Fragment>
        <Toolbar/>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12}>
          <Paper >
            
            PDF MENU &nbsp;
          </Paper>
        </Grid>
      </Grid>
        </Fragment> );
}
 
export default Menu;