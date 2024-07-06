import React, { useRef, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/pf.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import theme from "../../assets/theme.png";
import toggle__open from "../../assets/toggle-open.png";
import toggle__close from "../../assets/toggle-close.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const menuRef = useRef();

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-350px";
  };

  return (
    <div className="navbar">
      <img src={logo} alt="" height={80} />
      <img src={toggle__open} onClick={openMenu} className="nav-mob-open" alt="" height={100} />
      <ul ref={menuRef} className="nav-menu">
        <img src={toggle__close} onClick={closeMenu} alt="" className="nav-mob-close" height={40} />
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#home">
            <p onClick={() => setMenu("home")}>Home</p>
          </AnchorLink>
          {menu === "home" ? <img src={theme} alt="" height={150} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => setMenu("about")}>About</p>
          </AnchorLink>
          {menu === "about" ? <img src={theme} alt="" height={150} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#skill">
            <p onClick={() => setMenu("skill")}>Skills</p>
          </AnchorLink>
          {menu === "skill" ? <img src={theme} alt="" height={150} /> : <></>}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => setMenu("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" ? <img src={theme} alt="" height={150} /> : <></>}
        </li>
      </ul>
      <button className="nav-connect">
        <AnchorLink className="anchor-link" offset={50} href="#contact">
          Connect With Me
        </AnchorLink>
      </button>
    </div>
  );
};

export default Navbar;
