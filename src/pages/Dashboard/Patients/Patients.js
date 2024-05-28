import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import PatientDetail from "../../../components/Models/PatientDetail";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../../stor/slices/patients";

export default function Patients() {
  const [patient, setPatient] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);
  const deletePatient = async (id) => {
    try {
      const response = await axios.delete(
        `http://localhost:7000/patients/${id}`
      );
      toast.success("Patient deleted successfully");
      dispatch(fetchPatients());
      // Handle the response if needed
    } catch (error) {
      toast.error("Failed to delete patient");
      // Handle the error if needed
    }
  };

  const handlePrev = (doc) => {
    setPatient(doc);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <span className="fs-2 fw-medium">Patients </span>
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
                    <th scope="col">Age</th>
                    <th scope="col">CNIC</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">DR</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {patients.map((doc, i) => {
                    return (
                      <tr key={i}>
                        <th scope="row">{i + 1}</th>
                        <td>
                          {doc.firstName} {doc.lastName}
                        </td>
                        <td>{doc.age} year</td>
                        <td>{doc.patientCNIC}</td>
                        <td>{doc.phoneNumber}</td>
                        <td>{doc.drName}</td>
                        <td>
                          <i
                            class="fa-solid fa-trash fs-4 m-2"
                            onClick={() => deletePatient(doc._id)}
                          ></i>

                          <i
                            class="fa-solid fa-eye fs-4 m-2"
                            data-bs-toggle="modal"
                            data-bs-target="#patientDetailModal"
                            onClick={() => handlePrev(doc)}
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
      <PatientDetail doc={patient} />
    </>
  );
}
