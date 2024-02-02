const A = [23, 42, 5, 4, 20, 1, 6, 11, 17, 53];

var m = 1;
// Sets m to the index of the smallest value in A.
for (let i = 0; i < A.length; i++) {
  if (A[i] < A[m]) {
    m = i;
  }
}

console.log(m);
