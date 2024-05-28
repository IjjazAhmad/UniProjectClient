import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import del from "../../../assets/images/icons/deleteIcon/svg/bin.svg";
import edit from "../../../assets/images/icons/update/svg/edit.svg";
import DoctorDetail from "../../../components/Models/DoctorDetail";
import toast from "react-hot-toast";
import { updateUser } from "../../../stor/slices/authentication";
import { useDispatch } from "react-redux";

export default function DoctorsList() {
  const [confirm, setIsConfirm] = useState("confirm");
  const [dr, setDr] = useState({});
  const [AllDr, setAllDr] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    fetchDoctors();
  }, []);
  const fetchDoctors = async () => {
    try {
      const response = await axios.get('http://localhost:7000/doctors/get');
      setAllDr(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const deleteDr = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/doctors/${id}`
      );
      toast.success("Doctor deleted successfully");
      fetchDoctors();
      // Handle the response if needed
    } catch (error) {
      toast.error("Failed to delete doctor");
      // Handle the error if needed
    }
  };
  const handleConfirm = async (dr) => {
    const role="doctor"
    const payload = {
      role:role
    }
    const payloadUser={
      role:role,
      id:dr.userId,
    }
    try {
     const  response= await axios.put(`http://localhost:7000/doctors/${dr._id}`, payload);
      toast.success('Doctor application confirm successfully');
    await dispatch(updateUser(payloadUser))
      fetchDoctors();
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };
  const handlePrev = (dr) => {
    setDr(dr);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <span className="fs-2 fw-medium"> Doctors </span>
           
          </div>
        </div>

        <div className="row my-3 cart">
          <div className="col">
            <div className="table-responsive border">
              <table className="table table-hover align-middle align-middle">
                <thead className="table-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Phone No</th>
                    <th scope="col">Mail</th>
                    <th scope="col">Speciallization</th>
                    <th scope="col">CheckUpFee</th>
                    <th scope="col">Confirm</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {AllDr.map((dr, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>{dr.firstName}</td>
                        <td>{dr.phoneNumber}</td>
                        <td>{dr.email}</td>
                        <td>{dr.specialty}</td>
                        <td>Rs {dr.checkUpFee}</td>
                        <td>
                          {
                            dr.role==="doctor"? (
                              <i
                                class="fa-solid fa-check fs-4 m-2"
                                style={{ color: "green" }}
                                onClick={() => handleConfirm(dr)}
                              ></i>
                            ) : (
                              <i
                                class="fa-solid fa-check fs-4 m-2 "
                                style={{ color: "blue",cursor:"pointer", }}
                                onClick={() => handleConfirm(dr)}
                              ></i>
                            )
                          }
                          {/* <i
                            class="fa-solid fa-square-check fs-4 m-2"
                            <i class="fa-solid fa-check"></i>
                          ></i> */}
                        </td>
                        <td>
                          <i
                            class="fa-solid fa-trash fs-4 m-2"
                            style={{ color: "red",cursor:"pointer", }}
                            onClick={() => deleteDr(dr._id)}
                          ></i>

                          <i
                            class="fa-solid fa-eye fs-4 m-2"
                            data-bs-toggle="modal"
                            data-bs-target="#doctorDetailModal"
                            style={{cursor:"pointer", }}
                            onClick={() => handlePrev(dr)}
                          ></i>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <DoctorDetail dr={dr} />
    </>
  );
}
