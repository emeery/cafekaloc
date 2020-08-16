import React, { useState } from "react";
import { slide as Menu } from "react-burger-menu";
import "../../styles/sidebar.css";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const [toogle, setToogle] = useState(false);
  const handleToogle = () => {
    setToogle(!toogle)
  }
  console.log(toogle);
  return (
    <Menu isOpen={toogle} onOpen={handleToogle} {...props}>
    <Link className="li" onClick={() => setToogle(false)} to='/'>
    <div className='menu-item'>INICIO</div>
  </Link>
      <Link onClick={() => setToogle(false)} to='/us'>
        <div className='menu-item'>QUIENES SOMOS</div>
      </Link>
        <a className='menu-item' onClick={() => setToogle(false)}  target="blank"
        href='https://www.docdroid.net/PASolYP/nuevo-pdf'>MENU</a>
      <Link onClick={() => setToogle(false)} to='/'>
        <div className='menu-item'></div>
      </Link>
      <Link onClick={() => setToogle(false)} to='/filial'>
        <div className='menu-item'>SUCURSALES</div>
      </Link>
    </Menu>
  );
};
export default Dashboard;
