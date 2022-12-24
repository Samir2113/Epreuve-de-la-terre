const abc = "abcdefghijklmnopqrstuvwxyz";
let letter = process.argv[2].toLowerCase();

let indexLetter = abc.indexOf(letter);

console.log(abc.substring(indexLetter));
