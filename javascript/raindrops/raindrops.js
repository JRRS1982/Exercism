export const convert = (rain) => {
  let result = '';  
  if (rain % 3 == 0){
    result += 'Pling';
  }
  if (rain % 5 == 0) {
    result += 'Plang';
  }
  if (rain % 7 == 0) {
    result += 'Plong';
  }
  if (result ==  ''){
    result += rain;
  }

  return result;
};
