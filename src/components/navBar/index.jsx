import React, { useState } from 'react';
import { FaReact, FaBars } from 'react-icons/fa';
import { HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './styles.scss';
// dummy data for navbar
const data = [
    {
        label: 'HOME',
        to: '/'
    },
    {
        label: 'ABOUT ME',
        to: '/about'
    },
    {
        label: 'SKILLS',
        to: '/skills'
    },
    {
        label: 'RESUME',
        to: '/resume'
    },
    {
        label: 'PORTFOLIO',
        to: '/portfolio'
    },
    {
        label: 'CONTACT',
        to: '/contact'
    }
]
// function to toggle between icon when page is small
const Navbar = () => {
    const [toggleIcon, setToggleIcon] = useState(false);
    const Toggleitem = () => {
        setToggleIcon(!toggleIcon);
    }
    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    {/* logo */}
                    <Link to={'/'} className="navbar__container__logo">
                        <FaReact size={30} />
                    </Link>
                </div>
                {/* navbar */}
                <ul className={`navbar__container__menu ${toggleIcon ? 'active' : ''}`}>
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__item">
                                <Link className="navbar__container__menu__item__links" to={item.to}>
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                {/* media query for reduced size */}
                <div className="nav-icon" onClick={Toggleitem}>
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}
                </div>
            </nav>
        </div>
    )
}
export default Navbar;