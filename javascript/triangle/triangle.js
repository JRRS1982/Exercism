export class Triangle {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  kind() {
    this.sides = [this.first, this.second, this.third].sort((a, b) => a - b);

    if (this.first === 0 || this.first < 0) {
        throw 'illegal';
    }

    if (this.first + this.second <= this.third 
        || this.second + this.third <= this.first 
        || this.first + this.third <= this.second) {
      throw 'illegal';
    }
    
    const TRIAGLE_TYPES = { 1: 'equilateral', 2: 'isosceles', 3: 'scalene' };
    
    if (this.first === this.second && this.second === this.third ) {
        return TRIAGLE_TYPES[1];
    } else if (this.first === this.second 
      || this.first === this.third 
      || this.second === this.third) {
        return TRIAGLE_TYPES[2];
    } else {
        return TRIAGLE_TYPES[3];
    }
  }
}
