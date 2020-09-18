import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ProgressBar = ({ rank, maxRank, pointsPerTree }) => {

  const barClass = classnames('tiers__bar', {
    'tiers__bar--active': rank < pointsPerTree && pointsPerTree !== 0
  });

  // don't show a progress-bar after the last icon
  if (rank === maxRank) {
    return null;
  }

  return (
    <div className={barClass}></div>
  );
};

ProgressBar.propTypes = {
  rank: PropTypes.number.isRequired,
  maxRank: PropTypes.number.isRequired,
  pointsPerTree: PropTypes.number.isRequired
};

export default ProgressBar;
