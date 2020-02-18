export class Triangle {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  kind() {
    this.sides = [this.first, this.second, this.third].sort((a, b) => a - b);

    if (this.sides[0] === 0 || this.sides[0] < 0) {
        throw 'illegal';
    }

    if (this.sides[0] + this.sides[1] < this.sides[2]) {
      throw 'illegal';
    }

    const TRIAGLE_TYPES = { 1: 'equilateral', 2: 'isosceles', 3: 'scalene' };

    if (this.sides[0] === this.sides[1] && this.sides[1] === this.sides[2] ) {
        return TRIAGLE_TYPES[1];
    } else if (this.sides[0] === this.sides[1]
      || this.sides[0] === this.sides[1]
      || this.sides[1] === this.sides[2]) {
        return TRIAGLE_TYPES[2];
    } else {
        return TRIAGLE_TYPES[3];
    }
  }
}
