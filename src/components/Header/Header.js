import React, { useState, useRef } from "react";
import "./Header.scss";
import logo from "../../img/Logo.svg";
import Icon from "../Icon/Icon";

//ANIMATION
import { TweenMax, Back } from "gsap";

const ease = Back.easeOut;

const Header = () => {
  const [modeBurger, setModeBurger] = useState("OPEN");
  const myElement = useRef(null);
  const toggleBurger = () => {
    let newModeBurger = modeBurger === "OPEN" ? "CLOSE" : "OPEN";
    setModeBurger(newModeBurger);
  };

  const openNavBar = () => {
    const destY = modeBurger === "OPEN" ? 0 : "-100vh";
    TweenMax.to(myElement.current, 1, { top: destY }, { ease: ease });
    toggleBurger();
  };

  return (
    <div className='header'>
      <a
        className='logoBtn'
        href='https://www.rociopiotti.com/public/webdesign/alternativeenergies/'>
        <img src={logo} alt='logo' className='logoImg' />
      </a>
      <span className='separationHeader'></span>
      <button className='burger' alt='burger' onClick={openNavBar}>
        <Icon type='burger' />
      </button>

      <ul className='navbar' id='navbar' ref={myElement}>
        <li>
          <a
            title='About'
            href='https://www.rociopiotti.com/public/webdesign/alternativeenergies/'>
            About
          </a>
        </li>
        <li>
          <a
            title='Apps'
            href='https://www.rociopiotti.com/public/webdesign/alternativeenergies/'>
            Apps
          </a>
        </li>
        <li>
          <a
            title='Plans'
            href='https://www.rociopiotti.com/public/webdesign/alternativeenergies/'>
            Plans
          </a>
        </li>
        <li>
          <a
            title='Faqs'
            href='https://www.rociopiotti.com/public/webdesign/alternativeenergies/'>
            FAQ
          </a>
        </li>
        <li>
          <a
            title='Contact'
            href='https://www.rociopiotti.com/public/webdesign/alternativeenergies/'>
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Header;
