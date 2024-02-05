// This algorithm is called selection sort, because it selects the smallest value in the unsorted segment that starts at the index current. Then, the algorithm swaps that smallest value to its ultimate home in the array.

var listOfNumbers = [
  52, 10, 105, 110, 20, 15, 16, 42, 3, 7, 11, 32, 6, 140, 100, 284, 9, 102, 543,
  588, 894, 44, 433, 89,
];

for (let i = 0; i < listOfNumbers.length - 1; i++) {
  var minIndex = i;
  for (let j = i + 1; j < listOfNumbers.length; j++) {
    if (listOfNumbers[j] < listOfNumbers[minIndex]) {
      minIndex = j;
    }
  }

  // Swap whether the condition above meets or not
  var temp = listOfNumbers[i];
  listOfNumbers[i] = listOfNumbers[minIndex];
  listOfNumbers[minIndex] = temp;
}
console.log(listOfNumbers);
