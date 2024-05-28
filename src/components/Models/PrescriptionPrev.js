import React from "react";

export default function PrescriptionPrev({prescriptionData}) {
  return (
    <div
      class="modal fade"
      id="prescriptionModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-lg" >
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Previous Prescriptions
            </h1>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body">
            {
                prescriptionData.map((val,i)=>{
                    return(
                        <div class="card" key={i}>
                            <div class="card-body">
                                <h5 class="card-title">Dr : <span className="fw-bold">{val.drName}</span></h5>
                                <p class="card-title">Date : {val.presDate}</p>
                                <h5 class="card-text">Prescription:</h5>
                                <p class="card-text">{val.prescription}</p>
                                
                            </div>
                        </div>
                    )
                })
            }
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
