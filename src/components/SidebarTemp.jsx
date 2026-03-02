import React from "react";
import "../App.css";
function Sidebar({isOpen,activeTab,setActiveTab}){
    
    
    return(
        <div className={`sidebar ${isOpen ? "active":""}`}>
            <h2>Ragnarok</h2>
            <ul>
                <li className={activeTab==="Dashboard"? "active":""} onClick={()=>setActiveTab("Dashboard")}>Dashboard</li>
                <li className={activeTab==="Favourite"? "active":""} onClick={()=>setActiveTab("Favourite")}>Favourite</li>
                <li className={activeTab==="Live bids"? "active":""} onClick={()=>setActiveTab("Live bids")}>Live bids</li>
                <li className={activeTab==="Marketplace"? "active":""} onClick={()=>setActiveTab("Marketplace")}>Marketplace</li>
                <li className={activeTab==="Update"? "active":""} onClick={()=>setActiveTab("Update")}>Update</li>
                <li className={activeTab==="Community"? "active":""} onClick={()=>setActiveTab("Community")}>Community</li>
                <li className={activeTab==="Settings"? "active":""} onClick={()=>setActiveTab("Settings")}>Settings</li>
                <li className={activeTab==="Logout"? "active":""} onClick={()=>setActiveTab("logout")}>Logout</li>
            </ul>
        </div>
    );
}
export default Sidebar;