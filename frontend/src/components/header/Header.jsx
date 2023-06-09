import React, { useState } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import { nav } from "../data/data";

export const Header = () => {
  const [navList, setNavList] = useState();
  return (
    <>
      <header>
        <div className="container flex">
          <div className="logo">
            <img src="./logos/logo.png" alt="" />
          </div>
          <div className="nav">
            {/* ******************** */}
            {/* in navList the attribute based on the value of 
            the navList variable; so if navList is true the class 
            name "small" will apply otherwise the class name
             "flex" will be applied */}

            <ul className={navList ? "small" : "flex"}>
              {nav.map((list, index) => (
                <li key={index}>
                  <Link to={list.path}>{list.text}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="button flex">
            <h4>
              <span>0</span>My Favorites
            </h4>
            <button className="btn1">
              <i className="fa fa-sign-out"></i>Login
            </button>
          </div>

          <div className="toggle">
            <button onClick={() => setNavList(!navList)}>
              {navList ? (
                <i className="fa fa-times"></i>
              ) : (
                <i className="fa fa-bars"></i>
              )}
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
