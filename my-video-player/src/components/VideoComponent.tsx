import React, { forwardRef } from 'react';
import video from "../assets/demo.mp4"

const VideoComponent = forwardRef<HTMLVideoElement>((props, ref) => (
  <div className="video-container">
    <video ref={ref} controls muted autoPlay className="w-full">
      <source src={video} type="video/mp4"/>
      Your browser does not support the video tag.
    </video>
  </div>
));

export default VideoComponent;
