import React, { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import SolanaIcon from '../assets/Base.png';
import PolygonIcon from '../assets/Icon.png';
import SolanaIcon2 from '../assets/eth.png';
import m1 from '../assets/m1.png';
import m2 from '../assets/m2.png';
import m3 from '../assets/m3.png';

function Home({activeTab}) {
     const [tooltip, setTooltip] = useState({
        visible: false, x: 0, y: 0, day: "", price: ""
    });
    
    if (activeTab === "Marketplace") {
        const marketplaceNFTs = [
            { id: 1, img: m1, price: "2.5 ETH", name: "cyberPunk #01" },
            { id: 2, img: m2, price: "1.8 ETH", name: "Abstract Art #22" },
            { id: 3, img: m3, price: "3.2 ETH", name: "Neon Glow #11" },
            { id: 4, img: m1, price: "4.0 ETH", name: "Meta Beast #05" }
        ];

        return (
            <motion.div className="market-explorer-container" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                
              
                <div className="market-hero-banner">
                    <div className="hero-text-content">
                        <h1 > Discover, Collect & Sell <br/> 
                            <span >Extraordinary</span> NFTs
                        </h1>
                        <p>
                            The world's first and largest digital marketplace for crypto collectibles and non-fungible tokens (NFTs).
                        </p>
                        <div className="hero-btn-group">
                            <button >Explore Now</button>
                            <button >Create</button>
                        </div>
                    </div>
                    
                </div>
                <div className="market-stats-row">
                    {[
                        { label: 'Total Items', val: '12.5K' },
                        { label: 'Total Owners', val: '1.2K' },
                        { label: 'Floor Price', val: '0.85 ETH' },
                        { label: 'Volume Traded', val: '2.4K ETH' }
                    ].map((item, index) => (
                        <div key={index} className="stat-card-item">
                            <span >{item.label}</span>
                            <h3 >{item.val}</h3>
                        </div>
                    ))}
                </div>

                <div className="market-section-header" s>
                    <h2 >Trending Collections</h2>
                    <span className="market-see-all" >View All</span>
                </div>
                
               <div>
                    {marketplaceNFTs.map((nft) => (
                        <motion.div 
                            key={nft.id} className="nft-card-premium"
                            whileHover={{ scale: 1.05, translateY: -10 }}

                          
                        >
                            <div className="nft-img-wrapper" >
                                <img src={nft.img} alt="nft"  />
                                <div className="live-bid-tag" >Live Bid</div>
                            </div>
                            <div className="nft-details-box">
                                <h4 >{nft.name}</h4>
                                <div className=" nft-price-row">
                                    <div className="price-info">
                                        <span>Current Price</span>
                                        <span >{nft.price}</span>
                                    </div>
                                    <button className="buy-nft-btn" >Buy Now</button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        );
    }

    if (activeTab === "Live bids") {
    const liveBids = [
        { id: 1, img: m1, currentBid: "5.5 ETH", endsIn: "02h 15m", name: "Magma Warrior #01" },
        { id: 2, img: m2, currentBid: "3.2 ETH", endsIn: "00h 45m", name: "Icy Ghost #22" },
        { id: 3, img: m3, currentBid: "8.1 ETH", endsIn: "05h 10m", name: "Golden King #11" },
        { id: 4, img: m2, currentBid: "2.9 ETH", endsIn: "01h 20m", name: "Neon Shadow #05" }
    ];

    return (
        <motion.div className="home" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div >
                <div>
                    <h1>🔥 Live Auctions</h1>
                    <p >Bids are closing soon! Get your favorite NFT before time runs out.</p>
                </div>
                <div>
                    {liveBids.length} Items Live
                </div>
            </div>
            <div >
                {liveBids.map((bid) => (
                    <motion.div 
                        key={bid.id}
                        whileHover={{ y: -10 }}>
                        <div>
                            Ends in: {bid.endsIn}
                        </div>
                        <img src={bid.img} alt="nft" style={{ width: '100%', height: '260px', borderRadius: '22px', objectFit: 'cover' }} />
                        <div >
                            <h3 >{bid.name}</h3>
                            <div >
                                <div>
                                    <span>Current Bid</span>
                                    <span >{bid.currentBid}</span>
                                </div>
                                <button >
                                    Place Bid
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
if (activeTab === "Community") {
    const communityPosts = [
        { id: 1, user: "Alex Crypto", role: "Top Collector", text: "Just grabbed my first CyberPunk! The floor price is rising fast. 🚀", likes: "1.2k" },
        { id: 2, user: "Sarah Art", role: "Digital Artist", text: "Dropping my new 'Neon Dreams' collection this Friday. Stay tuned! ✨", likes: "850" },
        { id: 3, user: "Web3 Ninja", role: "Moderator", text: "Welcome to the community! Don't forget to check the new marketplace filters.", likes: "2.4k" }
    ];

    return (
        <motion.div className="community-main-wrapper" >
            <div className="community-hero-card">
                <div className="hero-inner-content">
                    <h1>Community Hub</h1>
                    <p>Connect with 50k+ collectors and artists worldwide.</p>
                    <button className="discord-join-btn">Join Discord</button>
                </div>
            </div>

            <div className="community-content-layout">
                <div className="discussions-panel">
                    <h3 className="panel-title">Recent Discussions</h3>
                    {communityPosts.map((post) => (
                        <motion.div 
                            key={post.id} 
                            className="community-post-item"
                            whileHover={{ x: 8 }}
                        >
                            <div className="post-user-header">
                                <div className="user-avatar-placeholder"></div>
                                <div className="user-info">
                                    <h5 className="user-name">{post.user}</h5>
                                    <span className="user-role-tag">{post.role}</span>
                                </div>
                            </div>
                            <p className="post-text-body">{post.text}</p>
                            <div className="post-footer-stats">❤️ {post.likes} Likes</div>
                        </motion.div>
                    ))}
                </div>
                <div className="trending-tags-sidebar">
                    <h4 className="sidebar-title">Trending Tags</h4>
                    <div className="tags-list-container">
                        {['#NFTdrop', '#ETH', '#CyberPunk', '#Metaverse'].map((tag) => (
                            <div key={tag} className="clickable-tag-item">
                                {tag}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

if (activeTab === "Update") {
    const updates = [
        { 
            id: 1, title: "Platform Upgrade v2.0", date: "Today", desc: "We've added support for multi-chain bidding and lower gas fees.", tag: "System"
         },
        { 
            id: 2, title: "New Artist Drop: Cyber-Zen", date: "Yesterday", desc: "Exclusive 1/1 editions from Japan's top digital artist are now live.", tag: "Drop"
         },
        { 
            id: 3, title: "Community Contest Winners", date: "2 days ago", desc: "Congratulations to the winners of the #MyFirstNFT contest!", tag: "Community" 
        }
    ];

    return (
        <motion.div className="updates-timeline-container" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            
            <div className="updates-header-box">
                <h1>Latest <span>Updates</span></h1>
                <p>Stay informed about the latest features and drops in the Ragnarok ecosystem.</p>
            </div>

            <div className="timeline-track">
                {updates.map((item) => (
                    <motion.div 
                        key={item.id} 
                        className="timeline-card"
                        whileHover={{ scale: 1.02, x: 5 }}>
                        <div className="timeline-dot"></div>

                        <div className="timeline-card-header">
                            <span className={`update-tag ${item.tag.toLowerCase()}`}>
                                {item.tag}
                            </span>
                            <span className="update-date">{item.date}</span>
                        </div>
                        
                        <h3 className="update-title">{item.title}</h3>
                        <p className="update-description">{item.desc}</p>
                        
                        <button className="read-more-link">
                            Read more →
                        </button>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
}
if (activeTab === "Favourite") {
    const favNFTs = [
        { id: 1, img: m1, name: "Neon Glow #11", owner: "You", price: "3.2 ETH" },
        { id: 2, img: m2, name: "Cyber Punk #01", owner: "You", price: "2.5 ETH" },
        { id: 3, img: m3, name: "Abstract Art #22", owner: "You", price: "1.8 ETH" }
    ];

    return (
        <motion.div className="fav-gallery-wrapper" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}>
            
            <div className="fav-header-section">
                <div className="fav-title-group">
                    <h1>My <span>Favourites</span> ❤️</h1>
                    <p>Your curated collection of extraordinary digital art.</p>
                </div>
                <div className="fav-count-badge">{favNFTs.length} Saved Items</div>
            </div>

            <div className="fav-nft-grid">
                {favNFTs.map((nft) => (
                    <motion.div 
                        key={nft.id}
                        className="fav-nft-card"
                        whileHover={{ scale: 1.05, translateY: -5 }}
                    >
                        <div className="fav-heart-icon">❤️</div>

                        <img src={nft.img} alt="nft" className="fav-card-img" />
                        
                        <div className="fav-card-details">
                            <h4 className="fav-nft-name">{nft.name}</h4>
                            <div className="fav-price-action-row">
                                <span className="fav-price-text">Price: <b>{nft.price}</b></span>
                                <button className="remove-fav-btn">Remove</button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {favNFTs.length === 0 && (
                <div className="empty-fav-state">
                    <h3>No favourites yet. Start exploring the marketplace!</h3>
                </div>
            )}
        </motion.div>
    );
}


    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, ease: "easeOut" }
        }
    };

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const days = ["M", "T", "W", "T", "F", "S", "S"];
        const dayIndex = Math.floor((x / rect.width) * 7);
        setTooltip({
            visible: true,
            x: x,
            y: y,
            day: days[dayIndex] || "M",
            price: `$${600 + Math.floor(Math.random() * 500)}`
        });
    };

    return (
        <motion.div className="home" variants={containerVariants} initial="hidden" animate="visible">
            <motion.div className="card-container" variants={itemVariants}>
                <Card title="Solana" value="20" percent="20.50%" icon={SolanaIcon} />
                <Card title="Polygon" value="15" percent="14.60%" icon={PolygonIcon} />
                <Card title="Solana" value="10" percent="10.60%" icon={SolanaIcon2} />
            </motion.div>
            <div className="bottom-content" style={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
                <div className="left-content-area" style={{ flex: 2.5 }}>
                    <motion.div className="Categories-section" variants={itemVariants} style={{ marginBottom: '20px' }}>
                        <div className="section-header">
                            <h3>Top Categories</h3>
                            <span className="see-all">See All</span>
                        </div>
                        <div className="category-list">
                            <div className="category-item">
                                <div className="cat-info">
                                    <h4>Best selling</h4>
                                    <p>10 Artist</p>
                                    </div>
                                    </div>
                            <div className="category-item">
                                <div className="cat-info">
                                    <h4>Most Favourite</h4>
                                    <p>50 NFTs</p>
                                    </div>
                                    </div>
                            <div className="category-item">
                                <div className="cat-info">
                                    <h4>Crypto</h4>
                                    <p>100 NFTs</p>
                                    </div>
                                    </div>
                            <div className="category-item">
                                <div className="cat-info">
                                    <h4>Games</h4>
                                    <p>100 NFTs</p>
                                    </div>
                                    </div>
                        </div>
                    </motion.div>

                    <motion.div className="transaction-section" variants={itemVariants}>
                        <div className="section-header">
                            <h3>NFTs Transaction</h3>
                            </div>
                        <div className="chart-wrapper">
                            <div className="y-axis">
                                <span>2,000</span>
                                <span>1,500</span>
                                <span>1,000</span>
                                <span>500</span>
                                </div>
                            <div className="line-chart-box" onMouseMove={handleMouseMove} onMouseLeave={() => setTooltip({ ...tooltip, visible: false })}>
                                {tooltip.visible && (
                                    <>
                                        <div className="vertical-scan-line" style={{ left: `${tooltip.x}px` }}></div>
                                        <div className="graph-tooltip" style={{ left: `${tooltip.x}px`, top: `${tooltip.y - 40}px` }}>
                                            <span className="tooltip-price">{tooltip.price}</span>
                                        </div>
                                    </>
                                )}
                                <svg viewBox="0 0 500 150" className="chart-svg">
                                    <motion.path 
                                        d="M0,110 C60,110 90,140 140,130 C190,120 230,50 280,80 C330,110 370,140 420,100 C470,60 500,90 500,90" 
                                        fill="none" stroke="#00f2ff" strokeWidth="3"
                                        initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5 }}
                                    />
                                </svg>
                                <div className="x-axis">
                                    <span>M</span>
                                    <span>T</span>
                                    <span>W</span>
                                    <span>T</span>
                                    <span>F</span>
                                    <span>S</span>
                                    <span>S</span>
                                    </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    );
}

export default Home;