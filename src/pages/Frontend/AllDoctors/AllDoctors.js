import React, { useEffect, useState } from "react";
import DoctorCard from "../../../components/Card/DoctorCard";
import { DocImg } from "../../../assets/images/doctorCard";
import spinner from "../../../assets/images/spinning-dots.svg";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { fetchDoctors } from "../../../stor/slices/doctor";
export default function AllDoctors() {
  const dispatch = useDispatch();
  const { doctors, isLoading, isError } = useSelector((state)=> state.doctor);

  useEffect(() => {
    dispatch(fetchDoctors());
  }, [dispatch]);
  return (
    <div className="doctorSection">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <h4>Meet Our Excellent Doctor</h4>
            <p className="w-75 ">
            Connect with top-tier healthcare professionals through our platform, offering personalized consultations and expert medical advice. 
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        {isLoading ? (
          <div className="row">
            <div className="col-6 mx-auto">
              <img src={spinner} alt=".." />
            </div>
          </div>
        ) : (
          <div className="row">
            {doctors.map((dr, i) => {
              if (dr.role != "user") {

                return (
                  <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
                  <DoctorCard
                    Image={dr.profilePicture}
                    name={`${dr.firstName} ${dr.lastName}`}
                    fee={dr.checkUpFee}
                    city={dr.city}
                    bookUrl={`/${dr.userId}`}
                    speciallization={dr.specialty}
                    />
                </div>
              );
            }
            })}
          </div>
        )}
      </div>
    </div>
  );
}
