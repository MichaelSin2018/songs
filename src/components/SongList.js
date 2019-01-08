import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {
  renderList() {
    const { selectSong } = this.props;
    return this.props.songs.map(song => {
      return (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button 
              className="ui button primary"
              onClick={() => selectSong(song)}  
            >
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    })
  }
  render() {
      // this.props === { songs: state.songs } 
      console.log('SontList this.props : ', this.props)
      return <div className="ui devided list">{this.renderList()}</div>;
  }
}

const mapStateToProps = (state) => {
  console.log('SongList mapStateToProps state :', state)
  return { songs: state.songs };
}


// ES2015 {selectSong: selectSong} => {selectSong}
export default connect(mapStateToProps, { selectSong })(SongList);