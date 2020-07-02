import React, {Component} from 'react';
import {NavLink } from 'react-router-dom';
import {slide as Menu} from 'react-burger-menu';
import '../styles/nav.css'
class Nav extends Component {
  constructor() {
    super();
    this.state = { unMenu:false }
  }
  mostrarMenu = () => {
    this.setState({
      unMenu:!this.state.unMenu
    })
  }
  esconderMenu = () => {
    this.setState({
      unMenu:this.state.unMenu
    })
  }
  render() {
    return ( 
      <div className='nav-contenedor'>
      <nav>
      
        <Menu
        isOpen={this.state.unMenu}
        >
              <div 
              className="nav-contenedor__enlaces"
              >
                  <NavLink
                  className='enlace'  
                    to="/"
                    onClick={this.esconderMenu}> 
                    <h3> 
                      <i 
                        className="fas fa-angle-right" > 
                      </i>
                      &nbsp;
                    Biografía 
                    </h3>
                  </NavLink>
                  
                  
                
                  <NavLink
                  className='enlace'
                    to="/experiencia">
                    <h3>
                      <i 
                      className="fas fa-angle-right" > 
                      </i>
                      &nbsp;
                      Experiencia 
                    </h3>
                  </NavLink> 
                  
                  <NavLink 
                    className='enlace'
                    to="/pronostico">
                    <h3>
                        <i 
                        className="fas fa-angle-right" > 
                        </i>
                        &nbsp;
                      Pronostico 
                    </h3>
                  </NavLink> 
                  


                  <NavLink 
                    className='enlace'
                    to="/email">
                    <h3>
                        <i 
                        className="fas fa-angle-right" > 
                        </i>
                        &nbsp;
                      Email 
                    </h3>
                  </NavLink> 
              </div>

              
              <hr
              className='nav-contenedor__barra'
              />
              
              <center>
                <a  
                href="https://github.com/emeery/portafolio" 
                target="_blank" 
                aria-hidden="true">
                <i 
                className="fab fa-github fa-1x" 
                > </i> </a>
            &nbsp;
                <a 
                href="https://jsfiddle.net/emeery/qjg4p1dy/" 
                target="_blank" 
                aria-hidden="true">
                <i 
                className="fab fa-jsfiddle" 
                aria-hidden="true"
                > </i></a>
            &nbsp;
                <a 
                href="https://codepen.io/Emeeery/#" 
                target="_blank" 
                aria-hidden="true">
                <i 
                className="fab fa-codepen fa-1x" 
                aria-hidden="true"
                > </i></a>
              
                <div 
                className="nav-contenedor__logo-jerry"
                > <p> © 2018 Jerry MB. </p>
                </div>
                
              </center>
        
        </Menu>
      
      </nav>
      </div>  
      );
  }
} 
export default Nav;



