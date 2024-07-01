import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/main.css";

import { Link } from "react-router-dom";
import { Images } from "../assets/images";

const Header = () => {
  return (
    <>
      <section className="Navbar py-2">
        <nav className="navbar navbar-expand-md navbar-light h-100 px-5">
          <div>
            <Link className="navbar-brand " href="#">
              <img src={Images.logo} alt="Logo" width={100} />
            </Link>
          </div>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarCollapse">
            <ul className="navbar-nav mr-auto w-100 d-flex justify-content-end navUl">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="#">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item ">
                <Link
                  className="nav-link active m-0 px-4 py-2 bg-black text-white rounded text-center"
                  aria-current="page"
                  href="#"
                >
                  Sign In
                </Link>
              </li>
              {/* <!-- Other navbar items here --> */}
            </ul>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Header;
