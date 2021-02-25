import React, { Fragment } from "react";
import { makeStyles,Paper,Grid, GridList, GridListTile } from "@material-ui/core";
import Toolbar from '../layout/Toolbar';
// import gallery1 from '../../assets/gallery/chow_min1.jpg';
import '../../styles/font.css';

const tileData = [
    //  {
    //    img: gallery1,
    //    title: 'Image',
    //    author: 'author',
    //    cols: 2,
    //  },

   ];
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    background: 'black',
    color: "white",
    fontFamily: "Oswald"
  },
  gridList: {
    width: '100%',
    background: 'black'
  },
}));

const Gallery = () => {
  const classes = useStyles();
  return (
    <Fragment>
    {/* <div style={{background: "black"}}>
    <Toolbar/>
    <Grid container spacing={0}>
    <Grid item xs={12}>
    <Paper className={classes.paper}>GALERIA</Paper>
    <div className={classes.root}>
    <GridList cellHeight={310} className={classes.gridList} cols={1}>
        {tileData.map((tile) => (
          <GridListTile style={{ width: "100%" }}he  key={tile.img} cols={tile.cols || 1}>
            <img  src={tile.img} alt={tile.title} />
          </GridListTile>
        ))}
    </GridList>
    </div>
    </Grid>
    </Grid>
    </div> */}
    </Fragment>
  )
}
export default Gallery;
