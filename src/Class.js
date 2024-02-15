import React from "react";
import { schoolData } from "./schoolData";

function Class({ classInfo }) {
  const schoolInfo = schoolData.filter(
    (school) => school.id === classInfo["school-id"]
  );

  return (
    <div>
      {" "}
      <p>School Name: {schoolInfo[0].name}</p>
    </div>
  );
}

export default Class;
