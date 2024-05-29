import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPatients } from "../../../stor/slices/patients";
import moment from "moment/moment";
import { readUserProfile } from "../../../stor/slices/authentication";

export default function PublicProfile() {
  const dispatch = useDispatch();
  const patients = useSelector((state) => state.patients.patients);
  console.log('PublicProfile', patients);
  useEffect(() => {
    dispatch(fetchPatients());
  }, [dispatch]);
  useEffect(() => {
    dispatch(readUserProfile());
  }, [dispatch]);
  const users = useSelector((state) => state.authentication.user.user)||{email:""};
  return (
    <>
      <div className="container">
      <div className="row">
        <div className="col-12 px-2 py-4">
          <h3>Profile</h3>
        </div>
        <div>
          <div className="row">
            <div className="col-6">
              <h5>User Email</h5>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>{users.email}</p>
            </div>
          </div>
        </div>
      </div>
        <div className="row">
          <div className="col-12 px-2 py-4">
            <h3>Appoinments</h3>
          </div>
        </div>

        <table class="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Patient Name</th>
              <th scope="col">Age</th>
              <th scope="col">CNIC</th>
              <th scope="col">Phone</th>
              <th scope="col">Address</th>
              <th scope="col">Appoinment Time</th>
              <th scope="col">Appoinment Date</th>
              <th scope="col">Doctor Name</th>
            </tr>
          </thead>
          <tbody>
            {
              patients.map((patient, index) => {
                if(patient.email===users.email)
                return(
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{patient.firstName + patient.lastName}</td>
                  <td>{patient.age}</td>
                  <td>{patient.patientCNIC}</td>
                  <td>{patient.phoneNumber}</td>
                  <td>{patient.address}</td>
                  <td>{patient.availabilityHour}</td>
                  <td>{
                    moment(patient.appoinmentTime).format("DD-MM-YYYY")
                  }</td>
                  <td>{patient.drName}</td>
                </tr>
                )
})
            }
          </tbody>
        </table>
      </div>
    </>
  );
}