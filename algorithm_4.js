// If the array is SORTED
// Use this insight to write an (occasionally) faster version of the previous algorithm, the algorithm_3
var caller = 5519;

const sortedNumbers = [5514, 5515, 5516, 5517, 5518, 5519, 5520];

for (let i = 0; i < sortedNumbers.length; i++) {
  if (sortedNumbers[i] > caller) {
    console.log("Phone number not found.");
    break;
  }
  console.log("Searching....");
}
