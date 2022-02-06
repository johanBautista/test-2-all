import React from "react";
import { Outlet } from "react-router-dom";
import { faBars, faMoon, faSun } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Layout = () => {
  return (
    <>
      <div className="d-flex justify-content-around mt-3 mb-5">
        <div>
          <FontAwesomeIcon icon={faMoon}></FontAwesomeIcon>
          <FontAwesomeIcon icon={faSun}></FontAwesomeIcon>
        </div>
        <small>Es</small>
        <FontAwesomeIcon icon={faBars} className="mt-1"></FontAwesomeIcon>
      </div>

      {/* <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav> */}

      <Outlet />
    </>
  );
};

export default Layout;
