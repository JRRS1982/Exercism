//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const decodedValue = (input) => {
  const COLOURS = ['black',
                  'brown',
                  'red',
                  'orange',
                  'yellow',
                  'green',
                  'blue',
                  'violet',
                  'grey',
                  'white'
  ];

  const result = [];

  input.slice(0,2).forEach(function(element) {
    result.push(COLOURS.indexOf(element))
  })

  return Number(result.join(''));
};
