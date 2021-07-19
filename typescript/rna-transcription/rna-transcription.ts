const NUCLEOTIDE: { [key: string]: string } = {
  G: `C`,
  C: `G`,
  T: `A`,
  A: `U`,
};

class Transcriptor {
  toRna(dna: string) {
    const split = dna.split("");

    if (split.some((letter) => !Object.keys(NUCLEOTIDE).includes(letter))) {
      throw new Error("Invalid input DNA.");
    }

    return split.map((letter) => NUCLEOTIDE[letter]).join("");
  }
}

export default Transcriptor;
