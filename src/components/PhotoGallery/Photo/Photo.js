/**
 * @name Photo
 * @description Photo thumbnail
 * @param {number} id,
 * @param {string} title,
 * @param {string} thumbnailUrl
 * @param {function} onClick Callback called when a photo is clicked
 * @author Carlos Echauri
 */

import React from 'react';
import PropTypes from 'prop-types';
import './Photo.css';

const Photo = ({
  id,
  title,
  thumbnailUrl,
  onClick,
}) => (
  <button className="photo" onClick={() => { onClick(id); }}>
    <img src={thumbnailUrl} alt={title} id={`photo${id}`} />
  </button>
);

Photo.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  thumbnailUrl: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Photo;
