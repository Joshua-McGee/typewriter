const sentence = "hello there from lighthouse labs";

setTimeout(() => {
  for (let char of sentence) {
    process.stdout.write(char) + '\n';
  }
}, 50);

// for (let char of sentence) { // loops through each character in the string
//   // console.log(char); console.log adds a new line character (/n) to the end of each string (character in this case)
//   setTimeout(() => {
//     process.stdout.write(char); // prints on the same line but so does our prompt.
//   }, 1000);
// }