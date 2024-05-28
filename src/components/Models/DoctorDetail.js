import React from "react";
import { DocImg } from "../../assets/images/doctorCard";

export default function DoctorDetail({ dr }) {
  return (
    <div
      class="modal fade "
      id="doctorDetailModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable  modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Doctor Detail
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            <div class="card">
              <div class="card-body">
                <div className="row d-flex justify-content-between">
                  <div className="col-12 col-md-6 col-lg-6 d-flex">
                    <div className="div">
                      <div className="img">
                        <img src={DocImg.docter4} alt="Doctor image." />
                      </div>
                      <div className="imgDetail m-4">
                        <h5>
                          {dr.firstName}
                          {dr.lastName}
                        </h5>
                        <p className="fs-6">
                          {dr.specialty} <br />
                          <span className="text-body-tertiary ">
                            <i className="fa-solid fa-location-dot"></i>{" "}
                            {dr.address}
                          </span>{" "}
                          <br />
                          <span className="text-danger fw-bold ">
                            Consultancy Fee : Rs {dr.checkUpFee}.00
                          </span>
                        </p>
                      </div>
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
                        <li>{dr.previousSurgeries}</li>
                      </ul>
                    </li>
                    <li>
                      Publications
                      <ul>
                        <li>{dr.publications}</li>
                      </ul>
                    </li>
                    <li>
                      languagesSpoken
                      <ul>
                        <li>{dr.languagesSpoken}</li>
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
                  <p>{dr.medicalSchool}</p>
                  <p className="fw-bold">Graduation Year</p>
                  <p>{dr.graduationYear}</p>
                  <p className="fw-bold">Certifications</p>
                  <p>{dr.certifications}</p>
                  <p className="fw-bold">Medical LicenseNumber</p>
                  <p>{dr.medicalLicenseNumber}</p>
                  <p className="fw-bold">Professional Affiliations</p>
                  <p>{dr.professionalAffiliations}</p>
                  <p className="fw-bold">Previous Employment</p>
                  <p>{dr.previousEmployment}</p>
                </div>
              </div>
            </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
