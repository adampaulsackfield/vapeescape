import './Navbar.scss';
import { Link, Outlet } from 'react-router-dom';
import {
  BsFacebook,
  BsInstagram,
  BsSnapchat,
  BsTiktok,
  BsCart,
} from 'react-icons/bs';
import { Squash as Hamburger } from 'hamburger-react';
import { useState } from 'react';

const Navbar = () => {
  const [menu, setMenu] = useState('');

  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className='container'>
        <header className={menu ? `header header-show-menu` : `header`}>
          <div className='header__menu'>
            <Hamburger
              rounded
              toggled={menu}
              color='#f61067'
              toggle={toggleMenu}
            />
          </div>

          <ul
            className={
              menu ? `header__nav header__nav-show-menu` : `header__nav`
            }
          >
            <li>
              <Link className='header__nav-link header__nav-link-active' to='/'>
                Shop
              </Link>
            </li>
            <li>
              <Link className='header__nav-link' to='/contact'>
                Contact Us
              </Link>
            </li>

            <li>{/* <BsCart color='#ffffff' /> */}</li>
          </ul>

          <Link to='/'>
            <h1 className='header__logo'>The Vape Escape</h1>
          </Link>

          <ul className='header__socials'>
            <li className='header__socials-icon'>
              <a
                id='facebook'
                href='https://www.facebook.com/MGcarpetsradcliffe/'
                target='blank'
              >
                <BsFacebook color='#1877f2' size={26} />
              </a>
            </li>

            <li>
              <a href=''>
                <BsInstagram color='#833AB4' size={26} />
              </a>
            </li>
            <li>
              <a href=''>
                <BsSnapchat color='#FFFC00' size={26} />
              </a>
            </li>
            <li>
              <a href=''>
                <BsTiktok color='#00f2ea' size={26} />
              </a>
            </li>
          </ul>
        </header>
      </div>
      <Outlet />
    </>
  );
};

export default Navbar;
