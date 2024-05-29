import React, { useEffect, useState } from "react";
import "react-calendar/dist/Calendar.css";
import { DocImg } from "../../../assets/images/doctorCard";
import spinner from "../../../assets/images/spinning-dots.svg";
import axios from "axios";
import { useParams } from "react-router-dom";
import BookDrModal from "../../../components/Models/BookDrModal";
import toast from "react-hot-toast";
const initialValue = {
  id: "",
  email: "",
  name: "",
  phone: 920000000,
  speciallization: "",
  education: " ",
  fee: 0,
};
const initialState = {
  firstName: "",
  lastName: "",
  dateOfBirth: "",
  gender: "",
  phoneNumber: "",
  email: "",
  address: "",
  city: "",
  profilePicture: "",
  medicalLicenseNumber: "",
  specialty: "",
  yearsOfExperience: "",
  currentPracticeLocation: "",
  professionalAffiliations: "",
  languagesSpoken: "",
  medicalSchool: "",
  graduationYear: "",
  residencyPrograms: "",
  fellowships: "",
  certifications: "",
  previousEmployment: "",
  currentEmployment: "",
  checkUpFee: "",
  healthConditions: "", // Optional
  previousSurgeries: "", // Optional
  allergies: "", // Optional
  medications: "", // Optional
  references: "", // Optional
  publications: "", // Optional
  statementOfPurpose: "", // Optional
  consent: false,
};
export default function BookDr() {
  const { doctorid } = useParams();
  const [state, setState] = useState(initialValue);
  const [singleDr, setSingleDr] = useState(initialState);
  console.log("🚀 ~ BookDr ~ singleDr:", singleDr);
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(true);
  useEffect(() => {
    try {
      axios
        .get(`http://localhost:7000/doctors/${doctorid}`)
        .then((response) => {
          const doctorData = response.data;
          setSingleDr(doctorData.doctor);
          setLoadingData(false);
        });
    } catch (error) {
      toast.error("Doctors Not Found");
      setLoadingData(false);
    }
  }, [loading]);

  return (
    <>
      <div className="doctor mt-lg-5">
        <div className="container">
          {loadingData ? (
            <div className="row">
              <div className="col-6 mx-auto">
                <img src={spinner} alt=".." />
              </div>
            </div>
          ) : (
            <div className="row d-flex justify-content-between">
              <div className="col-12 col-md-6 col-lg-6 d-flex ">
                <div className="div">
                  <div className="img">
                    <img src={singleDr.profilePicture} alt="Doctor image." />
                  </div>
                  <div className="imgDetail m-4">
                    <h5>
                      {singleDr.firstName}
                      {singleDr.lastName}
                    </h5>
                    <p className="fs-6">
                      {singleDr.specialty} <br />
                      <span className="text-body-tertiary ">
                        <i className="fa-solid fa-location-dot"></i>{" "}
                        {singleDr.address}
                      </span>{" "}
                      <br />
                      <span className="text-danger fw-bold ">
                        Consultancy Fee : Rs {singleDr.checkUpFee}.00
                      </span>
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary rounded-pill px-5 button1 "
                      data-bs-toggle="modal"
                      data-bs-target="#bookDrModal"
                      // onClick={() => handlePrescriptionPrev(val)}
                    >
                      Book Now
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-6 d-flex ">
                <div className="info">
                  <div className="label">
                    <span className=" text-white text fs-5">
                      Professional Information
                    </span>
                  </div>
                  <div className="list mt-3">
                    <ol>
                      <li>
                        Previous Surgeries
                        <ul>
                          <li>{singleDr.previousSurgeries}</li>
                        </ul>
                      </li>
                      <li>
                        Publications
                        <ul>
                          <li>{singleDr.publications}</li>
                        </ul>
                      </li>
                      <li>
                        languagesSpoken
                        <ul>
                          <li>{singleDr.languagesSpoken}</li>
                        </ul>
                      </li>
                    </ol>
                  </div>
                  <div className="label mt-5">
                    <span className=" text-white text fs-5">
                      Educational Qualification
                    </span>
                  </div>
                  <div className="list m-3">
                    <p className="fw-bold">Medical School</p>
                    <p>{singleDr.medicalSchool}</p>
                    <p className="fw-bold">Graduation Year</p>
                    <p>{singleDr.graduationYear}</p>
                    <p className="fw-bold">Certifications</p>
                    <p>{singleDr.certifications}</p>
                    <p className="fw-bold">Medical LicenseNumber</p>
                    <p>{singleDr.medicalLicenseNumber}</p>
                    <p className="fw-bold">Professional Affiliations</p>
                    <p>{singleDr.professionalAffiliations}</p>
                    <p className="fw-bold">Previous Employment</p>
                    <p>{singleDr.previousEmployment}</p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <BookDrModal
        doctor={singleDr}
        setLoading={setLoading}
        loading={loading}
      />
    </>
  );
}
