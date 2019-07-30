const sentence = "hello there from lighthouse labs";


// Instead of the characters all appearing at the same time later on,
// we need them each be staggered. Perhaps each one can be 50ms apart.

//need a function that prints a character each time setTimeout is run.
let time = 50;

for (let char of sentence) {
  setTimeout(function () {
    console.log(char);
  }, time);
  time += 50;
};