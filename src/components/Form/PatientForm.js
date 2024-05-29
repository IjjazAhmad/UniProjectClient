// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// import { zodResolver } from '@hookform/resolvers/zod';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';
// import axios from 'axios';
// import toast from 'react-hot-toast';
// import Inputs from '../inputs/Inputs';
// import { patientFormSchema } from '../../constants/PatientFormSchema';

// const initialState = {
//   firstName: '',
//   lastName: '',
//   age: '',
//   patientCNIC: '',
//   gender: '',
//   phoneNumber: '',
//   email: '',
//   city: '',
//   address: '',
//   medicalHistory: '',
//   availabilityHour:'',
//   consent: false,
// };

// const availabilityHours = [
//   '08:00 AM - 09:00 AM',
//   '09:00 AM - 10:00 AM',
//   '10:00 AM - 11:00 AM',
//   '11:00 AM - 12:00 PM',
//   '01:00 PM - 02:00 PM',
//   '02:00 PM - 03:00 PM',
//   '03:00 PM - 04:00 PM',
//   '04:00 PM - 05:00 PM',
//   '05:00 PM - 06:00 PM',
// ];

// const PatientForm = (doctor) => {
//   const slotsArray = doctor.slots || []
//   const { register, handleSubmit, formState: { errors }, reset } = useForm({
//     resolver: zodResolver(patientFormSchema),
//   });

//   const [selectedDate, setSelectedDate] = useState(null);
//   const [state, setState] = useState(initialState);

//   // const onSubmit = async (data) => {
//   //   console.log("🚀 ~ onSubmit ~ data:", data)
//   //   try {
//   //     await axios.post('http://localhost:7000/patients/post', { ...data, selectedDate: selectedDate, drId:drId, drName:drName });
//   //     toast.success('Patient information submitted successfully');
//   //     reset();
//   //     setSelectedDate(null);
//   //     setState(initialState);
//   //   } catch (error) {
//   //     toast.error(error.response.data.error);
//   //     console.error(error);
//   //   }
//   // };
//   const onSubmit = async (event) => {
//     event.preventDefault();

//     const availabilityHour = `${selectedSlot.start} - ${selectedSlot.end}`;

//     try {
//       await axios.post('http://localhost:7000/patients/post', {
//         ...patientData,
//         selectedDate,
//         availabilityHour,
//         drId: doctor._id,
//         drName: `${doctor.firstName} ${doctor.lastName}`,
//       });

//       toast.success('Patient information submitted successfully');

//       // Update doctor's slots by removing the booked slot
//       const updatedSlots = doctor.slots.filter(
//         (slot) => !(slot.start === selectedSlot.start && slot.end === selectedSlot.end)
//       );

//       // Send the updated slots to the server
//       await axios.put(`http://localhost:7000/doctors/${doctor._id}`, {
//         slots: updatedSlots,
//       });

//       // Reset form
//       setSelectedDate(null);
//       setSelectedSlot(null);
//       setPatientData({
//         firstName: '',
//         lastName: '',
//         age: '',
//         patientCNIC: '',
//         gender: '',
//         phoneNumber: '',
//         email: '',
//         city: '',
//         address: '',
//         medicalHistory: '',
//         consent: false,
//       });
//     } catch (error) {
//       toast.error(error.response?.data?.error || 'Failed to book appointment');
//       console.error(error);
//     }
//   };
//   return (
//     <div className="container mb-5">
//       <form onSubmit={handleSubmit(onSubmit)}>
// <p>Dr : {drName}</p>
//         <h2>Personal Information</h2>
//         <div className="row">
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="First Name"
//               name="firstName"
//               register={register}
//               errors={errors}
//               placeholder="Enter First Name"
//               type="text"
//             />
//           </div>
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="Last Name"
//               name="lastName"
//               register={register}
//               errors={errors}
//               placeholder="Enter Last Name"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="Age"
//               name="age"
//               register={register}
//               errors={errors}
//               placeholder="Enter Age"
//               type="number"
//             />
//           </div>
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="Patient CNIC"
//               name="patientCNIC"
//               register={register}
//               errors={errors}
//               placeholder="0000000000000"
//               type="number"
//             />
//           </div>
//           <div className="col-12 col-lg-6">
//             <label htmlFor="gender" className='mt-3'>Gender</label>
//             <select
//               id="gender"
//               className="form-control"
//               {...register('gender')}
//             >
//               <option value="">Select Gender</option>
//               <option value="male">Male</option>
//               <option value="female">Female</option>
//               <option value="other">Other</option>
//             </select>
//             {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="Phone Number"
//               name="phoneNumber"
//               register={register}
//               errors={errors}
//               placeholder="923000000000"
//               type="tel"
//             />
//           </div>
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="Email"
//               name="email"
//               register={register}
//               errors={errors}
//               placeholder="Enter Email"
//               type="email"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="City"
//               name="city"
//               register={register}
//               errors={errors}
//               placeholder="Enter City Name"
//               type="text"
//             />
//           </div>
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="Address"
//               name="address"
//               register={register}
//               errors={errors}
//               placeholder="Enter Address"
//               type="text"
//             />
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12 col-lg-6">
//             <Inputs
//               label="Medical History"
//               name="medicalHistory"
//               register={register}
//               errors={errors}
//               placeholder="Enter Medical History"
//               type="text"
//             />
//           </div>
//           <div className="col-12 col-lg-6">
//             <label htmlFor="availabilityHour" className='mt-3'>Doctor's Availability Hour</label>
//             <select
//               id="availabilityHour"
//               className="form-control"
//               {...register('availabilityHour')}
//             >
//               <option value="">Select Availability Hour</option>
//               {slotsArray.map((slot, index) => (
//                 <option key={index} value={slot.start + slot.end}>{slot.start} - {slot.end}</option>
//               ))}
//             </select>
//             {errors.availabilityHour && <span className="text-danger">{errors.availabilityHour.message}</span>}
//           </div>
//           <div className="col-12 col-lg-6">
//             <label htmlFor="availabilityHour" className='mt-3'>Select Appointment Date</label>
//             <DatePicker
//               id="selectedDate"
//               selected={selectedDate}
//               onChange={(date) => setSelectedDate(date)}
//               className="form-control"
//               dateFormat="yyyy-MM-dd"
//               minDate={new Date()}
//             />
//           </div>

//         </div>
//         <div className="form-group form-check my-3">
//           <input
//             id="consent"
//             className="form-check-input"
//             type="checkbox"
//             {...register('consent')}
//           />
//           <label className="form-check-label" htmlFor="consent">
//             I consent to the verification of my information and agree to the terms and conditions.
//           </label>
//           {errors.consent && <span className="text-danger">{errors.consent.message}</span>}
//         </div>
//         <button type="submit" className="btn btn-primary">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default PatientForm;
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { patientFormSchema } from "../../constants/PatientFormSchema";
import { readUserProfile } from "../../stor/slices/authentication";
import { useDispatch, useSelector } from "react-redux";

const AppointmentBookingForm = ({ doctor, setLoading, loading }) => {
  const slotsArray = doctor.slots || [];
  const user = useSelector((state) => state.authentication.user.user);
  console.log("🚀 ~ AppointmentBookingForm ~ user:", user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(patientFormSchema),
  });
  const [selectedDate, setSelectedDate] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readUserProfile());
  }, []);

  const onSubmit = async (data) => {
    const drId = doctor._id;
    const drName = `${doctor.firstName} ${doctor.lastName}`;
    const email = user.email;
    if (!email) {
      return toast.error("Plz login to book appointment");
    }
    try {
      await axios.post("http://localhost:7000/patients/post", {
        ...data,
        selectedDate,
        drId,
        drName,
        email,
      });
      const updatedSlots = doctor.slots.filter((slot) => {
        return !(`${slot.start}-${slot.end}` === data.availabilityHour);
      });

      await axios.put(`http://localhost:7000/doctors/${doctor._id}`, {
        slots: updatedSlots,
      });

      toast.success("Patient information submitted successfully");
      reset();
      setSelectedDate(null);
      setLoading(!loading);
    } catch (error) {
      toast.error(error.response?.data?.error || "Failed to book appointment");
      console.error(error);
    }
  };

  return (
    <div className="container mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Dr : {`${doctor.firstName} ${doctor.lastName}`}</p>
        <h2>Personal Information</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                id="firstName"
                className="form-control"
                placeholder="Enter First Name"
                {...register("firstName", {
                  required: "First Name is required",
                })}
              />
              {errors.firstName && (
                <span className="text-danger">{errors.firstName.message}</span>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                id="lastName"
                className="form-control"
                placeholder="Enter Last Name"
                {...register("lastName", { required: "Last Name is required" })}
              />
              {errors.lastName && (
                <span className="text-danger">{errors.lastName.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="age">Age</label>
              <input
                type="number"
                id="age"
                className="form-control"
                placeholder="Enter Age"
                {...register("age", { required: "Age is required" })}
              />
              {errors.age && (
                <span className="text-danger">{errors.age.message}</span>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="patientCNIC">Patient CNIC</label>
              <input
                type="number"
                id="patientCNIC"
                className="form-control"
                placeholder="0000000000000"
                {...register("patientCNIC", { required: "CNIC is required" })}
              />
              {errors.patientCNIC && (
                <span className="text-danger">
                  {errors.patientCNIC.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="gender">Gender</label>
              <select
                id="gender"
                className="form-control"
                {...register("gender", { required: "Gender is required" })}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-danger">{errors.gender.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                type="tel"
                id="phoneNumber"
                className="form-control"
                placeholder="923000000000"
                {...register("phoneNumber", {
                  required: "Phone Number is required",
                })}
              />
              {errors.phoneNumber && (
                <span className="text-danger">
                  {errors.phoneNumber.message}
                </span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="city">City</label>
              <input
                type="text"
                id="city"
                className="form-control"
                placeholder="Enter City Name"
                {...register("city", { required: "City is required" })}
              />
              {errors.city && (
                <span className="text-danger">{errors.city.message}</span>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                id="address"
                className="form-control"
                placeholder="Enter Address"
                {...register("address", { required: "Address is required" })}
              />
              {errors.address && (
                <span className="text-danger">{errors.address.message}</span>
              )}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="medicalHistory">Medical History</label>
              <input
                type="text"
                id="medicalHistory"
                className="form-control"
                placeholder="Enter Medical History"
                {...register("medicalHistory", {
                  required: "Medical History is required",
                })}
              />
              {errors.medicalHistory && (
                <span className="text-danger">
                  {errors.medicalHistory.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="availabilityHour">
                Doctor's Availability Hour
              </label>
              <select
                id="availabilityHour"
                className="form-control"
                {...register("availabilityHour", {
                  required: "Availability Hour is required",
                })}
              >
                <option value="">Select Availability Hour</option>
                {slotsArray.map((slot, index) => (
                  <option key={index} value={`${slot.start}-${slot.end}`}>
                    {slot.start} - {slot.end}
                  </option>
                ))}
              </select>
              {errors.availabilityHour && (
                <span className="text-danger">
                  {errors.availabilityHour.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-group">
              <label htmlFor="selectedDate">Select Appointment Date</label>
              <DatePicker
                id="selectedDate"
                selected={selectedDate}
                onChange={(date) => setSelectedDate(date)}
                className="form-control"
                dateFormat="yyyy-MM-dd"
                minDate={new Date()}
              />
            </div>
          </div>
        </div>
        <div className="form-group form-check my-3">
          <input
            id="consent"
            className="form-check-input"
            type="checkbox"
            {...register("consent", { required: "Consent is required" })}
          />
          <label className="form-check-label" htmlFor="consent">
            I consent to the verification of my information and agree to the
            terms and conditions.
          </label>
          {errors.consent && (
            <span className="text-danger">{errors.consent.message}</span>
          )}
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AppointmentBookingForm;
