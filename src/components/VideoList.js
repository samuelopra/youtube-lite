import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, onVideoSelected }) => {
  console.log(videos);
  const renderedVideos = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        video={video}
        onVideoSelected={onVideoSelected}
      />
    );
  });
  return <div className="ui relaxed divided list">{renderedVideos}</div>;
};

export default VideoList;
