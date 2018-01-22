/**
 * @name PhotoGallery
 * @description Display a photo gallery with pagination
 * @param photos
 * @author Carlos Echauri
 */

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Photo from './Photo/Photo';
import PhotoDetail from './PhotoDetail/PhotoDetail';
import Pagination from './Pagination/Pagination';

class PhotoGallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      currentDisplayPhoto: null,
    };
  }

  // Change selected photo and display on a dialog
  onSelectPhoto(id) {
    const { photos } = this.props;
    this.setState({
      currentDisplayPhoto: photos.find(photo => photo.id === id),
    });
  }

  // Change to another page of photos
  changePage(numberOfPage) {
    this.setState({
      currentPage: numberOfPage,
    });
  }

  render() {
    const { photos } = this.props;
    const { currentPage, currentDisplayPhoto } = this.state;
    const numberOfItemsToDisplay = 9;

    return (
      <div className="justify-content-center">
        <div className="container col-md-8">
          {/** Pagination */}
          <section>
            <Pagination
              totalItemsLength={photos.length}
              numberOfItemsToDisplay={numberOfItemsToDisplay}
              numberOfPagesToDisplay={10}
              currentPage={currentPage}
              changePage={this.changePage.bind(this)}
            />
          </section>

          {/** Photos */}
          <section className="row">
            {
              photos
                .filter((photo, index) => index < (currentPage * numberOfItemsToDisplay) && index > (currentPage * numberOfItemsToDisplay) - numberOfItemsToDisplay - 1)
                .map(photo => (
                  <div className="col-4" key={photo.id}>
                    <Photo {...photo} onClick={this.onSelectPhoto.bind(this)} />
                  </div>
                ))
            }
          </section>

          {/** PhotoDetail */
            currentDisplayPhoto ? <PhotoDetail {...currentDisplayPhoto} onClose={this.onSelectPhoto.bind(this)} /> : ''
          }

        </div>
      </div>
    );
  }
}

PhotoGallery.propTypes = {
  photos: PropTypes.arrayOf(PropTypes.object),
};

PhotoGallery.defaultProps = {
  photos: [],
};

export default PhotoGallery;
