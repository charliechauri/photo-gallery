/**
 * @name PhotoDetail
 * @description Modal dialog to display a photo in a higher resolution
 * @param {number} id
 * @param {string} title
 * @param {string} url
 * @param {function} onClose
 * @author Carlos Echauri
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button } from 'react-bootstrap';

const PhotoDetail = ({
  id, title, url, onClose,
}) => (
  <div>
    <Modal.Dialog id={id}>
      <Modal.Header>
        <Modal.Title>Title: {title}</Modal.Title>
      </Modal.Header>

      <Modal.Body style={{ textAlign: 'center' }}>
        <img src={url} alt={title} style={{ width: '90%' }} />
      </Modal.Body>

      <Modal.Footer>
        <Button onClick={() => { onClose(null); }}>Close</Button>
      </Modal.Footer>
    </Modal.Dialog>
  </div>
);

PhotoDetail.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default PhotoDetail;
