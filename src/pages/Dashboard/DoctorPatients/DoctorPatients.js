import axios from "axios";
import React, { useEffect, useState } from "react";
import PrescriptionPrev from "../../../components/Models/PrescriptionPrev";
import WritePrescription from "../../../components/Models/WritePrescription";
import spinner from "../../../assets/images/spinning-dots.svg";
import toast from "react-hot-toast";
import PatientDetail from "../../../components/Models/PatientDetail";
import { useDispatch, useSelector } from "react-redux";
import { addPrescription, fetchPatients } from "../../../stor/slices/patients";
import { readDrProfile } from "../../../stor/slices/doctor";
const initialState = {
  presDate: "",
  prescription: "",
};
export default function DoctorPatients() {
  const [patient, setPatient] = useState({});
  const [state, setState] = useState(initialState);
  const [patientId, setPatientId] = useState("");
  const [prescriptionData, setPrescriptionData] = useState([]);
  const [Loading, setLoading] = useState(false);
  const doctor = useSelector((state) => state.doctor.doctor.doctor);
  console.log("🚀 ~ DoctorPatients ~ doctor:", doctor)
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const dispatch = useDispatch();
  // 665331fabcc678c95841456f
  const { patients, isLoading } = useSelector((state) => state.patients);
  console.log("🚀 ~ DoctorPatients ~ patients:", patients);

  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);
  useEffect(() => {
    dispatch(readDrProfile());
  }, []);
  const handleAddPrescription = async () => {
    const { presDate, prescription } = state;
    const drName = doctor.firstName + doctor.lastName;
    const prescriptionData = { drName, presDate, prescription, patientId };

    try {
      setLoading(true);
      dispatch(addPrescription(prescriptionData));
      dispatch(fetchPatients());
      setState(initialState);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };
  const handlePrescriptionPrev = (val) => {
    const prescArray = val.prescriptions;
    setPrescriptionData(prescArray);
  };
  const handlePrev = (doc) => {
    setPatient(doc);
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <span className="fs-2 fw-medium"> Doctors </span>
          </div>
        </div>
        {isLoading ? (
          <div className="row">
            <div className="col-6 mx-auto ">
              <img src={spinner} alt=".." />
            </div>
          </div>
        ) : (
          <div className="row my-3 cart">
            <div className="col-12">
              <div className="table-responsive border">
                <table className="table table-hover align-middle ">
                  <thead className="table-dark">
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Age</th>
                      <th scope="col">CNIC</th>
                      <th scope="col">Phone Number</th>
                      <th scope="col">DR</th>
                      <th scope="col">Details</th>
                      <th scope="col">prescriptions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {patients.map((doc, i) => {
                      if(doc.drId===doctor.userId)
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
                              class="fa-solid fa-eye fs-4 m-2"
                              data-bs-toggle="modal"
                              data-bs-target="#patientDetailModal"
                              onClick={() => handlePrev(doc)}
                            ></i>
                          </td>
                          <td>
                            <div>
                              <button
                                type="button"
                                class="btn btn-sm btn-warning text-white m-2"
                                data-bs-toggle="modal"
                                data-bs-target="#prescriptionModal"
                                onClick={() => handlePrescriptionPrev(doc)}
                              >
                                chack Prev
                              </button>
                              <button
                                type="button"
                                class="btn btn-sm btn-primary m-2"
                                data-bs-toggle="modal"
                                data-bs-target="#writePrescriptionModal"
                                onClick={() => setPatientId(doc._id)}
                              >
                                write Prev
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
      <PrescriptionPrev prescriptionData={prescriptionData} />
      <WritePrescription
        drName={"abc"}
        onChange={handleChange}
        state={state}
        isLoading={Loading}
        onClick={() => handleAddPrescription()}
      />
      <PatientDetail doc={patient} />
    </>
  );
}
