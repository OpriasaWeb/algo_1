var listOfNumbers = [
  52, 10, 105, 110, 20, 15, 16, 42, 3, 7, 11, 32, 6, 140, 100, 284, 9, 102, 543,
  588, 894, 44, 433, 89,
];

for (let i = 0; i < listOfNumbers.length; i++) {
  let current = i;
  while (current > 0 && listOfNumbers[current] < listOfNumbers[current - 1]) {
    // Swap elements
    var temp = listOfNumbers[current];
    listOfNumbers[current] = listOfNumbers[current - 1];
    listOfNumbers[current - 1] = temp;

    // Move current index to the left
    current = current - 1;
  }
}

console.log(listOfNumbers);
