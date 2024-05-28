import React from "react";

export default function BottomFooter() {
  let date = new Date().getFullYear();
  return (
    <div className="container">
      <div className="row footer border-top">
        <div className="col">
          <p>
            Copyright © {date} Health Companion & E-Partner for Public. All rights
            reserved.
          </p>
        </div>
        <div className="col ">
          <p className="float-end">Privacy Policy | Terms of Use</p>
        </div>
      </div>
    </div>
  );
}
