import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import toast from 'react-hot-toast';
import Inputs from '../inputs/Inputs';
import { patientFormSchema } from '../../constants/PatientFormSchema';

const initialState = {
  firstName: '',
  lastName: '',
  age: '',
  patientCNIC: '',
  gender: '',
  phoneNumber: '',
  email: '',
  city: '',
  address: '',
  medicalHistory: '',
  availabilityHour:'',
  consent: false,
};

const availabilityHours = [
  '08:00 AM - 09:00 AM',
  '09:00 AM - 10:00 AM',
  '10:00 AM - 11:00 AM',
  '11:00 AM - 12:00 PM',
  '01:00 PM - 02:00 PM',
  '02:00 PM - 03:00 PM',
  '03:00 PM - 04:00 PM',
  '04:00 PM - 05:00 PM',
  '05:00 PM - 06:00 PM',
];

const PatientForm = ({drId, drName}) => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(patientFormSchema),
  });

  const [selectedDate, setSelectedDate] = useState(null);
  const [state, setState] = useState(initialState);

  const onSubmit = async (data) => {
    console.log("🚀 ~ onSubmit ~ data:", data)
    console.log("🚀 ~ onSubmit ~ selectedDate:", typeof(selectedDate))
    try {
      await axios.post('http://localhost:7000/patients/post', { ...data, selectedDate: selectedDate, drId:drId, drName:drName });
      toast.success('Patient information submitted successfully');
      reset();
      setSelectedDate(null);
      setState(initialState);
    } catch (error) {
      toast.error(error.response.data.error);
      console.error(error);
    }
  };

  return (
    <div className="container mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Dr : {drName}</p>
        <h2>Personal Information</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="First Name"
              name="firstName"
              register={register}
              errors={errors}
              placeholder="Enter First Name"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Last Name"
              name="lastName"
              register={register}
              errors={errors}
              placeholder="Enter Last Name"
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Age"
              name="age"
              register={register}
              errors={errors}
              placeholder="Enter Age"
              type="number"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Patient CNIC"
              name="patientCNIC"
              register={register}
              errors={errors}
              placeholder="0000000000000"
              type="number"
            />
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="gender" className='mt-3'>Gender</label>
            <select
              id="gender"
              className="form-control"
              {...register('gender')}
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
            {errors.gender && <span className="text-danger">{errors.gender.message}</span>}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Phone Number"
              name="phoneNumber"
              register={register}
              errors={errors}
              placeholder="923000000000"
              type="tel"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Email"
              name="email"
              register={register}
              errors={errors}
              placeholder="Enter Email"
              type="email"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="City"
              name="city"
              register={register}
              errors={errors}
              placeholder="Enter City Name"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Address"
              name="address"
              register={register}
              errors={errors}
              placeholder="Enter Address"
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Medical History"
              name="medicalHistory"
              register={register}
              errors={errors}
              placeholder="Enter Medical History"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="availabilityHour" className='mt-3'>Doctor's Availability Hour</label>
            <select
              id="availabilityHour"
              className="form-control"
              {...register('availabilityHour')}
            >
              <option value="">Select Availability Hour</option>
              {availabilityHours.map((hour, index) => (
                <option key={index} value={hour}>{hour}</option>
              ))}
            </select>
            {errors.availabilityHour && <span className="text-danger">{errors.availabilityHour.message}</span>}
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="availabilityHour" className='mt-3'>Select Appointment Date</label>
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
        <div className="form-group form-check my-3">
          <input
            id="consent"
            className="form-check-input"
            type="checkbox"
            {...register('consent')}
          />
          <label className="form-check-label" htmlFor="consent">
            I consent to the verification of my information and agree to the terms and conditions.
          </label>
          {errors.consent && <span className="text-danger">{errors.consent.message}</span>}
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default PatientForm;
