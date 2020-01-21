export const toRna = (input) => {
  let result = "";
  let split = input.split("");
  let dnaToRna = {
    "G": "C",
    "C": "G",
    "T": "A",
    "A": "U"
  };

  if (input == '') {
    return result;
  }

  split.forEach(element =>
    result += dnaToRna[element]
  );

  return result;
};
