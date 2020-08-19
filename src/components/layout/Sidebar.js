import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import party from "../../assets/chino.png";
import china from "../../assets/china.png";
import food from "../../assets/comida.png";
import dragon from "../../assets/dragon.png";
import "../../styles/sidebar.css";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <Menu onClose={handleOpen} isOpen={open} onOpen={handleOpen}>
      <Link className="link" onClick={handleOpen} to='/'>
        <div className='menu-item'>
        <img src={party} alt='party' />
        INICIO</div>
      </Link>
      <Link onClick={handleOpen} to='/us'>
      <div className='menu-item'>
      <img src={dragon} alt='party' />NOSOTROS
		</div>
      </Link>
      <a
        className='menu-item'
        onClick={handleOpen}
        target='blank'
        href='https://www.docdroid.net/PASolYP/nuevo-pdf'
      >
      <div className='menu-item'>
      <img src={food} alt='party' />
      MENU</div>
      </a>

      <Link onClick={handleOpen} to='/filial'>
      <div className='menu-item'>
      <img src={china} alt='party' />
      SUCURSALES</div>
      </Link>
    </Menu>
  );
};
export default Sidebar;
