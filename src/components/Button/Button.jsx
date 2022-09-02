import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

export default function Button({ id, label, handleFunction }) {
  return (
    <button id={id} onClick={handleFunction}>
      {label}
    </button>
  );
}

Button.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  handleFunction: PropTypes.func,
};
