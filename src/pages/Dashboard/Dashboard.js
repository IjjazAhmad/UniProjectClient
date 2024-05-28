import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as mdb from "mdb-ui-kit"; // lib
import { Input } from "mdb-ui-kit"; // module
import "mdb-ui-kit/css/mdb.min.css";
import Route from "./Route";
import { useAuthContext } from "../Contaxt/AuthContaxt";
import { getLocalUser } from "../../stor/slices/authentication";
export default function Dashboard() {
  const [role, setRole] = useState("");
  useEffect(() => {
    const user = getLocalUser(); // No need to dispatch here
    if (user) {
      setRole(user.role);
    }
  }, []);
  const HandleLogout = () => {};
  return (
    <>
      <div className="dashBoard">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              <header>
                <nav
                  id="sidebarMenu"
                  tabIndex="-1"
                  className="collapse d-lg-block sidebar collapse "
                >
                  <div className="position-sticky ">
                    <div className="list-group list-group-flush mx-3 mt-4 ">
                      {role === "doctor" ? (
                        <>
                          <Link
                            to={"/dashboard/doctorprofile"}
                            className="list-group-item list-group-item-action py-2 ripple  text-white"
                          >
                            <i className="fa-solid fa-file-lines fa-fw me-3"></i>
                            <span>Doctor Profile</span>
                          </Link>
                          <Link
                            to={"/dashboard/doctorpatients"}
                            className="list-group-item list-group-item-action py-2 ripple  text-white"
                          >
                            <i className="fa-solid fa-file-lines fa-fw me-3"></i>
                            <span>Doctor Patients</span>
                          </Link>
                        </>
                      ) : (
                        <>
                          <Link
                            to={"/dashboard/home"}
                            className="list-group-item list-group-item-action py-2 ripple  text-white"
                            aria-current="true"
                          >
                            <i className="fas fa-tachometer-alt fa-fw me-3"></i>
                            <span>Dashboard</span>
                          </Link>
                          <Link
                            to={"/dashboard/doctorslist"}
                            className="list-group-item list-group-item-action py-2 ripple  text-white"
                          >
                            <i className="fa-solid fa-user-tie fa-fw me-3"></i>
                            <span>Doctors List</span>
                          </Link>
                          <Link
                            to={"/dashboard/patients"}
                            className="list-group-item list-group-item-action py-2 ripple  text-white"
                          >
                            <i className="fa-solid fa-file-lines fa-fw me-3"></i>
                            <span>Patients</span>
                          </Link>
                        </>
                      )}
                      <Link
                        to={"/"}
                        className="list-group-item list-group-item-action py-2 ripple  text-white"
                      >
                        <i className="fa-solid fa-file-lines fa-fw me-3"></i>
                        <span>Back To Site</span>
                      </Link>
                    </div>
                  </div>
                </nav>

                <nav
                  id="main-navbar"
                  className="navbar navbar-expand-lg navbar-light bg-white fixed-top"
                >
                  <div className="container">
                    <button
                      className="navbar-toggler"
                      type="button"
                      data-mdb-toggle="collapse"
                      data-mdb-target="#sidebarMenu"
                      aria-controls="sidebarMenu"
                      aria-label="Toggle navigation"
                    >
                      <i className="fas fa-bars"></i>
                    </button>

                    <Link to={"/"} className="navbar-brand">
                      {role} portal
                    </Link>
                    <ul className="navbar-nav ms-auto d-flex flex-row">
                      <li className="nav-item dropdown">
                        <ul
                          className="dropdown-menu dropdown-menu-end"
                          aria-labelledby="navbarDropdownMenuLink"
                        >
                          <li>
                            <Link
                              className="dropdown-item"
                              onClick={HandleLogout}
                            >
                              Logout
                            </Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </nav>
              </header>
              <main style={{ marginTop: "58px" }}>
                <div className=" pt-4">
                  <Route />
                </div>
              </main>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
