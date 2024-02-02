// Ramon's phone can connect people to their phone numbers by storing numbers and names in two arrays that have the same length and parallel structure.

var caller = "09856635214";

const phoneNumbers = [
  "09654885698",
  "09587748558",
  "09366256859",
  "09548812454",
  "09878785685",
  "09856635214",
  "09741253548",
];

const contactNumbers = [
  "John",
  "JR",
  "Junel",
  "Junjun",
  "Junnie",
  "Jojo",
  "Jjonjon",
];

// Because the arrays have the same length, either "for" instruction works.
for (let i = 0; i < phoneNumbers.length; i++) {
  if (caller == phoneNumbers[i]) {
    contactNumbers[i];
    console.log("Known number");
    break;
  }
  console.log("Unknown number");
}
