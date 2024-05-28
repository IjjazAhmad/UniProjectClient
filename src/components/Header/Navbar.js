import React, { useEffect, useState } from "react";
import { images } from "../../assets/images";
import { Link, useNavigate } from "react-router-dom";
import { getLocalUser, readUserProfile } from "../../stor/slices/authentication";
import { useDispatch, useSelector } from "react-redux";
export default function Navbar() {
  const navigate = useNavigate();
  const user= useSelector((state)=> state.authentication.user?.user )
  console.log("🚀 ~ Navbar ~ user:", user)

  const [role, setRole] = useState();
  console.log("🚀 ~ Navbar ~ role:", role)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(readUserProfile())
  },[])
  useEffect(()=>{
    setRole(user?.role);
  },[])

  function logout() {
    // Retrieve the token from localStorage
    const user = localStorage.getItem("user");
    if (!user) {
      console.error("user already logout");
      return;
    }
    try {
      localStorage.removeItem("user");
      console.log("User logged out successfully");
      navigate("/auth/login");
    } catch (error) {
      console.error("Error during logout:", error.message);
    }
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white navbar-light">
        <div className="container">
          <Link to={"/"} className="navbar-brand">
            {" "}
           <h3>HC&EP</h3>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/"} className="nav-link active">
                  About Us
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/presc"} className="nav-link">
                  Prescription
                </Link>
              </li>
              <li className="nav-item">
                <Link to={"/alldoctors"} className="nav-link">
                  Doctors
                </Link>
              </li>
              {/* <li className="nav-item">
                <Link to={"/contact"} className="nav-link">
                  Contacts
                </Link>
              </li> */}
            </ul>
            <div className="d-flex">
              {!user?.role ? (
                <Link
                  to={"auth/login"}
                  className="btn btn-outline text-primary"
                >
                  Signin
                </Link>
              ) : (
                <>
                  <button
                    onClick={() => logout()}
                    className="btn btn-outline text-primary"
                  >
                    Logout
                  </button>
                  {user?.role === "user" ? (
                    <>
                      <Link
                        to={"/user/profile"}
                        type="button"
                        className="btn btn-outline-primary mx-2"
                      >
                        profile
                      </Link>
                      <Link
                        to={"/Apply/doctorForm"}
                        type="button"
                        className="btn btn-outline-primary mx-2"
                      >
                        Apply
                      </Link>
                    </>
                  ) : (
                    <Link
                      to={"/dashboard"}
                      type="button"
                      className="btn btn-outline-primary"
                    >
                      Dashboard
                    </Link>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
