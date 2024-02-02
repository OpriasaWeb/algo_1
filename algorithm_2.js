// Ramon's phone stores the phone numbers of his known contacts in an array.
// When Ramon gets a phone call, he wants his phone to announce whether the caller is known (in his contact list) or not.

const phoneNumbers = [
  "09654885698",
  "09587748558",
  "09366256859",
  "09548812454",
  "09878785685",
  "09856635214",
  "09741253548",
];
var caller = "09875515265"; // or change it to random number that is not same in any of these array above e.g. 09875515265

var found = 0; // flag variable

for (let i = 0; i < phoneNumbers.length; i++) {
  if (caller == phoneNumbers[i]) {
    // if this condition satisfy, overwrite the found variable into equals 1
    found = 1;
  }
}

// After the loop
if (found != 0) {
  console.log("Known caller");
} else {
  console.log("Unkown caller");
}
