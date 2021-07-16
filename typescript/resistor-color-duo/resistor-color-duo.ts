// colour names as inputs - string
// number output - two digits
// will output only two digits if input is more than two.

const colorsInOrder = [
  "black",
  "brown",
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "violet",
  "grey",
  "white",
];

export class ResistorColor {
  private colors: string[];

  constructor(colors: string[]) {
    this.colors = colors;
    this.validate(colors);
  }

  validate = (colors: string[]) => {
    if (colors.length < 2) {
      throw new Error("At least two colors need to be present"); 
    }
  }

  value = (): number => {
    let result = [];
    for (const item of this.colors.splice(0,2)) {
      result.push(colorsInOrder.indexOf(item));
    }
    return Number(result.join(''));
  };
}
