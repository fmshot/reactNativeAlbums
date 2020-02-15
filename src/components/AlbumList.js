// Import libraries for creating a component
import React, { Component } from 'react'; 
// import ReactNative from 'react-native';
import { ScrollView } from 'react-native';
// import axios from 'axios';


import AlbumDetail from './AlbumDetail';


// Make a component 
class AlbumList extends Component {
    state = { albums: [] };

    UNSAFE_componentWillMount() {
        // // axios.get('https://rallycoding.herokuapp.com/api/music_albums')
        // .then(response => this.setState({ albums: response.data }));

        fetch("https://rallycoding.herokuapp.com/api/music_albums")
.then(response => response.json())
.then((responseJson)=> {
  this.setState({
   loading: false,
   albums: responseJson
  })
})
.catch(error=>console.log(error)) //to catch the errors if any
    }

    renderAlbums() {
    return this.state.albums.map( album => 
    <AlbumDetail key={album.title} record={ album } />);
    }

    render() {
        console.log(this.state);
        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    
    }
}

// Make the component avaiilable to other parts of the app
export default AlbumList;