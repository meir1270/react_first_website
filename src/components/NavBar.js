import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import { Button } from './Button';
import './NavBar.css'
const NavBar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const handleClick = () => setClick(!click);
    const closeMoblieMenu = () => setClick(false);

    const showButton = ()=>{
        if(window.innerWidth <= 960){
            setButton(false);
        }else{
            setButton(true);
        }
    };
useEffect(() => {
    showButton()
}, []);

    window.addEventListener('resize', showButton)
  return (
      <>
    <nav className="navbar">
        <div className='navbar-container'>
            <Link to="/react_first_website/" className='navbar-logo' onClick={closeMoblieMenu}>
             TRVL <i class="fa-brands fa-typo3"></i>   
            </Link>
            <div className='menu-icon' onClick={handleClick}>
             <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/react_first_website/' className='nav-links' onClick={closeMoblieMenu}> Home</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/react_first_website/services' className='nav-links' onClick={closeMoblieMenu}> Service</Link>
                </li>
                <li className='nav-item'>
                    <Link to='/react_first_website/products' className='nav-links' onClick={closeMoblieMenu}> Products</Link>
                </li>
                <li>
              <Link
                to='/react_first_website/sign-up'
                className='nav-links-mobile'
                onClick={closeMoblieMenu}
              >
                Sign Up
              </Link>
            </li>
            </ul>
            {button && <Button buttonStyle='btn--outline'>SIGN UP 
            </Button>}
        </div>
    </nav>
    </>
  )
}
    
export default NavBar