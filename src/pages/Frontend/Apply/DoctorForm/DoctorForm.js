import React from "react";
import DrForm from "../../../../components/DrForm/DrForm";

export default function DoctorForm() {
  return (
    <div className="container my-5">
      <div className="row">
        <div className="col">
            <h1 className="text-center">Apply as a  Doctor</h1>
            <DrForm/>
        </div>
      </div>
    </div>
  );
}
