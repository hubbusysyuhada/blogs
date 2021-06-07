/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  let result = []
  for (let i = 0; i < data.length; i++) {
    let flag = true
    for (let j = 0; j < result.length; j++) {
      if (data[i] === result[j]) {
        flag = false
        break
      }
    }
    if (flag) result.push(data[i])
  }
  return result
}

console.log(result(data));
