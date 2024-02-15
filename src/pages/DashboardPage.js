import React from "react";
import ClassList from "../ClassList";
import { classData } from "../classesData";

function DashboardPage() {
  return (
    <div>
      <ClassList classData={classData} />
    </div>
  );
}

export default DashboardPage;
