import React, { useContext } from "react";
import { TaskContext } from "../context";

const SideBar = () => {
  const { selectedTab, setSelectedTab } = useContext(TaskContext);

  return (
    <div className="sidebar-container">
      <div
        className={selectedTab === "INBOX" ? "active" : ""}
        onClick={() => setSelectedTab("INBOX")}
      >
        Inbox
      </div>
      <div
        className={selectedTab === "TODAY" ? "active" : ""}
        onClick={() => setSelectedTab("TODAY")}
      >
        Today
      </div>
      <div
        className={selectedTab === "7_DAY" ? "active" : ""}
        onClick={() => setSelectedTab("7_DAY")}
      >
        Next 7 days
      </div>
    </div>
  );
};

export default SideBar;
