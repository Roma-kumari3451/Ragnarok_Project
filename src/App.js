import React,{act, useState} from "react";

import {Routes , Route, BrowserRouter} from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/SidebarTemp";
import Home from "./pages/Home";
import Message from "./components/Message";

import "./App.css";
function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const[activeTab,setActiveTab]=useState("Dashboard");
  return (
    <BrowserRouter>
      <div className="main-section">
        <Sidebar isOpen={showSidebar} 
        activeTab={activeTab}
        setActiveTab={setActiveTab}/>
        <div className="app-container">
          <Navbar onMenuClick={() => setShowSidebar(!showSidebar)} />
            <div className="home-area">
            <div className="dashboard-content">
              <Routes>
                <Route path="/" element={<Home activeTab={activeTab}/>} />
              </Routes>
            </div>
          </div>
        </div>
        {activeTab==="Dashboard"&&(
        <div className="message-area">
              <Message />
            </div>
        )};


      </div>
    </BrowserRouter>
  );
}
export default App;
