import React, { useEffect, useRef } from "react";
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';
import pimg from '../assets/pimg.png';

function Message() {
    const users = [
        { id: 1, name: "Nurul Amin", msg: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet", img: m1 },
        { id: 2, name: "Ariful Islam", msg: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.", img: m2 },
        { id: 3, name: "Tamim Ikbal", msg: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet", img: m3 }
    ];

    const auctionRef = useRef(null);

    useEffect(() => {
  const currentElement = auctionRef.current; // 👈 capture once

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("show");
        } else {
          entry.target.classList.remove("show");
        }
      });
    },
    { threshold: 0.1 }
  );

  if (currentElement) {
    observer.observe(currentElement);
  }

  return () => {
    if (currentElement) {
      observer.unobserve(currentElement); // 👈 use captured value
    }
  };
}, []);

    return (
        <div className="message-panel">
            <div className="profile-header">
                <img src={pimg} alt="profile" className="header-avatar" />
                <div className="header-info">
                    <h4>Md. Sarwar Jahan</h4>
                    <p>NFTs Collector Pro</p>
                </div>
                <div className="notification-icon">
                    <i className="fa-regular fa-bell"></i>
                </div>
            </div>

            <h3>Message</h3>
            {users.map((user) => (
                <div key={user.id} className="user-chat">
                    <img src={user.img} alt={user.name} className="user-avatar" />
                    <div className="chatInfo">
                        <h4>{user.name}</h4>
                        <p>{user.msg}</p>
                    </div>
                </div>
            ))}

            <button className="view-all-btn">view all message</button>

           
            <div className="live-auction-card" ref={auctionRef}>
                <h4 className="auction-title">live Auction</h4>
                <div className="auction-item">
                    <button className="nft-tag-button" >Ape ex Alien NFT</button>
                    
                    <p className="auction-description">Rare Ape and Alien concept in single place.</p>
                    <div className="bidding-footer">
                    <div className="bidding-profiles">
                        <img src={m1} className="mini-profile" alt="u1"/>
                        <img src={m2} className="mini-profile" alt="u2"/>
                        <img src={m3} className="mini-profile" alt="u3"/>
                    </div>
                    <div className="bidding-section">
                        <span className="bid-label">Bidding</span>
                        <span className="bid-price">$5000</span>
                    </div>
                    </div>
                    <div className="auction-progress-container">
                        <div className="progress-bar-fill"></div>
                    </div>
                    <div className="bottom-seprator-line"></div>
                </div>
            </div>
        </div>
    );
}

export default Message;