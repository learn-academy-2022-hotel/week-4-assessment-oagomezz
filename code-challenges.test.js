// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.
// HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("shuffle", () => {
  it("returns a shuffled array", () => {
    expect(shuffle(["purple", "blue", "green", "yellow", "pink"])).not.toEqual(expect.arrayContaining(colors1))
    expect(shuffle([
      "chartreuse",
      "indigo",
      "periwinkle",
      "ochre",
      "aquamarine",
      "saffron"
    ])).not.toEqual(expect.arrayContaining(colors2))
  })
})
const colors1 = ["purple", "blue", "green", "yellow", "pink"]
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
const colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron"
]
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

// ReferenceError: shuffle is not defined

// b) Create the function that makes the test pass.
// input: an array of strings 
// output: an array of strings 
// method: remove the zeroeth index of the array by using slice and setting values to 1 and array.length. 
// use the 

const shuffle = (array ) => {
  let array2 = array.slice(1,array.length)
  return array2.sort(() => Math.random() - 0.5 )
}

console.log(shuffle(colors1))
console.log(shuffle(colors2))
// --------------------2) Create a function that takes in an object that contains up votes and down votes and returns the end tally.

describe("totalVotes", () => {
  it("returns sum of all votes", () => {
    expect(totalVotes({ upVotes: 13, downVotes: 2})).toEqual(11);
    expect(totalVotes({ upVotes: 2, downVotes: 33})).toEqual(-31)
  })
})

// ReferenceError: totalVotes is not defined

// a) Create a test with expect statements for each of the variables provided.
// Method: Create a function that will take in upvotes and subtract the number of downvotes to get the total votes
// Input: object
// Output: number 
const votes1 = { upVotes: 13, downVotes: 2 }

// Expected output: 11
const votes2 = { upVotes: 2, downVotes: 33 }

// Expected output: -31

// b) Create the function that makes the test pass.
// Method: create a function that will take in the number of upVotes and downVotes and will return the difference of the two. 
// Input: key:values
// Output: difference of values 
const totalVotes = ({upVotes, downVotes}) => {
  return (upVotes - downVotes)
}
console.log(totalVotes(votes1))
console.log(totalVotes(votes2))
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.


const dataArray1 = ["array", "object", "number", "string", "Boolean"]
const dataArray2 = ["string", "null", "Boolean", "string", "undefined"]

describe("finalDataArray", () => {
  it("Returns combo array with no duplicates", () => {
    expect(finalDataArray(["array", "object", "number", "string", "Boolean"],["string", "null", "Boolean", "string", "undefined"])).toEqual(["array", "object", "number", "string", "Boolean", "null", "undefined"])
  })
})

// ReferenceError: finalDataArray is not defined

// a) Create a test with an expect statement using the variables provided.
// Method: Create a function named finalDataSet and use the set object to save the unique values of any type into our array. (*only allows one value per element so it will remove duplicates*)
//  We will pass in the two individual arrays using the spread operator which will allow us to pass in multiple iterables through the function and it will return the combined arrays with duplicates removed.
// Input: two arrays
// Output: array without duplicates
var finalDataArray = () => {
  return [...new Set([...dataArray1,...dataArray2])]
} 
console.log(finalDataArray())
// Expected output: ["array", "object", "number", "string", "Boolean", "null", "undefined"]

// b) Create the function that makes the test pass.
