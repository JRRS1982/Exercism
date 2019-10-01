//
// This is only a SKELETON file for the 'Leap' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isLeap = (input) => {
  if ( input % 400 == 0 ){
    return true;
  } else if (input % 100 == 0){
    return false;
  } else if (input % 4 == 0){
    return true;
  } else {
    return false;
  };
};
