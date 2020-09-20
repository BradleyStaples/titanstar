// static data that, in a real world situation, would come from an API mmost likely

const data = {
  pointsSpent: 0,
  maxPoints: 6,
  trees: [
    {
      id: 'tree1',
      name: 'Talent Path 1',
      icons: [
        {
          id: 'skill1',
          name: 'chevrons',
          cost: 1,
          unlockedAt: 0
        },
        {
          id: 'skill2',
          name: 'silverware',
          cost: 1,
          unlockedAt: 1
        },
        {
          id: 'skill3',
          name: 'cake',
          cost: 1,
          unlockedAt: 2
        },
        {
          id: 'skill4',
          name: 'crown',
          cost: 1,
          unlockedAt: 3
        }
      ]
    },
    {
      id: 'tree2',
      name: 'Talent Path 2',
      icons: [
        {
          id: 'skill1',
          name: 'ship',
          cost: 1,
          unlockedAt: 0
        },
        {
          id: 'skill2',
          name: 'snorkel',
          cost: 1,
          unlockedAt: 1
        },
        {
          id: 'skill3',
          name: 'lightning',
          cost: 1,
          unlockedAt: 2
        },
        {
          id: 'skill4',
          name: 'skull',
          cost: 1,
          unlockedAt: 3
        }
      ]
    }
  ]
};

export default data;
