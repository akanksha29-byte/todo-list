import React, { useState } from "react";
import SideBar from "./SideBar";
import TaskSection from "./TaskSection";
const Content = () => {
  return (
    <div className="content-container">
      <SideBar />
      <TaskSection />
    </div>
  );
};

export default Content;
