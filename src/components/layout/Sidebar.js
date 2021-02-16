import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import casa from "../../assets/casa.png";
import arqui from "../../assets/arqui.png";
import gallery from "../../assets/galeria.png";
import "../../styles/sidebar.css";

const styles = () => ({
  header: {
    fontFamily: "Bebas Neue",
    color: "orange",
    display: "flex",
    justifyContent: "center",
    fontSize: 40,
  }
  });

  const Sidebar = () => {
    const classes = styles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(!open);
    };

    return (
      <Menu onClose={handleOpen} isOpen={open} onOpen={handleOpen}>
      {/* <Link className={classes.header} style={{display: "flex", justifyContent: "center"}} to="/">
      <img src={wm}   alt='icon' />
      AJM
      </Link> */}
      <div className='menu-item'>
      <span className={classes.header}  >
        AJM
      </span>
      </div>
      <Link className="link" onClick={handleOpen} to='/'>
      <div className='menu-item'>
      <img src={casa} alt='party' />
      INICIO</div>
      </Link>
      <Link onClick={handleOpen} to='/us'>
      <div className='menu-item'>
      <img src={arqui} alt='party' />QUIENES SOMOS
      </div>
      </Link>
      {/* <Link onClick={handleOpen} to='/filial'>
      <div className='menu-item'>
      <img src={china} alt='party' />
      SUCURSALES</div>
      </Link> */}
      <Link onClick={handleOpen} to='/gallery'>
      <div className='menu-item'>
      <img src={gallery} alt='party' />
      GALERIA</div>
      </Link>
      </Menu>
    );
  };
  export default Sidebar;
