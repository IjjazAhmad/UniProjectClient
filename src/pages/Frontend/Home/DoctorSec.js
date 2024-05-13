import React from 'react'
import DoctorCard from '../../../components/Card/DoctorCard'
import { DocImg } from '../../../assets/images/doctorCard'
export default function DoctorSec() {
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
          <div className="col-12 col-md-6 col-lg-4 mb-3">
            <DoctorCard Image={DocImg.docter1} name="Camilla Wasif" category="Oncologist" bookUrl={`/sddsfdsf}`}/>
          </div>
        </div>
        <div className="row">
          <div className="col my-5 text-center">
            <button type="button" className="btn btn-secondary rounded-pill px-5 button1">SEE ALL</button>
          </div>
        </div>
      </div>
    </div>

  )
}
