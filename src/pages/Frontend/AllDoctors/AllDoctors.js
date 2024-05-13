import React, { useEffect, useState } from 'react'
import DoctorCard from '../../../components/Card/DoctorCard'
import { DocImg } from '../../../assets/images/doctorCard'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
export default function AllDoctors() {
  const {doctorid} = useParams()
  const [AllDr, setAllDr] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    axios
      .get("http://localhost:7000/doctors/get")
      .then((response) => {
        const doctorData = response.data
        setAllDr(doctorData);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error : ", error);
      });

  }, []);
  return (
    <div className="doctorSection">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-8 text-center">
            <h4 >Meet Our Excellent Doctor</h4>
            <p className='w-75 '>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row">
          {AllDr.map((dr , i )=>{
            return <div className="col-12 col-md-6 col-lg-4 mb-3" key={i}>
              <DoctorCard Image={DocImg.docter1} name={dr.name} category={dr.category} bookUrl={`/${dr._id}`}/>
            </div>
          })}
          {/* <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter1} name="Camilla Wasif" category="Oncologist" bookUrl={`/${doctorid}`}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter2} name="Kristin Watson" category="Cardiologist" bookUrl={`/${doctorid}`}/>
          </div>
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter3} name="Kristin Watson" category="Cardiologist" bookUrl={`/${doctorid}`}/>
          </div> */}
        </div>
      </div>
    </div>

  )
}
