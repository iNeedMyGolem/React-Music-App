import React from 'react';

const VideoDetail = ({ video, addVideoToPlaylist }) => {
    if (!video) {
        return <div>Loading...</div>;
    }

    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div>
            <div className="ui segment">
                <div className="ui embed">
                    <iframe title="video player" src={videoSrc} />
                </div>
                <h4 className="ui header">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
                <button className="ui button" onClick={() => addVideoToPlaylist(video)}>Add Video to Playlist</button>
            </div>
        </div>
    )
};

export default VideoDetail;