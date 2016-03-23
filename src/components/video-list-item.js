import React from 'react';

const VideoListItem = ({ video, onVideoSelect }) => {
  return (
    <li className="list-group-item video-list-item" onClick={ () => onVideoSelect(video) }>
    <div className="media">
    <div className="media-left">
    <a href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
    <img
    className="media-object"
    src={video.snippet.thumbnails.default.url}
    alt={video.snippet.title}
    />
    </a>
    </div>
    <div className="media-body">
    <h4 className="media-heading">{video.snippet.title}</h4>
    </div>
    </div>
    </li>
  );
};

export default VideoListItem;
