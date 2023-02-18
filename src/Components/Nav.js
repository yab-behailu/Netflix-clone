import React, { useState,useEffect } from 'react'
import "./Nav.css"
function Nav() {
    const [show, handleShow] = useState(false);
    useEffect(() => {
      window.addEventListener("scroll",() => {
        if(window.scrollY > 100){
            handleShow(true);
        } else handleShow(false);
      });
    
      return () => {
        //window.removeEventListener("scroll");
      };
    }, [])
    
  return (
    <div className={`nav ${show && "nav__black"}`}>
        <img className='nav__logo'
        src='https://www.freepnglogos.com/uploads/netflix-logo-0.png' 
        alt='Netflix Logo'
        />
        <img className='nav__avatar'
        src='https://i.pinimg.com/474x/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1--horse-stuff-sleepover.jpg'
        alt='Avatar Logo'
        />
    </div>
  )
}

export default Nav