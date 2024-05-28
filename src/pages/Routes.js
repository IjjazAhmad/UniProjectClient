import React from "react";
import Frontend from "./Frontend";
import Authentication from "./Authentication";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Dashboard";
import { Toaster } from "react-hot-toast";
export default function Index() {

  return (
    <>
      <Routes>
        <Route path="/*" element={<Frontend />} />
        <Route path="auth/*" element={<Authentication />} />
        <Route path="dashboard/*" element={<Dashboard />} />
      </Routes>
      <Toaster />
    </>
  );
}
