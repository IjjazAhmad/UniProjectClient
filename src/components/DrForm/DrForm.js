import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Inputs from "../inputs/Inputs";
import toast from "react-hot-toast";
import axios from "axios";
import { doctorFormSchema } from "../../constants/DoctorFromSchema";
import { readUserProfile } from "../../stor/slices/authentication";
import { useDispatch, useSelector } from "react-redux";
import { ImageUpload } from "../imageUpload/ImageUpload";

const specialties = [
  "Neurologist",
  "Dermatologist",
  "Cardiologist",
  "Pediatrician",
  "Orthopedic Surgeon",
  "General Practitioner",
  "Psychiatrist",
  "Ophthalmologist",
  "Gynecologist",
  "Anesthesiologist",
];

const DrForm = () => {
  const [url, setUrl] = useState();
  const user = useSelector((state) => state.authentication.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(doctorFormSchema),
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(readUserProfile());
  }, [dispatch]);
  const handleUploadSuccess = (url) => {
    setUrl(url); // Update state with the new URL
  };
  console.log("🚀 ~ onSubmit ~ url:", url)
  const onSubmit = async (data) => {
    if(!url){
      return toast.error("upload image again")
    }
    try {
      const payload = {
        ...data,
        email: user.user.email,
        userId: user.user._id,
        profilePicture: url,
        role: "user",
      };
      console.log("🚀 ~ onSubmit ~ payload:", payload);
      const response = await axios.post(
        "http://localhost:7000/doctors/post",
        payload
      );
      toast.success("Doctor Application Send successfully");
      reset();
    } catch (error) {
      toast.error(error.response.data.message);
      console.error(error);
    }
  };

  return (
    <div className="container mb-5">
      <form onSubmit={handleSubmit(onSubmit)}>
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
              label="Date of Birth"
              name="dateOfBirth"
              register={register}
              errors={errors}
              placeholder="Enter Date of Birth"
              type="date"
            />
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              className="form-control"
              {...register("gender")}
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
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Phone Number"
              name="phoneNumber"
              register={register}
              errors={errors}
              placeholder="Enter Phone Number"
              type="tel"
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
          <div className="col-12 col-lg-6">
            <ImageUpload onUploadSuccess={handleUploadSuccess} />
          </div>
        </div>
        <h2>Professional Information</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Medical License Number"
              name="medicalLicenseNumber"
              register={register}
              errors={errors}
              placeholder="Enter Medical License Number"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <label htmlFor="specialty">Specialty</label>
            <select
              id="specialty"
              className="form-control"
              {...register("specialty")}
            >
              <option value="">Select Specialty</option>
              {specialties.map((specialty, index) => (
                <option key={index} value={specialty}>
                  {specialty}
                </option>
              ))}
            </select>
            {errors.specialty && (
              <span className="text-danger">{errors.specialty.message}</span>
            )}
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Years of Experience"
              name="yearsOfExperience"
              register={register}
              errors={errors}
              placeholder="Enter Years of Experience"
              type="number"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Current Practice Location"
              name="currentPracticeLocation"
              register={register}
              errors={errors}
              placeholder="Enter Current Practice Location"
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Professional Affiliations"
              name="professionalAffiliations"
              register={register}
              errors={errors}
              placeholder="Enter Professional Affiliations"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Languages Spoken"
              name="languagesSpoken"
              register={register}
              errors={errors}
              placeholder="Enter Languages Spoken"
              type="text"
            />
          </div>
        </div>
        <h2>Education and Training</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Medical School Attended"
              name="medicalSchool"
              register={register}
              errors={errors}
              placeholder="Enter Medical School"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Graduation Year"
              name="graduationYear"
              register={register}
              errors={errors}
              placeholder="Enter Graduation Year"
              type="number"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Residency Programs"
              name="residencyPrograms"
              register={register}
              errors={errors}
              placeholder="Enter Residency Programs"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Fellowships"
              name="fellowships"
              register={register}
              errors={errors}
              placeholder="Enter Fellowships"
              type="text"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Certifications and Board Certifications"
              name="certifications"
              register={register}
              errors={errors}
              placeholder="Enter Certifications"
              type="text"
            />
          </div>
        </div>
        <h2>Employment History</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Previous Employment"
              name="previousEmployment"
              register={register}
              errors={errors}
              placeholder="Enter Previous Employment"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Current Employment"
              name="currentEmployment"
              register={register}
              errors={errors}
              placeholder="Enter Current Employment"
              type="text"
            />
          </div>
        </div>
        <h2>References</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Professional References"
              name="references"
              register={register}
              errors={errors}
              placeholder="Enter Professional References"
              type="text"
            />
          </div>
        </div>
        <h2>Additional Information</h2>
        <div className="row">
          <div className="col-12 col-lg-6">
            <Inputs
              label="Publications and Research"
              name="publications"
              register={register}
              errors={errors}
              placeholder="Enter Publications"
              type="text"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="Statement of Purpose"
              name="statementOfPurpose"
              register={register}
              errors={errors}
              placeholder="Enter Statement of Purpose"
              type="textarea"
            />
          </div>
          <div className="col-12 col-lg-6">
            <Inputs
              label="CheckUp Fee"
              name="checkUpFee"
              register={register}
              errors={errors}
              placeholder="Enter checkUpFee "
              type="number"
            />
          </div>
        </div>
        <div className="form-group form-check">
          <input
            id="consent"
            className="form-check-input"
            type="checkbox"
            {...register("consent")}
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
          Register
        </button>
      </form>
    </div>
  );
};

export default DrForm;
