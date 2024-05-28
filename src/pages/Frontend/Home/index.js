import React from "react";
import HeroSection from "./HeroSection";
import TreatmentSection from "./TreatmentSection";
import Appoinment from "./Appoinment";
import DoctorSec from "./DoctorSec";
import Reviews from "./Reviews";
import Artical from "./Artical";
import Footer from "../../../components/Footer/Footer";

export default function index() {
  return (
    <>
      <HeroSection />
      {/* <TreatmentSection /> */}
      <Appoinment />
      <DoctorSec />
      {/* <Reviews /> */}
      {/* <Artical /> */}
      <Footer />
    </>
  );
}
