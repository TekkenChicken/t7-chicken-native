// HIT LEVEL
const checkHitLevel = (level) => {
  return (move) => {
    return move.hit_level === level;
  };
};

// SPEED
const checkSpeed = (min, max) => {
  return (move) => {
    return min <= move.speed && move.speed <= max;
  };
};

export const hitLevelFilters = {
  category: 'Hit Level',
  filters: [
    {
      method: checkHitLevel('h'),
      name: 'High'
    },
    {
      method: checkHitLevel('m'),
      name: 'Mid'
    },
    {
      method: checkHitLevel('l'),
      name: 'Low'
    }
  ]
}

export const speedFilters = {
  category: 'Speed',
  filters: [
    {
      method: checkSpeed(10, 13),
      name: '10 - 13'
    },
    {
      method: checkSpeed(14, 16),
      name: '14 - 16'
    }
  ]
}

export default allFilters = {
  hitLevelFilters,
  speedFilters
};
