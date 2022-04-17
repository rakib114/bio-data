import React from "react";

const Interest = (props) => {
  return (
    <div
      style={{
        width: "30vw",
        marginLeft: "9%",
        borderBottom: "2px solid gray",
        paddingBottom: "5px",
      }}
    >
      <h2>Interest</h2>
      <ul>
        {props.interests.map((interest) => (
          <li>{interest}</li>
        ))}
      </ul>
      <br />
      <p>
        <dfn>Referenced By:</dfn> {props.referenced}
      </p>
    </div>
  );
};

export default Interest;
