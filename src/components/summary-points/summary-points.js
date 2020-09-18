import React from 'react';
import PropTypes from 'prop-types';

const SummaryPoints = ({current, total}) => {
  return (
    <div className="summary-points">
      <div className="summary-points__content">
        <div className="summary-points__counter">{current} / {total}</div>
        <div className="summary-points__label">Points Spent</div>
      </div>
    </div>
  );
};

SummaryPoints.propTypes = {
  current: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired
};

export default SummaryPoints;
