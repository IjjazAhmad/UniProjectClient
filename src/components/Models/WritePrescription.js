import React from "react";

export default function WritePrescription({drName,state,onChange,onClick,isLoading}) {
  return (
    <div
      class="modal fade"
      id="writePrescriptionModal"
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
              write Prescriptions
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
                    <h5 class="card-title">
                      Dr : <span className="fw-bold">{drName}</span>
                    </h5>
                    <label htmlFor="presDate" className="form-label">
                     Select Date
                    </label>
                    <input
                      className="form-control rounded-pill text-secondary"
                      type="date"
                      onChange={onChange}
                      name="presDate"
                      id="presDate"
                      value={state.presDate}
                      placeholder="select date"
                    />
                    <label htmlFor="prescription" className="form-label">
                      write Prescription
                    </label>
                    <textarea
                      className="form-control  text-secondary"
                      rows={10}
                      type="text"
                      onChange={onChange}
                      name="prescription"
                      id="prescription"
                      value={state.prescription}
                      placeholder="write  here"
                    />
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
            {
              isLoading? (
                <button type="button" class="btn btn-primary">
                  <div class="spinner-border spinner-border-sm" role="status">
                    <span class="visually-hidden">Loading...</span>
                  </div>
                </button>
              ) : (
                <button type="button" class="btn btn-primary" onClick={onClick}>
                  Save changes
                </button>
              )
            }
          
          </div>
        </div>
      </div>
    </div>
  );
}
