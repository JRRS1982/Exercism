class Matrix {
  rows: number[][] = [];
  columns: number[][] = [];

  constructor(input: string) {
    this.createMatrix(input);
  }

  createRows(input: string): void {
    let newSplitOut = input.split("\n");
    for (let index = 0; index < newSplitOut.length; index++) {
      let spaceSplitOut = newSplitOut[index].split(' ');
      const numbers = spaceSplitOut.map(x => parseInt(x));
      this.rows.push(numbers);
    }
  }

  createColumns(): void {
    for (let index = 0; index < this.rows.length; index++) {
      this.columns[index] = [];
      for (let i = 0; i < this.rows.length; i++) {
        this.columns[index].push(this.rows[i][index]); 
      }
    }
  }

  createMatrix(input: string): void {
    this.createRows(input);
    this.createColumns();
  }
}

export default Matrix;
