import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import user_icon from "../assets/icons8-login-64.png";
import { UserButton } from "@clerk/clerk-react";
function Navbar() {
  return (
    <>

      <nav className="navbar">

        <div className="burger"></div>
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
          <Link to="Professional">

            <h3 className="text_first txt_4">PROFESSIONS</h3>
          </Link>
          <Link to="Contact">
            <h3 className="text_first txt_5">CONTACT</h3>
          </Link>
        </div>

        <UserButton />

      </nav>
    </>
  );
}

export default Navbar;
