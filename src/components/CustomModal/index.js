/**
 *
 * CustomModal
 *
 */

import React from 'react';
import Modal from '@mui/material/Modal';
import PropTypes from 'prop-types';

function CustomModal({ open, handleClose, children }) {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      disableEnforceFocus
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description">
      {children}
    </Modal>
  );
}

CustomModal.propTypes = {
  open: PropTypes.bool,
  handleClose: PropTypes.func,
  children: PropTypes.object,
};

export default CustomModal;
