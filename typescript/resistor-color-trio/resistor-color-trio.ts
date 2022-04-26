export function decodedResistorValue(colors: string[]): string {
  interface IMap {
    [key: string]: number
  }
  
  const rings: IMap = {
    black: 0,
    brown: 1,
    red: 2,
    orange: 3,
    yellow: 4,
    green: 5,
    blue: 6,
    violet: 7,
    grey: 8,
    white: 9,
  }

  let zeros = '';

  for (let index = 0; index < rings[colors[2]]; index++) {
    zeros += '0';
  }
  
  let result = `${rings[colors[0]]}${rings[colors[1]]}${zeros}`;

  if (result.substring(result.length - 3) === '000') {
    result = result.slice(0,-3);
    return `${result} kiloohms`;
  } 
  return `${result} ohms`;
}
