import React from "react";
import "./Header.scss";
import logo from "../../img/Logo.svg";
import Icon from "./Icon";

class Header extends React.Component {
  componentWillMount() {
    console.log("Header va a  ser montado");
  }

  componentDidMount() {
    console.log("Header fue montado");
  }

  render() {
    return (
      <div className="header">
        <a className="logoBtn">
          <img src={logo} alt="logo" className="logoImg" />
          <Icon type="home" />
          <Icon type="burger" />
        </a>
        <span className="separationHeader"></span>
        <button className="burger" alt="burger"></button>
        <ul className="navbar">
          <li>
            <a title="About" href="#ABOUT">
              About
            </a>
          </li>
          <li>
            <a title="Apps" href="#APPS">
              Apps
            </a>
          </li>
          <li>
            <a title="Plans" href="#PLANS">
              Plans
            </a>
          </li>
          <li>
            <a title="Faqs" href="#FAQ">
              FAQ
            </a>
          </li>
          <li>
            <a title="Contact" href="#CONTACT">
              Contact
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Header;
