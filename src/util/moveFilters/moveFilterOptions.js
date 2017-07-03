const hitLevel = {
  label: "Hit Level",
  key: "hit_level",
  options: [
    {
      label: "Low",
      value: 'l'
    },
    {
      label: "Mid",
      value: 'm'
    },
    {
      label: "High",
      value: 'h'
    }
  ]
};

const speed = {
  label: "Speed",
  key: "speed",
  options: [
    {
      label: "Less Than 10f",
      value: {max:10}
    },
    {
      label: "10f - 13f",
      value: {min:10, max:13}
    },
    {
      label: "14f - 16f",
      value: {min:14, max:16}
    },
    {
      label: "More Than 16f",
      value: {min:16}
    }
  ]
};

const crushProperties = {
  label: "Crush Properties",
  key: "hit_level",
  options: [
    {
      label: "Low Crush",
      value: 'TJ'
    },
    {
      label: "High Crush",
      value: 'TC'
    }
  ]
};

const specialProperties = {
  label: "Special Properties",
  key: "notes",
  options: [
    {
      label: "Rage Art",
      value: "rageart"
    },
    {
      label: "Rage Drive",
      value: "ragedrive"
    },
    {
      label: "Homing",
      value: "homing"
    },
    {
      label: "Tailspin",
      value: "tailspin"
    },
    {
      label: "Powercrush",
      value: "powercrush"
    }
  ]
};

const onBlockProperties = {
  label: "On Block",
  key: "on_block",
  options: [
    {
      label: "Plus",
      value: 'plus'
    },
    {
      label: "Negative",
      value: 'negative'
    },
    {
      label: "Punishable",
      value: 'punishable'
    },
    {
      label: 'Safe',
      value: 'safe'
    },
    {
      label: 'Opponent Crouch',
      value: 'oc'
    }
  ]
};

const onHitProperties = {
  label: "On Hit",
  key: "on_hit",
  options: [
    {
      label: "Plus",
      value: 'plus'
    },
    {
      label: 'Negative',
      value: 'negative'
    },
    {
      label: 'Knock Down',
      value: 'knd'
    },
    {
      label: 'Launch',
      value: 'launch'
    },
    {
      label: 'Opponent Crouch',
      value: 'oc'
    },
    {
      label: 'Crumple Stun',
      value: 'CS'
    }
  ]
};

const onCHProperties = {
  label: "On CH",
  key: "on_ch",
  options: [
    {
      label: "Plus",
      value: 'plus'
    },
    {
      label: 'Negative',
      value: 'negative'
    },
    {
      label: 'Knock Down',
      value: 'knd'
    },
    {
      label: 'Launch',
      value: 'launch'
    },
    {
      label: 'Opponent Crouch',
      value: 'oc'
    },
    {
      label: 'Crumple Stun',
      value: 'CS'
    }
  ]
};

// util
export default allFilterOptions = [
  hitLevel,
  speed,
  crushProperties,
  onBlockProperties,
  onHitProperties,
  onCHProperties,
  specialProperties
];
