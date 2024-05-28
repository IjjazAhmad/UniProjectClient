import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DoctorsList from "./DoctorsList/DoctorsList";
import DoctorProfile from "./DoctorProfile/DoctorProfile";
import DoctorPatients from "./DoctorPatients/DoctorPatients";
import Patients from "./Patients/Patients";
import { getLocalUser } from "../../stor/slices/authentication";
// import { useAuthContext } from "../Contaxt/AuthContaxt";

export default function AdminRoutesIndex() {
  const [role, setRole] = useState("");
  console.log("🚀 ~ AdminRoutesIndex ~ role:", role)
  useEffect(() => {
    const user = getLocalUser(); // No need to dispatch here
    if (user) {
      setRole(user.role);
    }
  }, []);
  return (
    <>
      <Routes>
        {role ? (
          role === "doctor" ? (
            <>
              <Route path="/doctorprofile" element={<DoctorProfile />} />
              <Route path="/doctorpatients" element={<DoctorPatients />} />
            </>
          ) : 
          role === "admin" ? (
            <>
              <Route path="/home" element={<Home />} />
              <Route path="/patients" element={<Patients />} />
              <Route path="/doctorslist" element={<DoctorsList />} />
            </>
          ) : (
            <Route path="/*" element={<hi>Page Note Found</hi>} />
          )
          
        ) : (
          <Route path="/*" element={<hi>Page Note Found</hi>} />
        )}
      </Routes>
    </>
  );
}
