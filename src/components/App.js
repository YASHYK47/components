import React from "react";
import unsplash from "../API/unsplash";
import Search from "./Search";
import ImageList from "./ImageList";

class App extends React.Component {
    state={images:[]};
  onSearchSubmit=(term)=>{
    unsplash.get('/search/photos',{
        params:{query:term}
    }).then(response=>{
        this.setState({images:response.data.results});
    });
  };
  render() {
    return (
      <div className="ui container" style={{ marginTop: "10px" }}>
        <Search onSubmit={this.onSearchSubmit} />
        <ImageList images={this.state.images} />
      </div>
    );
  }
}

export default App;
