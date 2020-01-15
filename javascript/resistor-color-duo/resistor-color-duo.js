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
  var result = [];


  input.forEach(function(element){
  if (result.length < 2) {
    result.push(COLOURS.indexOf(element))
  }
})

  return parseInt(result.join(''));
};
