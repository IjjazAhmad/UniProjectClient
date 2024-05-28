import {combineReducers, configureStore} from '@reduxjs/toolkit';
import authentication from './slices/authentication';
import doctor from './slices/doctor';
import patients from './slices/patients';
import prescription from './slices/prescription';

const rootReducer = combineReducers({
    authentication: authentication,
    doctor: doctor,
    patients: patients,
    prescription: prescription,
});

export const Store = configureStore({
  reducer: rootReducer,
});
