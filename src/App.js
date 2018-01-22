import React, { Component } from 'react';
import axios from 'axios';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { photosDb: [] };

    axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then((response) => {
        this.setState({
          photosDb: response.data,
        });
      });
  }

  render() {
    /* const filteredPhotos = this.state.photosDb.filter(photo => photo.albumId === 1); */
    const filteredPhotos = this.state.photosDb;

    return (
      <section>

        <header>
          <h1 className="text-center">Photo Gallery</h1>
        </header>

        <PhotoGallery photos={filteredPhotos} />
      </section>
    );
  }
}

export default App;
