import React from 'react';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div className="alert alert-info" role="alert">Loading...</div>;
  }

  const youtubeEmbedUrl = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
    <iframe className="embed-responsive-item" src={youtubeEmbedUrl}></iframe>
    </div>
    <div className="panel panel-default">
      <div className="panel-heading"><h3 className="panel-title">{ video.snippet.title }</h3></div>
      <div className="panel-body">
        { video.snippet.description }
      </div>
    </div>
    </div>
  );
};

export default VideoDetail;
