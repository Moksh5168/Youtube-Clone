import React from "react";

const VideoCard = ({ info }) => {
  // console.log(info, "info");
  if (!info) return null;
  const { statistics, snippet } = info;
  const { thumbnails, title, channelTitle } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics?.viewCount} Views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({ info }) => {
  return (
    <div className="p-1 m-1 border border-red-800">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
