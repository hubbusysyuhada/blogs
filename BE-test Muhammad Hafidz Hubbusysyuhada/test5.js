/**
 * Direction:
 * Find prefix of the word from array of string
 *
 * Expected Result:
 * fl
 */

const words = ['flower', 'flow'];
const words2 = ['flower', 'flow', 'flight'];
const words3 = [ 'bundle', 'bundesliga', 'bubble', 'bus']

function result(words) {
  let result = ''
  for (let i = 0; i < words.length; i++) {
    if (!result) result = words[i]
    for (let j = 0; j < result.length; j++) {
      if (result[j] !== words[i][j]) {
        result = result.slice(0, j)
      }
    }    
  }
  return result
}

console.log(result(words));
console.log(result(words2));
console.log(result(words3));