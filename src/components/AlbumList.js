import React, {Component} from 'react';
import axios from 'axios'
import {View, Text} from 'react-native';

class AlbumList extends Component {
    state = {
        albums: []
    }

    componentWillMount(){
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        .then(response => this.setState({albums: response.data}))
    }

    renderAlbums(){
        return this.state.albums.map((album) => <Text>{album.title}</Text>);
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