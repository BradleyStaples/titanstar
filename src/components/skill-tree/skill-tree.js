import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SkillIcon from '../skill-icon';
import ProgressBar from '../progress-bar';

const SkillTree = ({ id, name, icons, pointsSpent, maxPoints, updateSummaryPoints }) => {

  const [pointsPerTree, setPointsPerTree] = useState(0);
  const numberOfIcons = icons.length - 1;

  const validateActivation = (unlockedAt, cost) => {
    // a skill is valid to be activated if:
    // 1. the rank equals the current points for this tree
    //    since ranks are 0-based indices, this indicates that all previous ranks have been activated
    //    example: to select rank 3, its index=2. rank 1 = 1 point, rank 2 = 1 point, so it has
    //    2 points and its index=2, so they match
    // 2. the points spent in total are less than the max allowed points to be spent
    if (unlockedAt === pointsPerTree && pointsSpent < maxPoints) {
      setPointsPerTree(pointsPerTree + cost);
      updateSummaryPoints(cost);
      return true;
    }
    return false;
  };

  const validateDeactivation = (unlockedAt, cost) => {
    // a skill is valid to be deactivated if:
    // 1. it's rank is exactly one less than the total number of points in this tree
    if (pointsPerTree - cost === unlockedAt) {
      setPointsPerTree(pointsPerTree - cost);
      updateSummaryPoints(-cost);
      return true;
    }
    return false;
  };

  const renderSkillIcon = (treeId, icon, index) => {
    const { id, name, cost, unlockedAt } = icon;
    return (
      <li key={`${treeId}-${id}`} className="tiers__skill">
        <SkillIcon
          cost={cost}
          name={name}
          unlockedAt={unlockedAt}
          pointsSpent={pointsSpent}
          maxPoints={maxPoints}
          pointsPerTree={pointsPerTree}
          validateActivation={validateActivation}
          validateDeactivation={validateDeactivation}
        />
        <ProgressBar
          iconIndex={index}
          numberOfIcons={numberOfIcons}
          pointsPerTree={pointsPerTree}
        />
      </li>
    );
  };

  return (
    <div className="talent-paths__tree">
      <div className="talent-paths__label">{name}</div>
      <ul className="tiers">
        {icons.map((icon, index) => (
          renderSkillIcon(id, icon, index)
        ))}
      </ul>
    </div>
  );
};

SkillTree.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  icons: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      cost: PropTypes.number.isRequired,
      unlockedAt: PropTypes.number.isRequired
    })
  ).isRequired,
  pointsSpent: PropTypes.number.isRequired,
  maxPoints: PropTypes.number.isRequired,
  updateSummaryPoints: PropTypes.func.isRequired
};

export default SkillTree;
