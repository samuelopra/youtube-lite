import React from "react";

class SearchBar extends React.Component {
  state = { searchTerm: "what the fuck" };

  onSearchInputChange = (e) => {
    this.setState({ searchTerm: e.target.value });
  };

  onSearchFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSearchSubmit(this.state.searchTerm);
  };
  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onSearchFormSubmit} className="ui form">
          <div className="field">
            <label>Shitty video player</label>
            <input
              value={this.state.searchTerm}
              type="text"
              onChange={this.onSearchInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
