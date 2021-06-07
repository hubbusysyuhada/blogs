/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  numbers = numbers.sort()
  for (let i = 0; i < 10; i++) {
    if (numbers[i] !== i) return i
  }
  return 'no missing number'
}

console.log(result(numbers));
