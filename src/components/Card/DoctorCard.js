import React from "react";
import { Link } from "react-router-dom";

export default function DoctorCard({
  Image,
  name,
  fee,
  city,
  bookUrl,
  speciallization,
}) {
  return (
    <>
      <div className="cards-1">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card card-blog">
                <div className="card-image">
                  <Link to={bookUrl}>
                    {" "}
                    <img className="img" src={Image} />{" "}
                  </Link>
                  <div className="ripple-cont"></div>
                </div>
                <div className="table">
                  <p className="">
                    <span className="fw-bold">Name : </span>
                    {name}{" "}
                  </p>{" "}
                  <br />
                  <p className="lh-sm">
                    <span className="fw-bold">Specialist : </span>
                    {speciallization}
                  </p>
                  <span className="float-end bg-danger rounded p-1 text-white">
                    Fee: ₨ {fee}
                  </span>
                  <br />
                  <p className="my-3 text-body-tertiary">
                    <i className="fa-solid fa-location-dot"></i> {city}|
                  </p>
                  <div className="text-center my-3">
                    <Link
                      to={bookUrl}
                      className="btn btn-primary rounded-pill px-5 button1 "
                    >
                      BOOK ME
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
