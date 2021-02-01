var permArr = [],
  usedChars = []
function permute(input) {
  var i, ch
  for (i = 0; i < input.length; i++) {
    ch = input.splice(i, 1)[0]
    console.log(ch)
    usedChars.push(ch)
    if (input.length == 0) {
      permArr.push(usedChars.slice())
    }
    permute(input)
    input.splice(i, 0, ch)
    usedChars.pop()
  }
  return permArr
}

permute([1, 2])

console.log(permArr)

console.log([1, 2].splice(0, 1)[0])

let findPermutations = string => {
  if (!string || typeof string !== "string") {
    return "Please enter a string"
  } else if (string.length < 2) {
    return string
  }

  let permutationsArray = []

  for (let i = 0; i < string.length; i++) {
    let char = string[i]

    if (string.indexOf(char) != i) continue

    let remainingChars = string.slice(0, i) + string.slice(i + 1, string.length)

    for (let permutation of findPermutations(remainingChars)) {
      permutationsArray.push(char + permutation)
    }
  }
  return permutationsArray
}

console.log(findPermutations("1211"))
