import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'; 


const Navbar = ({ handleNavigation, children }) => {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <strong>CALIBRATION</strong>
            {/*<img src="sablier.jpg" alt="Sablier" className="ms-2" style={{ height: 30, width: 20 }} />*/}
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { handleNavigation(0); closeMobileMenu(); }}>
                Accueil
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { handleNavigation(1); closeMobileMenu(); }}>
                L'entreprise
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { handleNavigation(2); closeMobileMenu(); }}>
                Produits
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { handleNavigation(3); closeMobileMenu(); }}>
                Services
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { handleNavigation(4); closeMobileMenu(); }}>
                Télécharger
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={() => { handleNavigation(5); closeMobileMenu(); }}>
                Liens
              </Link>
            </li>
          </ul>
          {children} {/* Include the search bar here */}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
