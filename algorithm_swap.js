// Sorting an array is a big operation. Many sorting algorithms work by making sure a part of the array is sorted, then they gradually make that sorted segment bigger.

// Here is the example of swapping value of the index in the array

var exampleArray = [1, 4, 6, 8, 9, 14, 16, 29];
var first = exampleArray[2]; // 6
var second = exampleArray[6]; // 16

// Temporary holder
var temporaryHolder = first;

// The value of first is now 16
first = second; // 16

// The value of second is now 6 from the temporary holder which placed in the first part
second = temporaryHolder; // 6

console.log(first, second);
