import React from "react";
import { images } from "../../assets/images/index";
import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <div className="border-top">
      <div className="container">
        <footer className="row flex-wrap-reverse pt-5 my-5">
          <div className="col-12 col-md-6 col-gl-6 mb-3">
            <Link
              href="/"
              className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none"
            >
              <h3>HC&EP</h3>
            </Link>
            <p className="text-body-secondary ">
              Connect with us on social media
            </p>
            <Link to={"/"}>
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link to={"/"}>
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link to={"/"}>
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link to={"/"}>
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>

          <div className="d-flex flex-wrap justify-content-between col-12 col-md-6 col-gl-6">
            <div className="col-12 col-md-1 col-gl-3 mb-3">
              <h5>MENU</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Home
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-12 col-md-4 col-gl-3 mb-3">
              <h5>CONTACT</h5>
              <ul className="nav flex-column">
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    (+92) 326-7090034
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a
                    href="mailto:ijjazahmad753@gmail.com"
                    className="nav-link p-0 text-body-secondary"
                  >
                    abc232@gmail.com
                  </a>
                </li>
                <li className="nav-item mb-2">
                  <a href="#" className="nav-link p-0 text-body-secondary">
                    Faisalabad Pakistan
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
