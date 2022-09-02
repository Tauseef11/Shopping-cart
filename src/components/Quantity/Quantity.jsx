import React from 'react';
import PropTypes from 'prop-types';
import { validateInput } from '../../utils/Utils';

export default function Quantity({
  mountainDewQty,
  desperadosQty,
  jackDanielsQty,
  setMountainDewQty,
  setDesperadosQty,
  setJackDanielsQty,
}) {
  
  const handleMountainDewOnClick = () => {
    if (mountainDewQty == 0) {
      setMountainDewQty('');
    }
  };
  const handleMountainDewChange = (event) => {
    setMountainDewQty(event.target.value);
  };

  const handleDesperadosOnClick = () => {
    if (desperadosQty == 0) {
      setDesperadosQty('');
    }
  };
  const handleDesperadosChange = (event) => {
    setDesperadosQty(event.target.value);
  };

  const handleJackDanielsOnClick = () => {
    if (jackDanielsQty == 0) {
      setJackDanielsQty('');
    }
  };
  const handleJackDanielsChange = (event) => {
    setJackDanielsQty(event.target.value);
  };

  return (
    <div>
      <p>
        <input
          id="mdInput"
          style={{ width: '15px' }}
          onChange={handleMountainDewChange}
          onClick={handleMountainDewOnClick}
          value={validateInput(mountainDewQty)}
        />
      </p>
      <p>
        <input
          id="desperadosInput"
          style={{ width: '15px' }}
          onChange={handleDesperadosChange}
          onClick={handleDesperadosOnClick}
          value={desperadosQty}
        ></input>
      </p>
      <p>
        <input
          id="jdInput"
          style={{ width: '15px' }}
          onChange={handleJackDanielsChange}
          onClick={handleJackDanielsOnClick}
          value={jackDanielsQty}
        ></input>
      </p>
    </div>
  );
}

Quantity.propTypes = {
  mountainDewQty: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  desperadosQty: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  jackDanielsQty: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  setMountainDewQty: PropTypes.func,
  setDesperadosQty: PropTypes.func,
  setJackDanielsQty: PropTypes.func,
};
