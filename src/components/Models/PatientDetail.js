import React from "react";

export default function PatientDetail({ doc }) {
  console.log("🚀 ~ DoctorDetail ~ dr:", doc);
  return (
    <div
      class="modal fade"
      id="patientDetailModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable">
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
                <p>
                  <span className="fw-bold"> First Name:</span> {doc.firstName}{" "}
                  <span className="float-end">
                    <span className="fw-bold"> Last Name:</span> {doc.lastName}
                  </span>
                </p>
                <p>
                  <span>
                    <span className="fw-bold"> Age:</span> {doc.age}
                  </span>{" "}
                  <span className="float-end">
                    <span className="fw-bold"> Gender:</span> {doc.gender}
                  </span>
                </p>
                <p>
                  <span className="fw-bold"> CNIC:</span> {doc.patientCNIC}
                </p>
                <p>
                  <span className="fw-bold"> Phone:</span> {doc.phoneNumber}
                </p>
                <p>
                  <span className="fw-bold"> Email:</span> {doc.email}
                </p>
                <p>
                  <span className="fw-bold"> City:</span> {doc.city}
                </p>
                <p>
                  <span className="fw-bold"> Address:</span> {doc.address}
                </p>
                <p>
                  <span className="fw-bold"> Meeting Time:</span>{" "}
                  {doc.availabilityHour}
                </p>
                <p>
                  <span className="fw-bold"> Meeting Date:</span>{" "}
                  {doc.selectedDate}
                </p>
                <p>
                  <span className="fw-bold"> Dr Name:</span> {doc.drName}
                </p>
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
