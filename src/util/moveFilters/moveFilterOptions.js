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

export default allFilterOptions = [
  hitLevel,
  speed
];
