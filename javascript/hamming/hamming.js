//
// This is only a SKELETON file for the 'Hamming' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const compute = (first, second) => {
  if (first.length == 0 && second.length > 0){
    throw 'left strand must not be empty';
  }
  
  if (second.length == 0 && first.length > 0){
    throw 'right strand must not be empty';
  }

  if (first.length != second.length){
    throw 'left and right strands must be of equal length';
  }

  let count = 0;
  let firstSplit = first.split('');
  let secondSplit = second.split('');

  if (firstSplit == secondSplit) {
    return count;
  } else if (!firstSplit) {
    throw 'left strand must not be empty';
  } else if (!secondSplit) {
    throw 'right strand must not be empty';
  } else {
      firstSplit.forEach(function (element, index) {
        if (element != secondSplit[index]) {
            count ++;
        }
      });
  }
  

  
  return count;
};
