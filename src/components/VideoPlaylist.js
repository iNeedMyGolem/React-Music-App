import React from 'react';
import VideoItem from './VideoItem';

const VideoPlaylist = ({ playlistVideos, onVideoSelect, removeVideoFromPlaylist }) => {
    if(playlistVideos.length == 0) {
        return (
            <div className="ui segment">
            <h4>My Playlist</h4>
            <p>Add songs to your playlist.</p>
        </div>
        )
    }

    const renderedPlaylist = playlistVideos.map((video) => {
        return (
            <>
                <VideoItem 
                    key={video.id.videoId}
                    video={video}
                    onVideoSelect={onVideoSelect}
                />
                <button onClick={() => removeVideoFromPlaylist(video)} style={{ marginBlock: '10px' }} className="ui button">Remove Video</button>
            </>
        )

    });

    return (
        <div className="ui segment">
            <h4>My Playlist</h4>
            <div className="ui relaxed divided list">{renderedPlaylist}</div>
        </div>
    )
}

export default VideoPlaylist;