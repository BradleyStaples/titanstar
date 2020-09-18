import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SkillIcon = ({ rank, icon, pointsSpent, maxPoints, pointsPerTree, validateActivation, validateDeactivation}) => {

  const [active, setActive] = useState(false);
  const iconClass = classnames(`tiers__icon tiers__icon--${icon}`, {
    'tiers__icon--active': active,
    'tiers__icon--invalid': rank > pointsPerTree,
    'tiers__icon--maxed': pointsSpent === maxPoints
  });

  const toggleActive = (event) => {
    event.preventDefault();

    // if already active, do not activate again
    if (active) {
      return;
    }

    // only want to toggle the status if the parent says its okay
    const isValid = validateActivation(rank);
    if (isValid) {
      setActive(true);
    }
  };

  const toggleInactive = (event) => {
    event.preventDefault();

    // if already inactive, do not deactivate again
    if (!active) {
      return;
    }

    // only want to toggle the status if the parent says its okay
    const isValid = validateDeactivation(rank);
    if (isValid) {
      setActive(false);
    }
  };

  return (
    <div
      className={iconClass}
      onClick={toggleActive}
      onContextMenu={toggleInactive}
      title={icon}
    ></div>
  );
};

SkillIcon.propTypes = {
  rank: PropTypes.number.isRequired,
  icon: PropTypes.string.isRequired,
  pointsSpent: PropTypes.number.isRequired,
  maxPoints: PropTypes.number.isRequired,
  pointsPerTree: PropTypes.number.isRequired,
  validateActivation: PropTypes.func.isRequired,
  validateDeactivation: PropTypes.func.isRequired
};

export default SkillIcon;
