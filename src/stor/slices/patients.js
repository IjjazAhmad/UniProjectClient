import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import toast from 'react-hot-toast';

// Thunk to fetch all patients
export const fetchPatients = createAsyncThunk('get/patients', async () => {
  try {
    const response = await axios.get('http://localhost:7000/patients/get');
    return response.data;
  } catch (error) {
    toast.error('Patients not found');
    throw error;
  }
});

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
        toast.success("Prescriotion added successfully")
        return response.data.updatedPatient;
      } catch (error) {
        toast.error('Failed to add prescription');
        return rejectWithValue(error.response.data);
      }
    }
  );

const initialState = {
  patients: [],
  isLoading: false,
  isError: false,
};

const patientsSlice = createSlice({
  name: 'patients',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPatients.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchPatients.fulfilled, (state, action) => {
      state.isLoading = false;
      state.patients = action.payload;
    });
    builder.addCase(fetchPatients.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
    builder.addCase(addPrescription.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(addPrescription.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(addPrescription.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectPatientsState = (state) => state.patients;
export default patientsSlice.reducer;
