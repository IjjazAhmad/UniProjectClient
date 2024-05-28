import React, { useState } from "react";
import { images } from "../../../assets/images/index";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import Loader from "../../../components/Loader/Loader";
const initialState = {
  email: "",
  password: "",
};

export default function Register() {
  const [state, setState] = useState(initialState);
  const [loading, setLoaing] = useState(false);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleRegister = async () => {
    const { email, password } = state;
    if (!email || !password) {
      toast.error("Please fill all the fields");
      return;
    }
    const role = "user";
    const user = { email, password, role };
    try {
      setLoaing(true);
      const response = await axios.post(
        "http://localhost:7000/auth/register",
        user
      );
      toast.success("User successfuly registered");
      setState(initialState);
      setLoaing(false);
      navigate("/auth/login");
    } catch (error) {
      toast.error("Email already exists");
      console.error("Error : ", error);
      setLoaing(false);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row my-3">
          <div className="col">
            <div className="d-flex justify-content-center">
              <h3>HC&EP</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid py-5 contactForm">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="box bg-white button1 p-5 rounded">
              <div className="text-center">
                <h3>Register</h3>
                <p style={{ fontSize: "14px" }}>Welcome </p>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      type="email"
                      className="form-control rounded-pill text-secondary"
                      id="email"
                      placeholder="Enter email"
                      name="email"
                      value={state.email}
                    />
                  </div>
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label">
                      Password
                    </label>
                    <input
                      type="password"
                      onChange={handleChange}
                      className="form-control rounded-pill text-secondary"
                      id="password"
                      placeholder="Enter password"
                      name="password"
                      value={state.password}
                    />
                  </div>
                </div>
              </div>

              <div className="row justify-content-center mb-3">
                <div className="col-12 col-md-8 col-lg-8">
                  {loading ? (
                    <Loader />
                  ) : (
                    <button
                      className="btn btn-primary text-white rounded-pill button1 w-100"
                      type="submit"
                      onClick={handleRegister}
                    >
                      REGISTER
                    </button>
                  )}
                  {/* <Link
                    className="btn btn-primary text-white rounded-pill button1 w-100"
                    onClick={handleRegister}
                  >
                    REGISTER
                  </Link> */}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <p>
                    Already Have An Account?{" "}
                    <Link to={"/auth/login"}>Login</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
