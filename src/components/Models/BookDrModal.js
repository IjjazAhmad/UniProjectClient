import React from "react";
import Calendar from "react-calendar";
import Inputs from "../inputs/Inputs";
import PatientForm from "../Form/PatientForm";

export default function BookDrModal({ drId, drName }) {
  return (
    <div
      class="modal fade"
      id="bookDrModal"
      data-bs-backdrop="static"
      data-bs-keyboard="false"
      tabindex="-1"
      aria-labelledby="staticBackdropLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog modal-dialog-scrollable modal-lg">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="staticBackdropLabel">
              Book Doctor
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
              <div class="card-body ">
                {/* <div className="row">
                  <div className="col-6">
                    <Inputs
                      label={"Patient Name"}
                      name={"patientName"}
                      onChange={onChange}
                      value={state.patientName}
                      placeholder={"name"}
                      type={"text"}
                    />
                  </div>
                  <div className="col-6">
                    <Inputs
                      label={"Patient age"}
                      name={"patientAge"}
                      onChange={onChange}
                      value={state.patientAge}
                      placeholder={"age"}
                      type={"number"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <Inputs
                      label={"Phone No."}
                      name={"patientPhoneNo"}
                      onChange={onChange}
                      value={state.patientPhoneNo}
                      placeholder={"923000000000"}
                      type={"number"}
                    />
                  </div>
                  <div className="col-6">
                    <Inputs
                      label={"Patient CNIC"}
                      name={"patientCNIC"}
                      onChange={onChange}
                      value={state.patientCNIC}
                      placeholder={"0000000000000"}
                      type={"number"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-12">
                    <Inputs
                      label={"Address"}
                      name={"address"}
                      onChange={onChange}
                      value={state.address}
                      placeholder={"address"}
                      type={"text"}
                    />
                  </div>
                  <div className="col-6">
                    <Inputs
                      label={"Select Date"}
                      name={"date"}
                      onChange={onChange}
                      value={state.date}
                      placeholder={"date"}
                      type={"date"}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="time" className="form-label">
                      Select Time
                    </label>
                    <select
                      name="time"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={onChange}
                      value={state.time}
                    >
                      <option disabled>select time</option>
                      <option value="10">10 PM</option>
                      <option value="11">11 PM</option>
                      <option value="12">12 PM</option>
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="time" className="form-label">
                      Select Gender
                    </label>
                    <select
                      name="gender"
                      className="form-select"
                      aria-label="Default select example"
                      onChange={onChange}
                      value={state.gender}
                    >
                      <option disabled>select gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Transgender">Transgender</option>
                    </select>
                  </div>
                </div>
                <div className="row">
                  <div className="col-6"></div>
                </div> */}
                <PatientForm drId={ drId} drName={drName}  />
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Cancel
            </button>
            {/* {loading ? (
              <button type="button" class="btn btn-primary">
                <div class="spinner-border spinner-border-sm" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            ) : (
              <button type="button" class="btn btn-primary" onClick={onClick}>
                Book
              </button>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}
