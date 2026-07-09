import React from "react";
import Style from "./css/Sidebar.module.css";

import {
  House,
  Clapperboard,
  PlaySquare,
  History,
} from "lucide-react";

const Sidebar = ({ collapse }) => {
  return (
    <aside className={`${Style.sidebar} ${collapse ? Style.collapse : ""}`}>

      
      {/* Main Menu */}
      <div className={Style.item}>
      <House />
      {!collapse && <span>Home</span>}
      </div>

      <div className={Style.item}>
        <Clapperboard size={24} />
        <span>Shorts</span>
      </div>

      <div className={Style.item}>
        <PlaySquare size={24} />
        <span>Subscriptions</span>
      </div>

      <div className={Style.item}>
        <History size={24} />
        <span>History</span>
      </div>

    </aside>
  );
};

export default Sidebar;