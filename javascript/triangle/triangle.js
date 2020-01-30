export class Triangle {
  constructor(first, second, third) {
    this.first = first;
    this.second = second;
    this.third = third;
  }

  kind() {
    if (this.first === 0 || this.second === 0 || this.third === 0) {
      throw 'a triange must have three sides';
    } else if (this.first < 0 || this.second < 0 || this.third < 0) {
      throw 'illegal';
    } else if ( this.first + this.second <= this.third ||
        this.second + this.third <= this.first ||
        this.first + this.third <= this.second) {
      throw "illegal";
    }

    if (this.first === this.second && this.second === this.third ) {
      return "equilateral";
    } else if (this.first === this.second 
      || this.first === this.third 
      || this.second === this.third) {
      return "isosceles";
    } else {
      return "scalene";
    }
  }
}

