import React from "react";
import BasicInfo from "../BasicInfo/BasicInfo";
import Interest from "../Interest/Interest";
import Skill from "../Skill/Skill";

const Biodata = () => {
  return (
    <div>
      <div className="rakib_data">
        <h1 style={{ textAlign: "center" }}>Bio Data of Rohit Shetty</h1>
        <hr style={{ width: "25%" }} />
        <BasicInfo
          name="Rohit Shetty"
          phone="217799832"
          email="imArk@protonmail.com"
        />
        <Skill skills={["HTML 5", "CSS 3", "Javascript", "React"]} />
        <Interest
          interests={["Crypto", "WEB 3.0", "NFT", "AI"]}
          referenced="Mahie Asif"
        />
      </div>
      <div className="rhot_data" style={{ marginTop: "50px" }}>
        <h1 style={{ textAlign: "center" }}>Bio Data of Mohit Roy</h1>
        <hr style={{ width: "25%" }} />
        <BasicInfo
          name="Mohit Roy"
          phone="177998322"
          email="immohit@protonmail.com"
        />
        <Skill
          skills={["HTML 5", "CSS 3", "Javascript", "Angular", "Node JS"]}
        />
        <Interest
          interests={["WEB 3.0", "NFT", "Tradding", "C++"]}
          referenced="Saidur Rahman Setu"
        />
      </div>
    </div>
  );
};

export default Biodata;
