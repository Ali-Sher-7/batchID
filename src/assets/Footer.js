import React from "react";
import { Images } from "./images";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div className=" border-0 bg-black text-white text-center py-5 Foooter">
        <Link to="/" className="text-decoration-none">
          <h2 className="text-white">
            Batch<span>ID</span>
          </h2>
        </Link>

        <div className="card-body pt-0">
          <p className="card-text">WITH ALL RIGHTS RESERVED</p>
          <div>
            <Link to="/">
              <img src={Images.camra} className="footerImg" alt="..." />
            </Link>

            <Link to="/" className="mx-4">
              <img src={Images.facebook} className="footerImg" alt="..." />
            </Link>
            <Link to="/">
              <img src={Images.twitter} className="footerImg" alt="..." />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
