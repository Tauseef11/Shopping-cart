import React from 'react';
import PropTypes from 'prop-types';

export default function Items({ forInputArray, itemArray }) {
  const itemsArray = [];
  itemArray.forEach((item) => {
    const input = forInputArray[itemArray.indexOf(item)];
    itemsArray.push(
      <p key={`label-${input}`}>
        <label htmlFor={input}>{item}</label>
      </p>
    );
  });
  return <div>{itemsArray}</div>;
}

Items.propTypes = {
  forInputArray: PropTypes.array,
  itemArray: PropTypes.array,
};
