import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const ProgressBar = ({ rank, maxRank, pointsPerTree }) => {

  const barClass = classnames('tiers__bar', {
    'tiers__bar--active': rank < pointsPerTree && pointsPerTree !== 0,
    'tiers__bar--hidden': rank === maxRank
  });

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
