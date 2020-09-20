import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

const SkillIcon = (props) => {
  const {
    cost,
    name,
    unlockedAt,
    pointsSpent,
    maxPoints,
    pointsPerTree,
    validateActivation,
    validateDeactivation
  } = props;

  const [active, setActive] = useState(false);
  const iconClass = classnames(`tiers__icon tiers__icon--${name}`, {
    'tiers__icon--active': active,
    'tiers__icon--invalid': unlockedAt > pointsPerTree,
    'tiers__icon--maxed': pointsSpent === maxPoints
  });

  const toggleActive = (event) => {
    event.preventDefault();

    // if already active, do not activate again
    if (active) {
      return;
    }

    // only want to toggle the status if the parent says its okay
    const isValid = validateActivation(unlockedAt, cost);
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
    const isValid = validateDeactivation(unlockedAt, cost);
    if (isValid) {
      setActive(false);
    }
  };

  return (
    <div
      className={iconClass}
      onClick={toggleActive}
      onContextMenu={toggleInactive}
      title={name}
    ></div>
  );
};

SkillIcon.propTypes = {
  name: PropTypes.string.isRequired,
  cost: PropTypes.number.isRequired,
  unlockedAt: PropTypes.number.isRequired,
  pointsSpent: PropTypes.number.isRequired,
  maxPoints: PropTypes.number.isRequired,
  pointsPerTree: PropTypes.number.isRequired,
  validateActivation: PropTypes.func.isRequired,
  validateDeactivation: PropTypes.func.isRequired
};

export default SkillIcon;
