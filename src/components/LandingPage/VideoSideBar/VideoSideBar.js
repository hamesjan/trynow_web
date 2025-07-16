import React from 'react';
import classes from "./VideoSideBar.module.css";

const videos = [
    { title: "Bard of Blood 2", user: "Meg Griffin", views: "605K", live: true },
    { title: "God Of War - Charity Stream", user: "Kyle Jamison", views: "350K", live: true },
    { title: "GTA 5 Atlanta City", user: "Megan Fox", views: "3.5M", live: true },
    { title: "Amazing Spiderman 2", user: "Richard Kettelberg", views: "1.5M", live: false },
    { title: "Live Multiplayer Action", user: "Adam West", views: "5M", live: false },
    { title: "BGMI World Event", user: "Chikorita Gaming", views: "500K", live: true },
    { title: "PUBG Global Finals", user: "John Wick", views: "2.1M", live: true },
];

const VideoSidebar = () => {
    return (
        <div className={classes.sidebar}>
            <div className={classes.header}>
                <h3>Recent Clips</h3>
                <button className={classes.viewAll}>View All</button>
            </div>
            <div className={classes.videoList}>
                {videos.map((vid, idx) => (
                    <div key={idx} className={classes.videoItem}>
                        <div className={classes.thumbnail}></div>
                        <div className={classes.info}>
                            <h4>{vid.title}</h4>
                            <p>{vid.user}</p>
                            <span>{vid.views} Views {vid.live && <span className={classes.live}>Recent</span>}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default VideoSidebar;
