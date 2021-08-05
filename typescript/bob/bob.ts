class Bob {
  isQuestion = (sentence: string): boolean => /\?$/.test(sentence.trim()); // question mark at the end
  isYelling = (sentence: string): boolean => /[A-Za-z]+/.test(sentence) && sentence === sentence.toUpperCase(); // first character is capital letter and rest + of them are lower case
  isEmpty = (sentence: string): boolean => /^\s*$/.test(sentence); // white space or lines from start to end

  hey(sentence: string): string {
    if (this.isQuestion(sentence) && this.isYelling(sentence)) {
      return "Calm down, I know what I'm doing!";
    }

    if (this.isYelling(sentence)) {
      return "Whoa, chill out!";
    }

    if (this.isQuestion(sentence)) {
      return "Sure.";
    }

    if (this.isEmpty(sentence)) {
      return "Fine. Be that way!";
    }

    return "Whatever.";
  }
}

export default Bob;
