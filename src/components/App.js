import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import VideoPlaylist from './VideoPlaylist';

class App extends React.Component {
    state = { 
        videos: [],
        selectedVideo: null,
        playlistVideos: [],
    };

    componentDidMount() {
        this.onTermSubmit('');
        
    };
    
    onTermSubmit = async searchWord => {
        const response = await youtube.get('/search', {
            params: {
                q: searchWord,
            }
        });

        this.setState({ 
            videos: response.data.items,
            selectedVideo: response.data.items[0],
         });

        console.log(this.state.playlistVideos);
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    addVideoToPlaylist = (video) => {
            this.setState({ playlistVideos: [...this.state.playlistVideos, video] });
    }

    render() {
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit}/>
                <div className="ui grid">
                    <div className="ui row">
                        <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo} addVideoToPlaylist={this.addVideoToPlaylist} />
                        </div>
                        <div className="five wide column">
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                        </div>
                    </div>
                </div>
                <VideoPlaylist playlistVideos={this.state.playlistVideos} onVideoSelect={this.onVideoSelect} />
            </div>
        );
    }
}

export default App;