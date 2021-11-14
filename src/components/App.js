import React from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  componentDidMount = () => {
    this.onSearchFormSubmit("dog");
  };

  onSearchFormSubmit = async (searchTerm) => {
    //console.log(searchTerm);
    const results = await youtube.get("search", {
      params: {
        q: searchTerm,
      },
    });

    const { items } = results?.data;
    this.setState({ videos: items, selectedVideo: items[0] });
  };

  onVideoSelected = (video) => {
    this.setState({ selectedVideo: video });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <SearchBar onSearchSubmit={this.onSearchFormSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              <VideoList
                videos={this.state.videos}
                onVideoSelected={this.onVideoSelected}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
