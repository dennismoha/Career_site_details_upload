import React from 'react'
import { Camera, AlignJustify } from "react-feather";
import { Link } from "react-router-dom";
function Student_side_bar() {
    return (
      <>
        <nav
          className="navbar-vertical navbar"
          style={{ backgroundColor: "#265D9D", color: "white" }}
        >
          <div className="nav-scroller">
            {/* Brand logo */}
            <a className="navbar-brand" href="../index.html">
              <img
                src={require("../uon.jpg")}
                style={{ height: "50px", width: "50px" }}
                alt="uon logo"
              />
            </a>
            {/* Navbar nav */}
            <ul className="navbar-nav flex-column" id="sideNavbar">
              <li className="nav-item">
                <a className="nav-link has-arrow " href="../index.html">
                  <Camera className="nav-icon icon-xs me-2" />{" "}
                  <span style={{ color: "#E5E5E5" }}> Uon Career Portal </span>
                </a>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <div className="navbar-heading" style={{ color: "#E5E5E5" }}>
                  Settings &amp; General
                </div>
              </li>
              {/* Nav item */}
              <li className="nav-item">
                <a
                  className="nav-link has-arrow "
                  href="#!"
                  data-bs-toggle="collapse"
                  data-bs-target="#navPages"
                  aria-expanded="false"
                  aria-controls="navPages"
                >
                  <i
                    data-feather="layers"
                    className="nav-icon icon-xs me-2"
                  ></i>{" "}
                  <span style={{ color: "#E5E5E5" }}> General </span>
                </a>
                <div
                  id="navPages"
                  className="collapse  show "
                  data-bs-parent="#sideNavbar"
                >
                  <ul className="nav flex-column">
                    <li className="nav-item">
                      <a className="nav-link " href="../pages/profile.html">
                        <span style={{ color: "#E5E5E5" }}>
                          {" "}
                          School Profile{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link has-arrow   active  "
                        href="../pages/settings.html"
                      >
                        <span style={{ color: "#E5E5E5" }}>
                          {" "}
                          Password Settings{" "}
                        </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="../pages/billing.html">
                        <span style={{ color: "#E5E5E5" }}> Upload Docs </span>
                      </a>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link " to="/">
                        <span style={{ color: "#E5E5E5" }}> Emails </span>
                      </Link>
                    </li>
                    {/* <li className="nav-item">
                        <a className="nav-link " href="../pages/404-error.html">
                        <span style={{color:"#E5E5E5"}}>   Alter Account </span>
                        </a>
                      </li> */}
                  </ul>
                </div>
              </li>
              {/* Nav item */}

              {/* Nav item */}
            </ul>
          </div>
        </nav>
      </>
    );
}

export default Student_side_bar
