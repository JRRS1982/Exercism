class Pangram {
  sentence: string;
  alphabet: string = "abcdefghijklmnopqrstuvwxyz";

  constructor(sentence: string) {
    this.sentence = sentence;
  }

  isPangram(): boolean {
    let result = this.sentence.toLowerCase().match(/[a-z]/g); // regex to match letters of the alphabet
    let unique = [...new Set(result)];
    return unique.length === this.alphabet.length;
  }
}

export default Pangram;
