import React, { Fragment } from "react";
import { makeStyles,Paper,Grid, GridList, GridListTile } from "@material-ui/core";
import Toolbar from '../layout/Toolbar';
import gallery1 from '../../assets/gallery/chow_min1.jpg';
import gallery2 from '../../assets/gallery/combinacion_kaloc1.jpg';
import gallery3 from '../../assets/gallery/arroz_mixto1.jpg';
import gallery4 from '../../assets/gallery/verduras_mixtas1.jpg';
import gallery5 from '../../assets/gallery/chop_suey1.jpg';
import gallery6 from '../../assets/gallery/pollo_agridulce1.jpg';
import gallery7 from '../../assets/gallery/costilla_horno.jpg';
import '../../styles/font.css';

const tileData = [
     {
       img: gallery1,
       title: 'Image',
       author: 'author',
       cols: 2,
     },
     {
      img: gallery2,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: gallery3,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: gallery4,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: gallery5,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: gallery6,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
    {
      img: gallery7,
      title: 'Image',
      author: 'author',
      cols: 2,
    },
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
    <div style={{background: "black"}}>
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
    </div>
    </Fragment>
  )
}
export default Gallery;
