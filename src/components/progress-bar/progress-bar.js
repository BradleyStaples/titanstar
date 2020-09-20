import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ProgressBar = ({ iconIndex, numberOfIcons, pointsPerTree }) => {

  const barClass = classnames('tiers__bar', {
    'tiers__bar--active': iconIndex < pointsPerTree && pointsPerTree !== 0
  });

  // don't show a progress-bar after the last icon
  if (iconIndex === numberOfIcons) {
    return null;
  }

  return (
    <div className={barClass}></div>
  );
};

ProgressBar.propTypes = {
  iconIndex: PropTypes.number.isRequired,
  numberOfIcons: PropTypes.number.isRequired,
  pointsPerTree: PropTypes.number.isRequired
};

export default ProgressBar;
