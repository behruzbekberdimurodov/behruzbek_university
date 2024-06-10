import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import user_icon from "../images/icons8-login-64.png";
import { UserButton } from "@clerk/clerk-react";
function Navbar() {
  const [menu_navbars, setmenu_navbars] = useState(false)
  function menu_onn() {
    setmenu_navbars(true)
  }
  function close_off() {
    setmenu_navbars(false)
  }
  return (
    <>

      <nav className="navbar">
        <div className="nabar-in">
          <div onClick={menu_onn} className="burger"></div>
          <Link className="Link" to={""}>
            {" "}
            <div className="box1"></div>
          </Link>

          <div className="box2">
            <Link to="">
              {" "}
              <h3 className="text_first txt_1">HOME </h3>
            </Link>
            <Link to="/NewInformation">
              {" "}
              <h3 className="text_first txt_2">NEW INFORMATION</h3>
            </Link>
            <Link to="Reviewes">
              <h3 className=" text_first txt_3">REVIEWES</h3>

            </Link>
            <Link to="THE-ALTERNATIVE">

              <h3 className="text_first txt_4">THE-ALTERNATIVE</h3>
            </Link>
            <Link to="Contact">
              <h3 className="text_first txt_5">CONTACT</h3>
            </Link>
          </div>

          <UserButton />

        </div>

      </nav>
      {menu_navbars &&
        <>
          <div className="menu_navbar">
            <div className="menu-first">
              <h1>MENU</h1>
              <img onClick={close_off} src="https://img.icons8.com/color/48/close-window.png" alt="X" className="close_btn" />
            </div>
            <Link to="">
              {" "}
              <h3 onClick={close_off} className="text_first txt_1">HOME </h3>
            </Link>
            <Link to="/NewInformation">
              {" "}
              <h3 onClick={close_off} className="text_first txt_2">NEW INFORMATION</h3>
            </Link>
            <Link to="Reviewes">
              <h3 onClick={close_off} className=" text_first txt_3">REVIEWES</h3>

            </Link>
            <Link to="THE-ALTERNATIVE">

              <h3 onClick={close_off} className="text_first txt_4">THE-ALTERNATIVE</h3>
            </Link>
            <Link to="Contact">
              <h3 onClick={close_off} className="text_first txt_5">CONTACT</h3>
            </Link>
          </div>


        </>}

    </>
  );
}

export default Navbar;
