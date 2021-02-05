const findPermutations = string => {
  if (!string || typeof string !== "string") {
    return ""
  } else if (string.length < 2) {
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    if (string.indexOf(char) !== i) continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation)
    }
  }
  return permutationsArray
}

const findSubstrings = (string, size) => {
  if (!string || typeof string !== "string") {
    return ""
  } else if (string.length < size) {
    return []
  }
  let substringsArray = []
  for (let i = 0; i < string.length - 1; i++) {
    for (let j = string.length - 1; j - i === size; j--) {
      substringsArray.push(string.slice(i, j))
    }
  }

  return substringsArray
}

// let array = findPermutations("1234")
// let combinations = new Set()
// array.forEach(item => combinations.add(item))
// for (let number of array) {
//   //findSubstrings(number, 4).forEach(item => combinations.add(item))
//   combinations.add(number.slice(0, 2))
//   combinations.add(number.slice(0, 3))
// }
// console.log(Array.from(combinations))
// console.log(combinations.size)

export { findPermutations, findSubstrings }
