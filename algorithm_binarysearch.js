// Binary search is an array searching algorithm that works on sorted arrays.

// Binary search is a strategy that has two parts:
// 1. Pick an array index in the middle of the guessing interval.
// 2. If the number you're seeking isn't at that array index, use the number stored at that array index to shrink the guessing interval as much as possible.

const listOfSortedNumbers = [
  3, 6, 7, 9, 10, 11, 15, 16, 20, 32, 42, 44, 52, 89, 100, 102, 105, 110, 140,
  284, 433, 543, 588, 894,
];

var low = 0;
var high = listOfSortedNumbers.length - 1;
var target = 33;

while (low <= high) {
  // Each time the while loop iterates, it will first look in the mid calculation, like what are the current value of low and high
  const mid = Math.floor((low + high) / 2);
  console.log(mid, listOfSortedNumbers[mid]);
  // If the mid value index is greater than, meaning the right side of the array is uneccessary in this case now
  if (listOfSortedNumbers[mid] > target) {
    high = mid - 1;
  }
  // If the mid value index is greater than, meaning the left side of the array is uneccessary in this case now
  else if (listOfSortedNumbers[mid] < target) {
    low = mid + 1;
  }
  // If the mid value index is equals to the target, then it is done. Break the loop
  else if (listOfSortedNumbers[mid] == target) {
    console.log("I got it, here it is " + mid, listOfSortedNumbers[mid]);
    break;
  }
}
