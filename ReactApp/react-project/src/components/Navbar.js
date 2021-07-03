import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    }

    useEffect(() => {
        showButton()
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <>
          <nav className ="navbar">
              <div className="navbar-container">  
                <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                    NC
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                <i className= {click ? 'fas fa-bars': 'fab fa-typo3' } />
                </div>
                <ul className={click ? 'nav-menu active': ' nav-menu'}>
                    <li className ='nav-item'>
                        <Link to='/' className='nav-links' inClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to='/services' className='nav-links' inClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to='/products' className='nav-links' inClick={closeMobileMenu}>
                            Products
                        </Link>
                    </li>
                    <li className ='nav-item'>
                        <Link to='/signup' className='nav-links' inClick={closeMobileMenu}>
                            Join Us
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline'>JOIN US</Button>}
              </div>
          </nav>
        </>
    )
}

export default Navbar
