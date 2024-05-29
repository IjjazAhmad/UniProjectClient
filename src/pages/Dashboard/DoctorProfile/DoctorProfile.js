import React, { useEffect, useState } from "react";
import { DocImg } from "../../../assets/images/doctorCard";
import { useDispatch, useSelector } from "react-redux";
import { readDrProfile } from "../../../stor/slices/doctor";
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
  healthConditions: "",
  previousSurgeries: "",
  allergies: "",
  medications: "",
  references: "",
  publications: "",
  statementOfPurpose: "",
  consent: false,
};
export default function DoctorProfile() {
  const doctor = useSelector((state) => state.doctor.doctor.doctor);
  const [singleDr, setSingleDr] = useState(initialState);
  const [loadingData, setLoadingData] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readDrProfile());
  }, []);
  useEffect(() => {
    if (doctor) {
      setSingleDr({
        firstName: doctor.firstName || "",
        lastName: doctor.lastName || "",
        dateOfBirth: doctor.dateOfBirth || "",
        gender: doctor.gender || "",
        phoneNumber: doctor.phoneNumber || "",
        email: doctor.email || "",
        address: doctor.address || "",
        city: doctor.city || "",
        profilePicture: doctor.profilePicture || "",
        medicalLicenseNumber: doctor.medicalLicenseNumber || "",
        specialty: doctor.specialty || "",
        yearsOfExperience: doctor.yearsOfExperience || "",
        currentPracticeLocation: doctor.currentPracticeLocation || "",
        professionalAffiliations: doctor.professionalAffiliations || "",
        languagesSpoken: doctor.languagesSpoken || "",
        medicalSchool: doctor.medicalSchool || "",
        graduationYear: doctor.graduationYear || "",
        residencyPrograms: doctor.residencyPrograms || "",
        fellowships: doctor.fellowships || "",
        certifications: doctor.certifications || "",
        previousEmployment: doctor.previousEmployment || "",
        currentEmployment: doctor.currentEmployment || "",
        checkUpFee: doctor.checkUpFee || "",
        healthConditions: doctor.healthConditions || "",
        previousSurgeries: doctor.previousSurgeries || "",
        allergies: doctor.allergies || "",
        medications: doctor.medications || "",
        references: doctor.references || "",
        publications: doctor.publications || "",
        statementOfPurpose: doctor.statementOfPurpose || "",
        consent: doctor.consent || false,
      });
    }
  }, [doctor]);
  return (
    <div className="container">
      <div class="card">
        <div class="card-body">
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
                </div>
                <button className="btn btn-primary">Add availability</button>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-6 d-flex ">
              <div className="info">
                <div className="label">
                  <span className="fw-bold fs-5">Professional Information</span>
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
                  <span className="fw-bold fs-5">
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
        </div>
      </div>
    </div>
  );
}
