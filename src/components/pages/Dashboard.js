import React, { Fragment } from "react";
import { makeStyles, Paper, Grid } from "@material-ui/core";
import Swiperr from "../utils/Swiper";
// import ReactPlayer from "react-player";
import Image from "../../assets/gallery3/escape6.jpg";
import Image2 from "../../assets/gallery4/escape11.jpg"
import Toolbar from "../layout/Toolbar";
// import Footer from "../layout/Footer";cafe


import "../../styles/dashboard.css";
import "../../styles/font.css"

const useStyles = makeStyles((theme) => ({
  info: {
    background: "black",
    backgroundSize: "cover",
    color: "darkgray",
    borderBottomColor: "2px solid red",
    fontFamily: "Bebas Neue",
    fontSize: "4vw",
    marginBottom: 50,
    textAlign: "center",
  },
  stripeContainer: {
    background: "black",
    backgroundSize: "cover",
    color: "darkkhaki",
    borderBottomColor: "2px solid red",
    height:60,
    fontFamily: "Bebas Neue",
    fontSize: "6vw",
    textAlign: "center",
  },
  anotherStripe: {
    background: "whitesmoke",
    backgroundSize: "cover",
    color: "lightgrey",
    borderBottomColor: "2px solid red",
    height:60,
    fontFamily: "Bebas Neue",
    fontSize: "6vw",
    textAlign: "center",
  },
  
  bgContainer: {
    marginTop: 50,
    backgroundImage: `url(${Image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 410,
  },
  bgContainer2: {
    marginTop: 50,
    backgroundImage: `url(${Image2})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: 410,
  },
}));

const Dashboard = () => {
  const classes = useStyles();
  return (
    <Fragment>
      <div>
        {/* <h3 className={classes.centered}>PORTAFOLIO</h3> */}
        {/* <ReactPlayer
          muted={false}
          playing={true}
          controls={false}
          width="100%"
          height="100%"
          url="https://previewvideos-vixen.ssl-cdn.com/102455/1607087483617/102455_working-the-angles_1080P.mp4"
        /> */}
      </div>
      <Toolbar />
      <Swiperr />
      <Grid container spacing={0}>
      <Grid item xs={12} sm={12}>
          <Paper className={classes.stripeContainer}>
           AJM ARQUITECTURA
          </Paper>
      </Grid>
      <Grid item xs={12} sm={12}>
          <Paper className={classes.info}>
          Estudio AJM arquitectura ofrece servicios de diseño arquitectónico. <br></br>
          Sus servicios incluyen el diseño y desarrollo arquitectónico de interiores, 
          la selección y diseño de mobiliario, así como la supervisión arquitectónica de obra.
          </Paper>
      </Grid>
      <Grid item xs={12} sm={12}>
          <Paper className={classes.stripeContainer}>
           PROYECTOS
          </Paper>
      </Grid>
      </Grid>
      <div className={classes.bgContainer}></div>
      <Grid container spacing={0}>
      <Grid item xs={12} sm={12}>
          <Paper className={classes.anotherStripe}>
           PROPUESTA ECONÓMICA PERIFÉRICO
          </Paper>
      </Grid>

      <Grid item xs={12} sm={12}>
        <div className={classes.bgContainer2}> </div>
          <Paper className={classes.anotherStripe}>
            RESIDENCIAL PISAGUA
          </Paper>
      </Grid>
      </Grid>
      {/* <Footer /> */}

    </Fragment>
  );
};

export default Dashboard;
