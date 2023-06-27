import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { HashLink } from 'react-router-hash-link';
// import { FaTimes, FaBars } from 'react-icons/fa';
// import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    
    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    //in order to remove the unwanted SIGN UP button in navbar
    useEffect(() => {
        showButton()
    }, []);

    window.addEventListener('resize', showButton);

  return (
    <>
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link className="navbar-logo" onClick={closeMobileMenu}>
                    bok
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className={click? 'fas fa-times' : 'fas fa-bars'} />
                </div>
                <ul className={click? 'nav-menu active' : 'nav-menu'}>
                    <li className='nav-item'>
                        <HashLink smooth to='/#home' className='nav-links' onClick={closeMobileMenu}>
                            home
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink smooth to='/#getitout' className='nav-links' onClick={closeMobileMenu}>
                            get it out
                        </HashLink>
                    </li>
                    <li className='nav-item'>
                        <HashLink smooth to='/#detach' className='nav-links' onClick={closeMobileMenu}>
                            detach
                        </HashLink>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar