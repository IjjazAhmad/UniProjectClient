import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "../../components/Header";
import Home from "./Home";
import Contact from "./Contact";
import BookDr from "./BookDr";
import AllDoctors from "./AllDoctors/AllDoctors";
import Presc from "./Presc/Presc";
import BottomFooter from "../../components/Footer/BottomFooter";
import DoctorForm from "./Apply/DoctorForm/DoctorForm";
import { getLocalUser } from "../../stor/slices/authentication";
import PublicProfile from "./PublicProfile/PublicProfile";
export default function Index() {
  const [role, setRole] = useState("");
  console.log("🚀 ~ Index ~ role:", role);
  useEffect(() => {
    const user = getLocalUser(); // No need to dispatch here
    if (user) {
      setRole(user.role);
    }
  }, []);
  return (
    <>
      <Header />
      <main>
        <Routes>
            <>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/alldoctors" element={<AllDoctors />} />
              <Route path="/:doctorid" element={<BookDr />} />
              <Route path="/presc" element={<Presc />} />
            </>
          {role === "user" ? (
            <>
            <Route path="/apply/doctorform" element={<DoctorForm />} />
            <Route path="/user/profile" element={<PublicProfile />} />
            </>
          ) : (
            <Route path="/*" element={<hi>Page Note Found</hi>} />
          )}
        </Routes>
      </main>
      <BottomFooter />
    </>
  );
}
