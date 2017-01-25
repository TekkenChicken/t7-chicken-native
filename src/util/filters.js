// all filters go in here
function hasHighAttack (attack) {
  return attack.hit_level === 'h';
}

function hasLowAttack (attack) {
  return attack.hit_level === 'l';
}


export const hitLevelFilters = {
  category: 'Hit Level Filters',
  hasHighAttack: {
    function: hasHighAttack,
    name: 'Has High Attack'
  },
  hasLowAttack: {
    function: hasLowAttack,
    name: 'Has Low Attack'
  }
}
