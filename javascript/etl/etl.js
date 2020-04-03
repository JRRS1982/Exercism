import { RSA_NO_PADDING } from "constants";

export const transform = (old) => {
    var result = {};
    for (var score in old) {
        var letters = old[score];
        for (var letter in letters) {
            var lcLetter = letters[letter].toLowerCase();
            result[lcLetter] = Number(score);
        }
    }
    return result;
}
