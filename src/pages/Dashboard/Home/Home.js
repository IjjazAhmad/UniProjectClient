import React, { useEffect } from 'react'
import DashboardCart from '../../../components/DashboardCart'
import { images } from '../../../assets/dashboard/cart'

import LinChart from './LinChart'
import { useDispatch, useSelector } from 'react-redux';
import { fetchDoctors } from '../../../stor/slices/doctor';
import { fetchPatients } from '../../../stor/slices/patients';
export default function Home() {
  const doctors  = useSelector((state)=> state.doctor.doctors);
  const patients = useSelector((state)=>state.patients.patients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDoctors());
    dispatch(fetchPatients());
  }, [dispatch]);
  
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name=" DOCTORS" total={doctors.length} icon="fa-user-doctor" img={images.cart1} bg="#7ac74f" />
          </div>
          <div className="col-12 col-md-4 col-lg-3">
            <DashboardCart name=" APPOINTMENT" total={patients.length} icon="fa-calendar-check" img={images.cart2} bg="#f8961e" />
          </div>
        </div>

        <div className="row">
          <div className="col">
            <LinChart/>
          </div>
        </div>
      </div>
    </>
  )
}
