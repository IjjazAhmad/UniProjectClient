import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";

export default function Presc() {
  const [cnic, setCnic] = useState("");
  const [loading, setLoading] = useState(false);
  const [prescription, setPrescription] = useState([]);
  const handleSearch = async () => {
    if(!cnic){
      return toast.error("Please enter CNIC")
    }
    try {
      setLoading(true);
      const response = await axios.get(
        `http://localhost:7000/patients/${cnic}`
      );
      setPrescription(response.data.patient.prescriptions);
      toast.success("Prescriptions Get Successfully");
      setLoading(false);
    } catch (error) {
      toast.error("Patient Not Found");
      setLoading(false)
    }
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 mx-auto">
          <h1>Prescription</h1>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Search with CNIC"
              aria-label="Recipient's username"
              aria-describedby="button-addon2"
              onChange={(e) => setCnic(e.target.value)}
            />
            {loading ? (
              <button
              class="btn btn-outline-secondary"
              type="button"
              id="button-addon2"
            >
              <div class="spinner-border text-primary spinner-border-sm" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </button>
             
            ) : (
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
                onClick={() => handleSearch()}
              >
                Search
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="row">
        {prescription.map((item, i) => {
          return (
            <div className="col-12 col-lg-10 mx-auto my-2" key={i}>
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{item.drName}</h5>
                  <p class="card-text">{item.presDate}</p>
                  <p class="card-text">{item.prescription}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
