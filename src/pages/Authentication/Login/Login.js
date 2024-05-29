// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { images } from "../../../assets/images/index";
// // import axios from "axios";
// // import { jwtDecode } from "jwt-decode";
// // import { useAuthContext } from "../../Contaxt/AuthContaxt";
// // import toast from "react-hot-toast";
// import Loader from "../../../components/Loader/Loader";
// import { useDispatch } from "react-redux";
// import { signInUser } from "../../../stor/slices/authentication";
// const InitialState = {
//   email: "",
//   password: "",
// };

// export default function Login() {
//   // const { dispatch } = useAuthContext();
//   const { dispatch } = useDispatch()
//   const [state, setState] = useState(InitialState);
//   const [loading, setLoading] = useState(false);
//   const handleChange = (e) => {
//     setState({ ...state, [e.target.name]: e.target.value });
//   };
//   const handleLogin = async (state) => {
//     try {
//       setLoading(true);
//       // const res = await axios.post("http://localhost:7000/auth/login", state);
//       // const email = res.data.user.email;
//       // const role = res.data.user.role;
//       await dispatch(signInUser(state));
//       // toast.success("User successfuly Loggedin!!");
//       setLoading(false);
//       setState(InitialState);
//     } catch (error) {
//       setLoading(false);
//       console.error("Error during login:", error);
//     }
//   };
import React, { useState } from "react";
import { Await, Link, useNavigate } from "react-router-dom";
import { images } from "../../../assets/images/index";
import Loader from "../../../components/Loader/Loader";
import { useDispatch } from "react-redux";
import { signInUser } from "../../../stor/slices/authentication";

const InitialState = {
  email: "",
  password: "",
};

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [state, setState] = useState(InitialState);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await dispatch(signInUser(state));
      console.log("🚀 ~ handleLogin ~ response:", response);
      if (response.type === "signIn/signIn/rejected") {
        setLoading(false);
        return navigate("/auth/login");
      }
      setLoading(false);
      setState(InitialState);
      navigate("/");
    } catch (error) {
      setLoading(false);
      console.error("Error during login:", error);
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
                <h3>Login</h3>
                <p style={{ fontSize: "14px" }}>Welcome Back</p>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      onChange={handleChange}
                      name="email"
                      className="form-control rounded-pill text-secondary"
                      id="email"
                      placeholder="Enter email"
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
                      onChange={handleChange}
                      type="password"
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
                <div className="col-8  col-md-4 col-lg-4">
                  <div className="form-check">
                    <input
                      className="form-check-input "
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckDefault "
                      style={{ fontSize: "14px" }}
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <div className="col-8  col-md-4 col-lg-4">
                  <div className="form-check">
                    <label
                      className="form-check-label "
                      htmlFor="flexCheckDefault "
                      style={{ fontSize: "14px" }}
                    >
                      <Link to={"/auth/forgetpassword"}>ForgetPassword</Link>
                    </label>
                  </div>
                </div>
              </div>
              <div className="row justify-content-center mb-3">
                <div className="col-12 col-md-8 col-lg-8">
                  {loading ? (
                    <Loader />
                  ) : (
                    <button
                      onClick={handleLogin}
                      className="btn btn-primary text-white rounded-pill button1 w-100"
                    >
                      LOGIN
                    </button>
                  )}
                </div>
              </div>
              <div className="row justify-content-center">
                <div className="col-12 col-md-8 col-lg-8">
                  <p>
                    New User?{" "}
                    <Link to={"/auth/register"}>Create An Account</Link>
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
