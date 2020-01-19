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
  let item;

  for (item of input.slice(0,2)) {
    result.push(COLOURS.indexOf(item));
  }

  return Number(result.join(''));
};
