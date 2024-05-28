import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";
export const signInUser = createAsyncThunk("signIn/signIn", async (state) => {
  try {
    const res = await axios.post("http://localhost:7000/auth/login", state);
    console.log("🚀 ~ signInUser ~ res:", res)
    const email = res.data.user.email;
    const role = res.data.user.role;
    const id = res.data.user._id;
    const user = { email, role ,id};
    console.log("🚀 ~ signInUser ~ id:", id)
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("User successfuly Loggedin!!");
    return user;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
});
export const readUserProfile = createAsyncThunk("get/user", async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const id = user.id
  console.log("🚀 ~ readUserProfile ~ id:", id)
  try {
    const res = await axios.get(`http://localhost:7000/auth/${id}`,);
    return res.data;
  } catch (error) {
    toast.error(error.message);
    throw error;
  }
});

export const updateUser = createAsyncThunk("update/user", async (payloadUser) => {
  
  const id = payloadUser.id;
  const payload={
    role:payloadUser.role
  }

  try {
    const res = await axios.put(`http://localhost:7000/auth/${id}`, payload);
    toast.success("update user")
    return res.data.user;

  } catch (error) {
    console.log("🚀 ~ updateUser ~ error:", error)
    throw error;
  }
});


export const getLocalUser =()=>{
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) {
    return user
  } else {
    return null;
  }
}
const initialState = {
  isAuth: false,
  user: {
    email: "",
    role: "",
    id: ""
  },
  isLoading: true,
  isError: false,
};

const authentication = createSlice({
  name: "authentication",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = {};
    },
    setisLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signInUser.pending, (state) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(signInUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
      state.isAuth = true;
    });
    builder.addCase(readUserProfile.fulfilled, (state, action) => {
      state.isLoading = false;
      state.user = action.payload;
    });
    builder.addCase(signInUser.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });
  },
});

export const selectAuthState = (state) => state.authentication;
export const { logout, login, setisLoading } = authentication.actions;
export default authentication.reducer;
