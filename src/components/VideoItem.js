import React from "react";
import "./VideoItem.css";

const VideoItem = ({ video, onVideoSelected }) => {
  const { description, thumbnails, title } = video.snippet;

  return (
    <div onClick={() => onVideoSelected(video)} className="video-item item">
      <img className="ui image" alt={title} src={thumbnails.medium.url} />
      <div className="content">
        <div className="header">{title}</div>
      </div>
    </div>
  );
};

export default VideoItem;
