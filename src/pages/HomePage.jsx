import React from "react";
import video from "../helpers/assets/bgVideo.mp4";

const HomePage = () => {
  return (
    <div className="video-background">
      <video autoPlay muted loop id="video-bg">
        <source src={video} type="video/mp4" />
      </video>
      <div className="content">
        <h1>Вкусная еда начитанется с нас</h1>
      </div>
    </div>
  );
};

export default HomePage;
