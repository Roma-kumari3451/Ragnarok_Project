import React from "react";
import "../App.css";

function Navbar({onMenuClick}){
    
    return(
        <div className="navbar">
            <div className="nav-left">
                <h1>My Collection</h1>
                <p>All your nfts is here</p>
            </div>
            <div className="nav-right">
                <div className="search-container">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </div>
                <input type="text" placeholder="search"/>
                
            </div>
            
            <div className="menu-icon" onClick={onMenuClick}>
               
          
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    );

}
export default Navbar;