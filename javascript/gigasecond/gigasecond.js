//
// This is only a SKELETON file for the 'Gigasecond' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const gigasecond = (dateObject) => {
  const gigaSeconds = 1e12;
  return new Date(dateObject.getTime() + gigaSeconds)
};
