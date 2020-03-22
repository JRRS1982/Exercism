const scores = {
    'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1, 'L': 1, 'N': 1, 'R': 1, 'S': 1, 'T': 1,
    'D': 2, 'G': 2,
    'B': 3, 'C': 3, 'M': 3, 'P': 3,
    'F': 4, 'H': 4, 'V': 4, 'W': 4, 'Y': 4,
    'K': 5,
    'J': 8, 'X': 8,
    'Q': 10, 'Z': 10,
}

const add = (a, b) => a + b
const value = (letter) => scores[letter]

export const score = (word) => word ? word.toUpperCase().split('').map(value).reduce(add) : 0

// This is not my solution, but i saw it and its too good not to spend some time looking at and learning from.

// Using a ternary this uppercases a word, splits it into an array, maps over each element in that array, creating a new
//  array with the return from that map... the may uses a value function that returns the values of the letter in the 
// split array from the scores object. Finally reduce is called on each element of this new, mapped array which is now
// numbers instead of letters - the reduce uses the function passed to it called add that just adds up every value and
// returns a single figure - the scrable score. Great solution! Really liked the use of map and reduce here - i cant
// improve on that. This is all the first operation on the original ternary, if there is no word a 0 is returned
