export class Robot {
  name: string;
  names: Set<string>;

  constructor() {
    this.names = new Set([]);
    this.name = this.nameGenerator();
  }

  private generateName() {
    let preName = "";
    for (let index = 0; index < 5; index++) {
      if (index <= 1) {
        preName += this.generateRandomLetter();
      }
      if (index > 1) {
        preName += this.generateRandomNumber();
      }
    }

    return preName;
  }
  /**
  * TODO: refactor nameGenerator - would prefer to pass in arguments than mutate.
  */
  private nameGenerator(): string {
    this.name = "";
    while (this.name === "") {
      const n = this.generateName();
      if (!this.names.has(n)) {
        this.names.add(n);
        this.name = n;
        return this.name;
      }
    }
    return this.name;
  }

  resetName() {
    this.name = this.nameGenerator();
  }

  private generateRandomLetter() {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    return alphabet[Math.floor(Math.random() * alphabet.length)];
  }

  private generateRandomNumber() {
    Math.random();
    return Math.floor(Math.random() * 10);
  }

  public static releaseNames(): void {}
}
