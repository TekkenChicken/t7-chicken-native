// all filters go in here

//HIT LEVEL FILTERS
function hasHighAttack (attack) {
  return attack.hit_level === 'h';
}

function hasLowAttack (attack) {
  return attack.hit_level === 'l';
}

//SPEED FILTERS

function tenToThirteen(attack) {
  return attack.speed <= 13;
}

function thirteenToSixteen(attack) {
  return attack.speed > 13 && attack.speed <= 16;
}


export const hitLevelFilters = {
  category: 'Hit Level',
  filters: [
    {
      function: hasHighAttack,
      name: 'Has High'
    },
    {
      function: hasLowAttack,
      name: 'Has Low'
    }
  ]
}

export const speedFilters = {
  category: 'Speed',
  filters: [
    {
      function: tenToThirteen,
      name: '10-13'
    },
    {
      function: thirteenToSixteen,
      name: '14-16'
    }
  ]
}

export default allFilters = {
  hitLevelFilters,
  speedFilters
}
