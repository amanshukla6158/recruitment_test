import React, { useEffect } from "react";
import Class from "./Class";

function ClassList({ classData }) {
  return (
    <div>
      {classData?.map((classInfo) => {
        return <Class key={classInfo.id} classInfo={classInfo} />;
      })}
    </div>
  );
}

export default ClassList;
