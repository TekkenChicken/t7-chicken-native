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
      label: "10 - 13",
      value: {min:10, max:13}
    },
    {
      label: "Mid",
      value: {min:14, max:16}
    }
  ]
};

export default allFilterOptions = [
  hitLevel,
  speed
];
