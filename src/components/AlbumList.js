import React, {Component} from 'react';
import axios from 'axios'
import {View} from 'react-native';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}))
    }

    renderAlbums(){
        return this.state.albums.map((album, i) => 
            <AlbumDetail key={album.title} album={album}/>
        );
    }

    render(){
        console.log(this.state);
        return (
            <View>
                {this.renderAlbums()}
            </View>
        );
    }
}

export default AlbumList;