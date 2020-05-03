import React from "react";
import NavBarContainer from "../components/nav_bar/nav_bar_container";
import LeftSidebar from "../components/left_sidebar/left_sidebar";
import RightSidebar from "../components/right_sidebar/right_sidebar";
import CenterColumn from "../components/center_column/center_column";
import Modal from "../components/modal/modal";


const App = () => (
  <div>
    <Modal />
    <NavBarContainer />
    <div className="main-component">
      <LeftSidebar />
      <CenterColumn />
      <RightSidebar />
    </div>
  </div>
)

export default App;