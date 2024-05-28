import React from "react";

export default function Loader() {
  return (
    <button
      className="btn btn-primary text-white rounded-pill button1 w-100"
      type="submit"
      disabled
    >
      <span className="spinner-border spinner-border-sm"></span>
      Loading...
    </button>
  );
}
