const abc = "abcdefghijklmnopqrstuvwxyz";

// Verify if input is a letter:

if(abc.indexOf(process.argv[2].toLowerCase()) != -1){
    
    const inputLetter = process.argv[2].toLowerCase();
    const indexLetter = abc.indexOf(inputLetter);
    let newString = "";

    for(i = indexLetter; i < abc.length; i++){    
        newString += abc.charAt(i);
    }

    console.log(newString);
}