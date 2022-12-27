// Puissance d'un nombre

const nbr = parseInt(process.argv[2]);
const power = parseInt(process.argv[3]);
let result = nbr;
console.log(power);

if(isNaN(nbr) || isNaN(power)){
    console.log("Erreur!");
} else if(power < 0){
    console.log("Erreur!");
} else if(power == 0){
    result = 1;
    console.log(result);
} else {
    for(i = 0; i < power -1; i++){
        result = result * nbr;
    }
    console.log(result);
}