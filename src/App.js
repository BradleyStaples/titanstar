import React, { useState } from 'react';
import PropTypes from 'prop-types';

import SkillTree from './components/skill-tree';
import SummaryPoints from './components/summary-points';
import './styles/app.scss';

const App = ({data}) => {

  const [pointsSpent, setPointsSpent] = useState(data.pointsSpent);

  const updateSummaryPoints = (offset) => {
    setPointsSpent(pointsSpent + offset);
  }

  return (
    <div className="page">
      <header className="page__header">
        <h1 className="page__title">TitanStar Legends &mdash; Rune Mastery Loadout Talent Calculator 9000</h1>
      </header>
      <div className="page__body">
        <div className="talent-paths">
          {data.trees.map((tree) => (
            <SkillTree
              key={tree.id}
              id={tree.id}
              name={tree.name}
              icons={tree.icons}
              pointsSpent={pointsSpent}
              maxPoints={data.maxPoints}
              updateSummaryPoints={updateSummaryPoints}
            />
          ))}
        </div>
        <SummaryPoints current={pointsSpent} total={data.maxPoints} />
      </div>
    </div>
  );
}

App.propTypes = {
  data: PropTypes.object.isRequired
};

export default App;
