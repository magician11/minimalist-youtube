import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import youtubeSearch from 'youtube-api-search';
import _ from 'lodash';
import SearchBar from './components/search-bar';
import VideoList from './components/video-list';
import VideoDetail from './components/video-detail';
const YOUTUBE_API_KEY = 'AIzaSyDcz4-f5qmMei8XSTMMPySnLQ_mQ8PdFbI';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('');
  }

  videoSearch(term) {
    youtubeSearch({ key: YOUTUBE_API_KEY, term }, (videos) => {
      this.setState({
        videos,
        selectedVideo: videos[0],
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term); }, 300);
    return (
      <div className="row">
        <SearchBar onSearchTermChange={ videoSearch } />
        <VideoDetail video={ this.state.selectedVideo } />
        <VideoList
          videos={this.state.videos}
          onVideoSelect={ (selectedVideo) => { this.setState({ selectedVideo }); } }
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('.container'));
