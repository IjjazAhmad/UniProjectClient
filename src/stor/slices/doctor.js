import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

// Thunk to fetch a single doctor's profile
export const readDrProfile = createAsyncThunk("get/doctor", async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id;
  try {
    const res = await axios.get(`http://localhost:7000/doctors/${id}`);
    return res.data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
});

// Thunk to fetch all doctors
export const fetchDoctors = createAsyncThunk("get/doctors", async () => {
  try {
    const response = await axios.get('http://localhost:7000/doctors/get');
    return response.data;
  } catch (error) {
    toast.error('Doctors Not Found');
    throw error;
  }
});

const initialState = {
  doctor: {},
  doctors: [],
  isLoading: false,
  isError: false,
};

const doctorSlice = createSlice({
  name: "doctor",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(readDrProfile.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(readDrProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctor = action.payload;
    });
    builder.addCase(readDrProfile.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(fetchDoctors.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchDoctors.fulfilled, (state, action) => {
      state.isLoading = false;
      state.doctors = action.payload;
    });
    builder.addCase(fetchDoctors.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectDoctorState = (state) => state.doctor;
export default doctorSlice.reducer;
