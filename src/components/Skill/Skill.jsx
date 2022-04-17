import React from "react";

const Skill = (props) => {
  return (
    <div style={{ width: "30vw", marginLeft: "9%" }}>
      <h2>Skills</h2>
      <ul>
        {props.skills.map((skill) => (
          <li>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default Skill;
