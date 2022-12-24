const abc = "abcdefghijklmnopqrstuvwxyz";
const letter = process.argv[2].toLowerCase();

let indexLetter = abc.indexOf(letter);
let newAbc = abc.charAt(indexLetter);

for(i = indexLetter + 1; i < abc.length; i++){
     
    newAbc += abc.charAt(i);
}

console.log(newAbc);
