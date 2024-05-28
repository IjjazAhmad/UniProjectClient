import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// Thunk to add a prescription
export const addPrescription = createAsyncThunk(
  'prescriptions/add',
  async ({ patientId, drName, presDate, prescription }, { rejectWithValue }) => {
    const presc = {
      prescriptionData: {
        drName,
        presDate,
        prescription,
      },
    };
    try {
      const response = await axios.put(`http://localhost:7000/patients/${patientId}`, presc);
      return response.data;
    } catch (error) {
      toast.error('Failed to add prescription');
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  prescriptions: [],
  isLoading: false,
  isError: false,
};

const prescriptionsSlice = createSlice({
  name: 'prescription',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPrescription.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(addPrescription.fulfilled, (state, action) => {
      state.isLoading = false;
      state.prescriptions.push(action.payload);
    });
    builder.addCase(addPrescription.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectPrescriptionsState = (state) => state.prescriptions;
export default prescriptionsSlice.reducer;
