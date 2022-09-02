import React from 'react';
import PropTypes from 'prop-types';
import formatCurrency from '../../utils/Utils';

export default function Price({ mountainDew, desperados, jackDaniels }) {
  return (
    <div style={{ color: 'orange', fontWeight: 'bold' }}>
      <p>{formatCurrency(mountainDew)}</p>
      <p>{formatCurrency(desperados)}</p>
      <p>{formatCurrency(jackDaniels)}</p>
    </div>
  );
}

Price.propTypes = {
  mountainDew: PropTypes.number,
  desperados: PropTypes.number,
  jackDaniels: PropTypes.number,
};
