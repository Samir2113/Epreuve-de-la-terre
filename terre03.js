const abc = "abcdefghijklmnopqrstuvwxyz";

// Verify if input is a letter:

if(process.argv[2] && isNaN(process.argv[2])){
    
    const inputLetter = process.argv[2].toLowerCase();
    let indexLetter = abc.indexOf(inputLetter);
    let newString = abc.charAt(indexLetter);

    for(i = indexLetter + 1; i < abc.length; i++){    
        newAbc += abc.charAt(i);
    }

    console.log(newString);
}