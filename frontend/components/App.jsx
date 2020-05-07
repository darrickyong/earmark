import React from "react";
import NavBarContainer from "../components/nav_bar/nav_bar_container";
import LeftSidebar from "../components/left_sidebar/left_sidebar";
import RightSidebarContainer from "../components/right_sidebar/right_sidebar_container";
import CenterColumn from "../components/center_column/center_column";
import Modal from "../components/modal/modal";


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <div className="main-component">
      <LeftSidebar />
      <CenterColumn />
      <RightSidebarContainer />
    </div>
  </div>
)

export default App;