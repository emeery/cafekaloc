import React, { useState } from "react";
import { Card, CardContent, Typography } from '@material-ui/core'
import { Link } from "react-router-dom";
import casa from "../../assets/casa.png";
import arqui from "../../assets/arqui.png";
import gallery from "../../assets/galeria.png";
import { slide as Menu } from "react-burger-menu";
import "../../styles/sidebar.css";

const styles = () => ({
  root: {
    background: "#273746"
  },
  header: {
    fontFamily: "Bebas Neue",
    color: "orange",
  }
  });

  const Sidebar = () => {
    const classes = styles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
      <Menu style={{borderStyle:"none"}} onClose={handleOpen} isOpen={open} onOpen={handleOpen}>
      <div >
      <Card style={{background:"#312450", borderStyle: "none"}} >
      <CardContent>
      <Typography style={{fontFamily:"Bebas Neue", color: "orange", fontSize:25, textAlign: "center"}} >
      AJM ARQUITECTURA
      </Typography>
      </CardContent>
      </Card>
      <Card style={{background:"#273746",color: "#273746",textAlign: "center"}}>.</Card>
      <Card style={{background:"#273746"}}>
      {/*  */}
      <Link style={{textDecoration: "none"}} onClick={handleOpen} to='/'>
      <div className='menu-item'>
      <img src={casa} alt='party' />
      <span >INICIO</span>
      </div>
      </Link>
      {/*  */}
      <Link style={{textDecoration: "none"}} onClick={handleOpen} to='/us'>
      <div className='menu-item'>
      <img src={arqui} alt='party' />QUIENES SOMOS
      </div>
      </Link>
      {/*  */}
      <Link style={{textDecoration: "none"}} onClick={handleOpen} to='/gallery'>
      <div className='menu-item'>
      <img src={gallery} alt='party' />
      GALERIA</div>
      </Link>
      </Card>
      </div>
      </Menu>
    );
  };
  export default Sidebar;
