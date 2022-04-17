import React from "react";
import "./BasicInfo.css";

const BasicInfo = (props) => {
  return (
    <div>
      <div className="personalInfo">
        <h2>Personal Information</h2>
        <p>Name: {props.name}</p>
        <p>Phone: {props.phone} </p>
        <p>Email: {props.email} </p>
      </div>
    </div>
  );
};

export default BasicInfo;
