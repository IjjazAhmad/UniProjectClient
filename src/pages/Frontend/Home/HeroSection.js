import React from "react";
import { images } from "../../../assets/images";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <>
      <div className="heroSection">
        <div className="row">
          <div className="col-12">
            <div className="bg-1">
              <img src={images.bg1} className="bg bg-1" />
            </div>
            <div className="bg-2">
              <img src={images.bg2} className="bg bg-2" />
            </div>
          </div>
        </div>
        <div className="container text-white">
          <div className="row hero">
            <div className="col-12 col-md-12 col-lg-7">
              <div className="div-1">
                <h4 className="text-secondary mt-5">
                  Bridging Barriers, Connecting Care
                </h4>
                <h1>Health Companion & E-Partner for Public</h1>
                <p>
                This digital platform is designed to enhance public health and community engagement. It offers personalized health management tools, such as medical record tracking, Additionally, it fosters community support by connecting individuals with similar health interests, facilitating resource sharing.
                </p>
                <div className="button">
                  <div>
                    <Link
                      to={"/alldoctors"}
                      className="btn btn-primary text-white border-white button1"
                    >
                      BOOK APPOINMENT
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5">
              <div className="hero-r ">
                <img src={images.heroimg} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
